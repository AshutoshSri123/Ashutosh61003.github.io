import {
  collection,
  doc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  getDoc,
  getDocs,
  serverTimestamp,
  runTransaction,
  writeBatch,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { isSiteAdmin } from "../account/identity";
import { OWNER_UID, validateEntry } from "./model";
export {
  collection,
  doc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
  deleteDoc,
};
export const contentRef = collection(db, "personalContent");
export const settingsRef = doc(db, "personalSettings", "site");
export const row = (snap) => ({ id: snap.id, ...snap.data() });
export async function saveContent(entry) {
  validateEntry(entry);
  const { id, ...data } = entry;
  const ref = id ? doc(contentRef, id) : doc(contentRef);
  await runTransaction(db, async (transaction) => {
    const existing = await transaction.get(ref);
    if (existing.exists() && existing.data().revision !== data.revision)
      throw new Error(
        "This entry changed on another device. Reopen it before saving. Your draft is still here.",
      );
    transaction.set(ref, {
      ...data,
      revision: (existing.data()?.revision || 0) + 1,
      date:
        data.date ||
        (data.type === "story" || !data.published
          ? ""
          : (() => {
              const now = new Date();
              return [
                now.getFullYear(),
                String(now.getMonth() + 1).padStart(2, "0"),
                String(now.getDate()).padStart(2, "0"),
              ].join("-");
            })()),
      updatedAt: serverTimestamp(),
      createdAt: existing.data()?.createdAt || serverTimestamp(),
    });
  });
  return ref.id;
}
export async function sendMessage(
  user,
  text,
  conversationId = user.uid,
  kind = "message",
) {
  if (!text.trim() || text.length > 4000)
    throw new Error("Write a message of 1–4,000 characters.");
  const conversation = doc(db, "personalConversations", conversationId);
  const message = doc(collection(conversation, "messages"));
  await runTransaction(db, async (transaction) => {
    const existing = await transaction.get(conversation);
    const previous = existing.data();
    if (previous?.blocked && !isSiteAdmin(user))
      throw new Error("This conversation is closed.");
    if (
      !isSiteAdmin(user) &&
      previous?.lastMessageAt?.toMillis() > Date.now() - 5000
    )
      throw new Error(
        "Please wait a few seconds before sending another message.",
      );
    if (!existing.exists() && isSiteAdmin(user))
      throw new Error("Choose an existing conversation.");
    transaction.set(message, {
      text: text.trim(),
      senderId: user.uid,
      createdAt: serverTimestamp(),
      kind,
    });
    transaction.set(conversation, {
      ...(previous || {
        ownerId: user.uid,
        ownerName: (isSiteAdmin(user)
          ? "Ashutosh"
          : user.displayName || "Reader"
        ).slice(0, 100),
        ownerPhoto: user.photoURL || "",
        createdAt: serverTimestamp(),
        blocked: false,
        adminReadAt: null,
        userReadAt: null,
      }),
      lastMessage: text.trim(),
      lastMessageAt: serverTimestamp(),
      lastMessageId: message.id,
      lastSenderId: user.uid,
      archived: false,
      ...(isSiteAdmin(user)
        ? { adminReadAt: serverTimestamp() }
        : { userReadAt: serverTimestamp() }),
    });
  });
}
export async function sendSpaceMessage(user, spaceId, text) {
  if (!text.trim() || text.length > 2000)
    throw new Error("Write a message of 1–2,000 characters.");
  const space = doc(db, "personalSpaces", spaceId);
  const member = doc(space, "members", user.uid);
  const message = doc(collection(space, "messages"));
  await runTransaction(db, async (tx) => {
    const snapshot = await tx.get(member);
    if (!snapshot.exists()) throw new Error("Join this discussion first.");
    if (snapshot.data().lastSentAt?.toMillis() > Date.now() - 5000)
      throw new Error("Please wait a few seconds before posting again.");
    tx.update(member, {
      lastSentAt: serverTimestamp(),
      lastMessageId: message.id,
    });
    tx.set(message, {
      text: text.trim(),
      senderId: user.uid,
      displayName: (user.uid === OWNER_UID
        ? "Ashutosh"
        : user.displayName || "Reader"
      ).slice(0, 100),
      createdAt: serverTimestamp(),
    });
  });
}
export async function joinSpace(user, spaceId) {
  await setDoc(doc(db, "personalSpaces", spaceId, "members", user.uid), {
    uid: user.uid,
    displayName: (user.uid === OWNER_UID
      ? "Ashutosh"
      : user.displayName || "Reader"
    ).slice(0, 100),
    photoURL: user.photoURL || "",
    joinedAt: serverTimestamp(),
    lastSentAt: null,
    lastMessageId: "",
  });
}
export async function importSeeds(entries) {
  const batch = writeBatch(db);
  for (const entry of entries) {
    const ref = doc(contentRef, entry.id);
    if ((await getDoc(ref)).exists()) continue;
    const { id: _id, ...data } = entry;
    batch.set(ref, {
      ...data,
      sortDate: data.date || "",
      revision: 1,
      updatedAt: serverTimestamp(),
      createdAt: serverTimestamp(),
    });
  }
  await batch.commit();
}
