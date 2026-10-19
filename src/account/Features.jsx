import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, googleSignIn, logout } from "../personal/firebase";
import { doc, onSnapshot, runTransaction, serverTimestamp } from "firebase/firestore";
import ReactMarkdown from "react-markdown";
import { isSiteAdmin } from "./identity";
import DirectMessages from "./Messages";
import TimelineEditor from "./TimelineEditor";
import "./account.css";

const Account = createContext(null);
export const useAccount = () => useContext(Account);
export function Alert({ children }) {
  return children ? <p className="account-error" role="alert">{children}</p> : null;
}
export function SignInButton() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function signIn() {
    setBusy(true); setError("");
    try { await googleSignIn(); }
    catch (error) {
      if (error.code !== "auth/popup-closed-by-user") setError(error.code === "auth/popup-blocked" ? "Allow the sign-in popup and try again." : "Google sign-in couldn’t finish. Please try again.");
    } finally { setBusy(false); }
  }
  return <><button className="account-button" onClick={signIn} disabled={busy}><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.4c-.2 1.2-.9 2.2-1.9 2.9v2.5h3.2c1.9-1.7 2.9-4.2 2.9-7.3ZM12 22c2.7 0 5-.9 6.7-2.5l-3.2-2.5c-.9.6-2.1 1-3.5 1-2.6 0-4.9-1.8-5.7-4.2H3v2.6C4.7 19.8 8.1 22 12 22ZM6.3 13.8A6 6 0 0 1 6 12c0-.6.1-1.2.3-1.8V7.6H3A10 10 0 0 0 2 12c0 1.6.4 3.1 1 4.4l3.3-2.6ZM12 6c1.5 0 2.8.5 3.8 1.5l2.8-2.8A9.6 9.6 0 0 0 12 2C8.1 2 4.7 4.2 3 7.6l3.3 2.6C7.1 7.8 9.4 6 12 6Z"/></svg>{busy ? "Signing in…" : "Continue with Google"}</button><Alert>{error}</Alert></>;
}
function Privacy() {
  return <section className="account-prose"><p className="account-eyebrow">Privacy</p><h1>Your account and messages.</h1><p>Google sign-in provides this website with your email address, display name, and profile photo. Your verified email determines whether you have administrator or view access.</p><p>Private messages are stored in Google Firebase and can be read by the sender and Ashutosh Srivastava. The administrator can publish personal page content for everyone to read.</p><p>Your sign-in session is kept in your browser until you log out. Google and Firebase process authentication and stored data under their own privacy policies.</p><p>For questions or a request to delete your account data or messages, email <a href="mailto:ashu.61003@gmail.com">ashu.61003@gmail.com</a>.</p><Link to="/login">Back to Login</Link></section>;
}
function Login() {
  const { user, loading, admin } = useAccount();
  const [error, setError] = useState("");
  if (loading) return <p role="status">Checking your session…</p>;
  return <section className="account-login"><div><p className="account-eyebrow">Your account</p><h1>{user ? "You’re signed in." : "Welcome."}</h1>{user ? <><p className="account-email">{user.email}</p><p className="account-muted">{admin ? "Administrator · You can edit the personal pages." : "View access · You can read pages and message Ashutosh privately."}</p>{admin && <nav className="account-edit-links" aria-label="Edit pages">{["Home", "Work", "Projects", "Identity", "Thoughts", "Blogs", "Timeline", "Dreams"].map(name => <Link key={name} to={name === "Home" ? "/?edit=1" : `/${name.toLowerCase()}?edit=1`}>Edit {name}</Link>)}</nav>}</> : <><p className="account-muted">Sign in to send a private message.</p><SignInButton /><p className="account-muted"><Link to="/privacy">Privacy</Link></p></>}</div>{user && <button className="account-button account-logout" onClick={async () => { try { await logout(); } catch { setError("Couldn’t log out. Please try again."); } }}>Log out</button>}<Alert>{error}</Alert></section>;
}
const labels = { home: "Home", work: "Work", projects: "Projects", identity: "Identity", thoughts: "Thoughts", blogs: "Blogs", photography: "Photography", dreams: "Dreams" };
function EditablePage({ id, onHomeContent }) {
  const { admin } = useAccount();
  const initialized = useRef(false);
  const editingRevision = useRef(0);
  const [saved, setSaved] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [editing, setEditing] = useState(new URLSearchParams(location.search).has("edit"));
  const [draft, setDraft] = useState({ title: labels[id], body: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => onSnapshot(doc(db, "sitePages", id), snapshot => {
    const value = snapshot.exists() ? snapshot.data() : null;
    setSaved(value); setLoaded(true);
    if (id === "home") onHomeContent(value?.body || null);
  }, () => { setLoaded(true); setError("Couldn’t load this page. Please try again."); }), [id, onHomeContent]);
  useEffect(() => { if (!editing) setDraft({ title: saved?.title || labels[id], body: saved?.body || "" }); }, [saved, editing, id]);
  useEffect(() => {
    if (loaded && !initialized.current) {
      initialized.current = true;
      if (editing) {
        editingRevision.current = saved?.revision || 0;
        setDraft({ title: saved?.title || labels[id], body: saved?.body || "" });
      }
    }
  }, [loaded, editing, saved, id]);
  async function save(event) {
    event.preventDefault(); setBusy(true); setError(""); setStatus("");
    try {
      await runTransaction(db, async transaction => {
        const ref = doc(db, "sitePages", id);
        const current = await transaction.get(ref);
        if ((current.data()?.revision || 0) !== editingRevision.current) throw new Error("This page changed elsewhere. Cancel and reopen the editor to load the latest version.");
        transaction.set(ref, { title: draft.title.trim(), body: draft.body.trim(), revision: editingRevision.current + 1, updatedAt: serverTimestamp() });
      });
      setEditing(false); setStatus("Page published.");
    } catch (error) { setError(error.code ? "Couldn’t publish. Your draft is still here; please try again." : error.message); }
    finally { setBusy(false); }
  }
  if (editing && admin && !loaded) return <section className="account-page"><p role="status">Loading editor…</p></section>;
  if (id === "home" && !admin) return null;
  if (!admin && !saved?.body) return null;
  return <section className={`account-page ${id === "home" ? "account-home-editor" : ""}`}>
    {admin && <div className="account-editor-bar"><span className="account-muted">{labels[id]} · Admin</span><button className="account-text-button" onClick={() => { editingRevision.current = saved?.revision || 0; setDraft({ title: saved?.title || labels[id], body: saved?.body || "" }); setEditing(!editing); setError(""); }}>{editing ? "Cancel editing" : "Edit page"}</button></div>}
    {editing && admin ? <form className="account-editor" onSubmit={save}><label>Page title<input required maxLength={180} value={draft.title} onChange={e => setDraft({ ...draft, title: e.target.value })} /></label><label>{id === "home" ? "Homepage introduction (Markdown — links are bold and underlined)" : "Page content (Markdown)"}<textarea rows={8} maxLength={30000} value={draft.body} onChange={e => setDraft({ ...draft, body: e.target.value })} /></label><button className="account-button" disabled={busy || !loaded || !draft.title.trim()}>{busy ? "Publishing…" : "Publish page"}</button></form> : id !== "home" && saved?.body ? <><h1>{saved.title}</h1><div className="account-prose"><ReactMarkdown>{saved.body}</ReactMarkdown></div></> : null}
    {admin && <><Alert>{error}</Alert><p role="status">{status}</p></>}
  </section>;
}
export default function Features({ pathname, onHomeContent, onTimelineContent }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => onAuthStateChanged(auth, user => { setUser(user); setLoading(false); }, () => setLoading(false)), []);
  const id = pathname === "/" ? "home" : pathname.slice(1);
  return <Account.Provider value={{ user, loading, admin: isSiteAdmin(user) }}><Link className="account-shortcut" to="/login" aria-label="Your account">{user ? "Account" : "Login"}</Link>{id === "timeline" ? <TimelineEditor onContent={onTimelineContent} /> : id === "privacy" ? <div className="account-panel"><Privacy /></div> : id === "login" ? <div className="account-panel"><Login /></div> : id === "contact" ? <div className="account-panel account-contact"><DirectMessages /></div> : labels[id] ? <EditablePage key={id} id={id} onHomeContent={onHomeContent} /> : null}</Account.Provider>;
}
