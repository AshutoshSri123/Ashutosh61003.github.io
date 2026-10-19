import { readFile } from "node:fs/promises";
import { before, after, beforeEach, test } from "node:test";
import {
  initializeTestEnvironment,
  assertFails,
  assertSucceeds,
} from "@firebase/rules-unit-testing";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  limit,
  updateDoc,
  writeBatch,
  serverTimestamp,
  Timestamp,
  deleteDoc,
} from "firebase/firestore";
const owner = "AvqwmPY304eoBGWcOk536dCWgYq1";
let env;
before(async () => {
  env = await initializeTestEnvironment({
    projectId: "demo-personal",
    firestore: {
      host: "127.0.0.1",
      port: 8080,
      rules: await readFile("firestore.rules", "utf8"),
    },
  });
});
after(async () => {
  await env?.cleanup();
});
beforeEach(async () => {
  await env.clearFirestore();
});
const db = (uid) =>
  uid
    ? env
        .authenticatedContext(uid, {
          firebase: { sign_in_provider: "google.com" },
          email_verified: true,
          email: uid === owner ? "ashu.61003@gmail.com" : `${uid}@example.test`,
        })
        .firestore()
    : env.unauthenticatedContext().firestore();
async function seed(path, data) {
  await env.withSecurityRulesDisabled(async (context) => {
    await setDoc(doc(context.firestore(), path), data);
  });
}
function entry(published = true) {
  return {
    type: "beliefs",
    title: "Test belief",
    summary: "A summary",
    body: "A reasoned position.",
    published,
    featured: false,
    tags: [],
    relatedIds: [],
    links: [],
    format: "Note",
    attribution: "",
    reasoning: "",
    date: "",
    period: "",
    category: "",
    projectStatus: "Exploring",
    collaborators: "",
    image: "",
    revision: 1,
    updatedAt: serverTimestamp(),
    createdAt: serverTimestamp(),
  };
}
async function send(database, uid, sender, text = "hello", id = "m1") {
  const batch = writeBatch(database);
  const conversation = doc(database, "personalConversations", uid);
  const existing = await getDoc(conversation);
  const previous = existing.data();
  batch.set(doc(conversation, "messages", id), {
    text,
    senderId: sender,
    createdAt: serverTimestamp(),
    kind: "message",
  });
  batch.set(conversation, {
    ...(previous || {
      ownerId: uid,
      ownerName: "Reader",
      ownerPhoto: "",
      createdAt: serverTimestamp(),
      blocked: false,
      adminReadAt: null,
      userReadAt: null,
    }),
    lastMessage: text,
    lastMessageId: id,
    lastMessageAt: serverTimestamp(),
    lastSenderId: sender,
    archived: false,
    ...(sender === owner
      ? { adminReadAt: serverTimestamp() }
      : { userReadAt: serverTimestamp() }),
  });
  return batch.commit();
}
test("published content is public; drafts and unbounded enumeration are denied", async () => {
  await assertSucceeds(
    setDoc(doc(db(owner), "personalContent", "public"), entry()),
  );
  await assertSucceeds(
    setDoc(doc(db(owner), "personalContent", "draft"), entry(false)),
  );
  await assertSucceeds(getDoc(doc(db(), "personalContent", "public")));
  await assertFails(getDoc(doc(db(), "personalContent", "draft")));
  await assertSucceeds(
    getDocs(
      query(
        collection(db(), "personalContent"),
        where("published", "==", true),
        limit(20),
      ),
    ),
  );
  await assertFails(getDocs(collection(db(), "personalContent")));
});
test("only fixed owner can write content; forged admin profiles do not elevate privileges", async () => {
  await assertFails(
    setDoc(doc(db("reader"), "personalContent", "bad"), entry()),
  );
  await assertFails(
    setDoc(doc(db("reader"), "personalUsers", "reader"), {
      displayName: "Reader",
      photoURL: "",
      updatedAt: serverTimestamp(),
      admin: true,
    }),
  );
  await assertFails(
    setDoc(doc(db("reader"), "personalAdmins", "reader"), { admin: true }),
  );
  await assertFails(
    setDoc(doc(db(owner), "personalContent", "bad"), {
      ...entry(),
      body: "x".repeat(60001),
    }),
  );
});
test("content revision protects concurrent edits and owner can unpublish", async () => {
  const ref = doc(db(owner), "personalContent", "x");
  await assertSucceeds(setDoc(ref, entry()));
  await assertFails(
    updateDoc(ref, { body: "new", revision: 1, updatedAt: serverTimestamp() }),
  );
  await assertSucceeds(
    updateDoc(ref, {
      published: false,
      revision: 2,
      updatedAt: serverTimestamp(),
    }),
  );
  await assertFails(getDoc(doc(db(), "personalContent", "x")));
});
test("private conversation isolation, owner inbox, and replies", async () => {
  await assertSucceeds(send(db("alice"), "alice", "alice"));
  await assertFails(getDoc(doc(db("bob"), "personalConversations", "alice")));
  await assertFails(
    getDocs(
      query(
        collection(db("bob"), "personalConversations", "alice", "messages"),
        limit(20),
      ),
    ),
  );
  await assertFails(getDoc(doc(db(), "personalConversations", "alice")));
  await assertSucceeds(
    getDocs(query(collection(db(owner), "personalConversations"), limit(30))),
  );
  await assertFails(
    getDocs(query(collection(db("bob"), "personalConversations"), limit(30))),
  );
  await assertSucceeds(
    getDocs(
      query(
        collection(db("alice"), "personalConversations"),
        where("ownerId", "==", "alice"),
        limit(30),
      ),
    ),
  );
  await assertSucceeds(send(db(owner), "alice", owner, "reply", "m2"));
  await assertSucceeds(
    getDoc(
      doc(db("alice"), "personalConversations", "alice", "messages", "m2"),
    ),
  );
});
test("spam, forged senders, parent metadata forgery, and blocked senders are rejected", async () => {
  await send(db("alice"), "alice", "alice");
  await assertFails(send(db("alice"), "alice", "alice", "too soon", "m2"));
  await assertFails(
    setDoc(
      doc(db("alice"), "personalConversations", "alice", "messages", "forged"),
      {
        text: "fake",
        senderId: owner,
        createdAt: serverTimestamp(),
        kind: "message",
      },
    ),
  );
  await assertFails(
    updateDoc(doc(db("alice"), "personalConversations", "alice"), {
      blocked: false,
      adminReadAt: serverTimestamp(),
    }),
  );
  await assertSucceeds(
    updateDoc(doc(db(owner), "personalConversations", "alice"), {
      blocked: true,
    }),
  );
  await assertFails(send(db("alice"), "alice", "alice", "blocked", "m3"));
});
test("messages must atomically update their own conversation and cannot be edited", async () => {
  await assertFails(
    setDoc(
      doc(db("alice"), "personalConversations", "alice", "messages", "orphan"),
      {
        text: "orphan",
        senderId: "alice",
        createdAt: serverTimestamp(),
        kind: "message",
      },
    ),
  );
  await send(db("alice"), "alice", "alice");
  await assertFails(
    updateDoc(
      doc(db("alice"), "personalConversations", "alice", "messages", "m1"),
      { text: "edited" },
    ),
  );
});
test("users cannot read other profiles or grant themselves owner access", async () => {
  await assertSucceeds(
    setDoc(doc(db("alice"), "personalUsers", "alice"), {
      displayName: "Alice",
      photoURL: "",
      updatedAt: serverTimestamp(),
    }),
  );
  await assertFails(getDoc(doc(db("bob"), "personalUsers", "alice")));
  await assertFails(
    setDoc(doc(db("alice"), "personalUsers", owner), {
      displayName: "A",
      photoURL: "",
      updatedAt: serverTimestamp(),
    }),
  );
});
async function createSpace() {
  await seed("personalSpaces/s", {
    title: "Discussion",
    description: "Discuss",
    status: "Open",
    published: true,
    cover: "",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
}
async function join(database, uid) {
  return setDoc(doc(database, "personalSpaces", "s", "members", uid), {
    uid,
    displayName: uid,
    photoURL: "",
    joinedAt: serverTimestamp(),
    lastSentAt: null,
    lastMessageId: "",
  });
}
async function post(database, uid, id = "p1") {
  const batch = writeBatch(database);
  batch.update(doc(database, "personalSpaces", "s", "members", uid), {
    lastSentAt: serverTimestamp(),
    lastMessageId: id,
  });
  batch.set(doc(database, "personalSpaces", "s", "messages", id), {
    text: "Hello space",
    senderId: uid,
    displayName: uid,
    createdAt: serverTimestamp(),
  });
  return batch.commit();
}
test("discussion content requires membership; joins expose no private account info", async () => {
  await createSpace();
  await assertSucceeds(getDoc(doc(db(), "personalSpaces", "s")));
  await assertFails(
    getDocs(
      query(collection(db(), "personalSpaces", "s", "messages"), limit(20)),
    ),
  );
  await assertSucceeds(join(db("alice"), "alice"));
  await assertSucceeds(post(db("alice"), "alice"));
  await assertFails(post(db("bob"), "alice", "p2"));
  await assertFails(
    getDocs(
      query(
        collection(db("bob"), "personalSpaces", "s", "messages"),
        limit(20),
      ),
    ),
  );
  await assertSucceeds(
    getDocs(
      query(
        collection(db("alice"), "personalSpaces", "s", "messages"),
        limit(20),
      ),
    ),
  );
  await assertFails(post(db("alice"), "alice", "p2"));
});
test("closed spaces, member bans, moderation, and membership impersonation", async () => {
  await createSpace();
  await join(db("alice"), "alice");
  await assertFails(join(db("bob"), "alice"));
  await assertSucceeds(
    updateDoc(doc(db(owner), "personalSpaces", "s"), {
      status: "Closed",
      updatedAt: serverTimestamp(),
    }),
  );
  await assertFails(post(db("alice"), "alice"));
  await assertFails(join(db("bob"), "bob"));
  await assertSucceeds(
    updateDoc(doc(db(owner), "personalSpaces", "s"), {
      status: "Open",
      updatedAt: serverTimestamp(),
    }),
  );
  await post(db("alice"), "alice");
  await assertSucceeds(
    deleteDoc(doc(db(owner), "personalSpaces", "s", "messages", "p1")),
  );
  await assertSucceeds(
    setDoc(doc(db(owner), "personalSpaces", "s", "bans", "alice"), {
      createdAt: serverTimestamp(),
    }),
  );
  await assertFails(post(db("alice"), "alice", "p2"));
  await assertSucceeds(
    deleteDoc(doc(db(owner), "personalSpaces", "s", "members", "alice")),
  );
  await assertFails(join(db("alice"), "alice"));
});
test("Dreams remains public read-only and its editor constraints remain intact", async () => {
  await seed("dreams/workspace", {
    stateJson: '{"goals":[],"steps":[]}',
    revision: 1,
  });
  await assertSucceeds(getDoc(doc(db(), "dreams", "workspace")));
  await assertFails(
    updateDoc(doc(db("alice"), "dreams", "workspace"), {
      stateJson: "{}",
      revision: 2,
    }),
  );
  await assertFails(deleteDoc(doc(db(owner), "dreams", "workspace")));
});

test("unverified or password-only visitors cannot submit contributions", async () => {
  const unverified = env
    .authenticatedContext("unverified", {
      firebase: { sign_in_provider: "google.com" },
      email_verified: false,
    })
    .firestore();
  await assertFails(send(unverified, "unverified", "unverified"));
  const password = env
    .authenticatedContext("password", {
      firebase: { sign_in_provider: "password" },
      email_verified: true,
    })
    .firestore();
  await assertFails(send(password, "password", "password"));
});

test("page edits require the verified administrator email, not a familiar UID", async () => {
  const page = { title: "Work", body: "Published page", revision: 1, updatedAt: serverTimestamp() };
  await assertFails(setDoc(doc(db(), "sitePages", "work"), page));
  await assertFails(setDoc(doc(db("alice"), "sitePages", "work"), page));
  const forged = env.authenticatedContext(owner, { email: "someone@example.test", email_verified: true }).firestore();
  await assertFails(setDoc(doc(forged, "sitePages", "work"), page));
  const unverified = env.authenticatedContext("unverified-admin", { email: "ashu.61003@gmail.com", email_verified: false }).firestore();
  await assertFails(setDoc(doc(unverified, "sitePages", "work"), page));
  const admin = env.authenticatedContext("google-owner", { email: "ashu.61003@gmail.com", email_verified: true }).firestore();
  await assertSucceeds(setDoc(doc(admin, "sitePages", "work"), page));
  await assertSucceeds(getDoc(doc(db(), "sitePages", "work")));
  await assertFails(updateDoc(doc(admin, "sitePages", "work"), { body: "Lost update", revision: 1, updatedAt: serverTimestamp() }));
  await assertSucceeds(updateDoc(doc(admin, "sitePages", "work"), { body: "Updated", revision: 2, updatedAt: serverTimestamp() }));
  await assertFails(setDoc(doc(admin, "sitePages", "login"), page));
});
