import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  connectAuthEmulator,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import config from "../dreams/firebase-config.json";
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || config.projectId;
const app = initializeApp(
  {
    projectId,
    apiKey: (import.meta.env.DEV ? import.meta.env.VITE_FIREBASE_API_KEY : globalThis.__SITE_FIREBASE_CONFIG__?.apiKey) || "",
    authDomain: config.authDomain || `${projectId}.firebaseapp.com`,
    appId: "1:632551270983:web:e12f6a2a483f8b99d0df62",
  },
  "personal",
);
export const auth = getAuth(app);
export const db = getFirestore(app);
if (
  import.meta.env.DEV &&
  import.meta.env.VITE_PERSONAL_EMULATOR === "true" &&
  ["localhost", "127.0.0.1"].includes(location.hostname)
) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}
export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(auth, provider);
};
export const ownerSignIn = (password) =>
  signInWithEmailAndPassword(auth, config.editorEmail, password);
export const logout = () => signOut(auth);
