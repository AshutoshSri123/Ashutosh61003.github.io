import React, { useEffect, useRef, useState } from "react";
import { collection, doc, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../personal/firebase";
import { sendMessage } from "../personal/data";
import { usePaged } from "../personal/hooks";
import { Alert, SignInButton, useAccount } from "./Features";

export default function DirectMessages() {
  const { user, loading, admin } = useAccount();
  const [selected, setSelected] = useState("");
  const [inbox, setInbox] = useState([]);
  const [conversation, setConversation] = useState(null);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const id = admin ? selected : user?.uid;
  const history = useRef(null);
  const pager = usePaged(user && id ? query(collection(db, "personalConversations", id, "messages"), orderBy("createdAt", "desc")) : null, `contact-${user?.uid}-${id}`, 30);
  useEffect(() => {
    if (!admin) return;
    return onSnapshot(query(collection(db, "personalConversations"), orderBy("lastMessageAt", "desc"), limit(100)), snapshot => setInbox(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))), () => setError("Couldn’t load your inbox. Please try again."));
  }, [admin]);
  useEffect(() => {
    setText(""); setError(""); setConversation(null);
    if (!user || !id) return;
    return onSnapshot(doc(db, "personalConversations", id), snapshot => {
      const value = snapshot.exists() ? snapshot.data() : null;
      setConversation(value);
      const field = admin ? "adminReadAt" : "userReadAt";
      if (value?.lastMessageAt?.toMillis() > (value[field]?.toMillis() || 0)) updateDoc(doc(db, "personalConversations", id), { [field]: serverTimestamp() }).catch(() => {});
    }, () => setError("Couldn’t load this conversation. Please try again."));
  }, [user, id, admin]);
  const newest = pager.items[0]?.id;
  useEffect(() => { if (pager.page === 1 && history.current) history.current.scrollTop = history.current.scrollHeight; }, [newest, pager.page]);
  async function send(event) {
    event.preventDefault();
    if (busy) return;
    setBusy(true); setError("");
    try { await sendMessage(user, text, id); setText(""); pager.reset(); }
    catch (error) { setError(error.code ? "Couldn’t send. Your message is still here; please try again." : error.message); }
    finally { setBusy(false); }
  }
  if (loading) return <p role="status">Checking your session…</p>;
  if (!user) return <section className="account-login"><div><p className="account-eyebrow">Contact</p><h1>A conversation, just us.</h1><p className="account-muted">Sign in with Google to message me privately.</p><SignInButton /></div></section>;
  return <section className="dm-page"><header><p className="account-eyebrow">Private messages</p><h1>{admin ? "Your inbox." : "Say hello."}</h1><p className="account-muted">{admin ? "Choose a conversation to reply." : "Only you and Ashutosh can read this conversation."}</p></header><div className={`dm-layout ${admin ? "dm-admin" : ""}`}>
    {admin && <aside className="dm-inbox" aria-label="Conversations">{!inbox.length && <p className="account-muted">No messages yet.</p>}{inbox.map(item => <button key={item.id} className={selected === item.id ? "is-selected" : ""} onClick={() => setSelected(item.id)}><strong>{item.ownerName}</strong><span>{item.lastMessage}</span>{item.lastSenderId !== user.uid && item.lastMessageAt?.toMillis() > (item.adminReadAt?.toMillis() || 0) && <small>Unread</small>}</button>)}</aside>}
    {id ? <div className="dm-thread"><h2>{admin ? conversation?.ownerName || "Conversation" : "Ashutosh"}</h2><div className="dm-history" ref={history} aria-label="Message history" role="log" aria-live="polite"><div className="dm-pagination">{pager.hasNext && <button className="account-text-button" onClick={pager.next}>Earlier messages</button>}{pager.page > 1 && <button className="account-text-button" onClick={pager.previous}>Newer messages</button>}</div>{pager.loading ? <p role="status">Loading messages…</p> : !pager.items.length ? <p className="dm-empty">A hello, a question, an idea. Start anywhere.</p> : pager.items.slice().reverse().map(message => <article key={message.id} className={message.senderId === user.uid ? "dm-own" : "dm-other"}><span>{message.senderId === user.uid ? "You" : admin ? conversation?.ownerName : "Ashutosh"}</span><p>{message.text}</p><time dateTime={message.createdAt?.toDate?.().toISOString()}>{message.createdAt?.toDate?.().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) || "Sending…"}</time></article>)}</div><Alert>{pager.error}</Alert>{conversation?.blocked && !admin ? <p className="account-muted">This conversation is closed.</p> : <form className="dm-composer" onSubmit={send}><label className="dm-input-label" htmlFor="dm-message">Your message</label><textarea id="dm-message" rows={2} maxLength={4000} placeholder="Write a message…" required value={text} onChange={event => setText(event.target.value)} /><button className="account-button" disabled={busy || !text.trim()}>{busy ? "Sending…" : "Send"}</button></form>}</div> : <div className="dm-empty">Your conversations will appear here.</div>}
  </div><Alert>{error}</Alert></section>;
}
