import React, { createContext, useContext, useEffect, useState } from "react";
import { query, startAfter, limit } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./firebase";
import {
  onSnapshot,
  row,
  settingsRef,
  doc,
  setDoc,
  serverTimestamp,
} from "./data";
import { isSiteAdmin } from "../account/identity";
import { defaultSettings, errorMessage } from "./model";
const Context = createContext(null);
export function PersonalProvider({ children }) {
  const [user, setUser] = useState(null),
    [authLoading, setAuthLoading] = useState(true);
  const [settings, setSettings] = useState(defaultSettings),
    [settingsError, setSettingsError] = useState("");
  useEffect(
    () =>
      onAuthStateChanged(auth, (value) => {
        setUser(value);
        setAuthLoading(false);
        if (value)
          setDoc(doc(db, "personalUsers", value.uid), {
            displayName: (value.displayName || "Reader").slice(0, 100),
            photoURL: value.photoURL || "",
            updatedAt: serverTimestamp(),
          }).catch(() => {
            /* Profile failures do not prevent reading or signing in. */
          });
      }),
    [],
  );
  useEffect(
    () =>
      onSnapshot(
        settingsRef,
        (snapshot) => {
          setSettings({ ...defaultSettings, ...snapshot.data() });
          setSettingsError("");
        },
        (error) => setSettingsError(errorMessage(error)),
      ),
    [],
  );
  return (
    <Context.Provider
      value={{
        user,
        authLoading,
        isAdmin: isSiteAdmin(user),
        settings,
        settingsError,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function usePersonal() {
  return useContext(Context);
}
export function useLive(source, key) {
  const [state, setState] = useState({
    items: [],
    loading: true,
    error: "",
    key,
  });
  useEffect(() => {
    setState({ items: [], loading: !!source, error: "", key });
    if (!source) return;
    return onSnapshot(
      source,
      (snapshot) =>
        setState({
          documents: snapshot.docs,
          items: snapshot.docs
            ? snapshot.docs.map(row)
            : snapshot.exists()
              ? [row(snapshot)]
              : [],
          loading: false,
          error: "",
          key,
        }),
      (error) =>
        setState({
          items: [],
          loading: false,
          error: errorMessage(error),
          key,
        }),
    );
    // Callers provide a stable query key; Firestore Query object identity changes on render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return state.key === key
    ? state
    : { items: [], loading: !!source, error: "" };
}

// Keep each listener bounded while allowing arbitrarily long feeds and histories.
export function usePaged(source, key, size = 20) {
  const [position, setPosition] = useState({ key, cursors: [] });
  const cursors = position.key === key ? position.cursors : [];
  const cursor = cursors.at(-1);
  const state = useLive(
    source
      ? query(source, ...(cursor ? [startAfter(cursor)] : []), limit(size + 1))
      : null,
    `${key}:page:${cursors.map((d) => d.id).join(":")}`,
  );
  return {
    ...state,
    items: state.items.slice(0, size),
    page: cursors.length + 1,
    hasNext: state.items.length > size,
    next: () => {
      if (state.items.length > size)
        setPosition({ key, cursors: [...cursors, state.documents[size - 1]] });
    },
    previous: () => setPosition({ key, cursors: cursors.slice(0, -1) }),
    reset: () => setPosition({ key, cursors: [] }),
  };
}
