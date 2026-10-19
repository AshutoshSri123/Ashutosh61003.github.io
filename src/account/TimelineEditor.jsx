import React, { useEffect, useRef, useState } from "react";
import { doc, onSnapshot, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "../personal/firebase";
import { lifeEvents, timelineTitle } from "../pages/timeline-data";
import { Alert, useAccount } from "./Features";

export default function TimelineEditor({ onContent }) {
  const { admin } = useAccount();
  const [saved, setSaved] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const [editing, setEditing] = useState(new URLSearchParams(location.search).has("edit"));
  const [title, setTitle] = useState(timelineTitle);
  const [events, setEvents] = useState(lifeEvents);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const initialized = useRef(false);
  const revision = useRef(0);
  useEffect(() => onSnapshot(doc(db, "sitePages", "timeline"), snapshot => {
    const data = snapshot.exists() ? snapshot.data() : null;
    try {
      const parsed = data ? JSON.parse(data.body) : lifeEvents;
      if (!Array.isArray(parsed) || !parsed.length || parsed.length > 60 || parsed.some(event => !event || typeof event.year !== "string" || typeof event.title !== "string" || typeof event.detail !== "string")) throw new Error();
      const content = { title: data?.title || timelineTitle, events: parsed, revision: data?.revision || 0 };
      setSaved(content); onContent(content);
    } catch { setError("Couldn’t read the saved timeline. The original story is still available."); }
    setLoaded(true);
  }, () => { setLoaded(true); setError("Couldn’t connect. Please reload before editing."); }), [onContent]);
  useEffect(() => {
    if (saved && !initialized.current) {
      initialized.current = true;
      setTitle(saved.title); setEvents(saved.events); revision.current = saved.revision; setReady(true);
    }
  }, [saved]);
  function toggle() {
    if (!editing && saved) { setTitle(saved.title); setEvents(saved.events); revision.current = saved.revision; }
    setEditing(!editing); setError(""); setStatus("");
  }
  function change(index, field, value) {
    setEvents(current => current.map((event, i) => i === index ? { ...event, [field]: value } : event));
  }
  async function publish(event) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const body = JSON.stringify(events);
      if (body.length > 30000) throw new Error("The timeline is too long. Shorten a few entries before publishing.");
      await runTransaction(db, async transaction => {
        const ref = doc(db, "sitePages", "timeline");
        const current = await transaction.get(ref);
        if ((current.data()?.revision || 0) !== revision.current) throw new Error("This timeline changed elsewhere. Cancel and reopen the editor to load the latest version.");
        transaction.set(ref, { title: title.trim(), body, revision: revision.current + 1, updatedAt: serverTimestamp() });
      });
      setEditing(false); setStatus("Timeline published.");
    } catch (error) { setError(error.code ? "Couldn’t publish. Your draft is still here; please retry." : error.message); }
    finally { setBusy(false); }
  }
  if (!admin) return null;
  if (editing && !ready) return <section className="account-page account-home-editor"><p role="status">Loading timeline editor…</p><Alert>{error}</Alert></section>;
  return <section className={`account-page account-home-editor timeline-editor ${editing ? "is-editing" : ""}`}>
    <div className="account-editor-bar"><span className="account-muted">Timeline · Admin</span><button className="account-text-button" onClick={toggle}>{editing ? "Cancel editing" : "Edit timeline"}</button></div>
    {editing && <form className="account-editor" onSubmit={publish}>
      <label>Timeline heading<input required maxLength={180} value={title} onChange={event => setTitle(event.target.value)} /></label>
      {events.map((event, index) => <fieldset key={index}><legend>Chapter {index + 1}</legend><label>Year or period<input required maxLength={40} value={event.year} onChange={e => change(index, "year", e.target.value)} /></label><label>Milestone<input required maxLength={180} value={event.title} onChange={e => change(index, "title", e.target.value)} /></label><label>Details<textarea required rows={2} maxLength={600} value={event.detail} onChange={e => change(index, "detail", e.target.value)} /></label><button type="button" className="account-text-button" disabled={events.length === 1} onClick={() => setEvents(current => current.filter((_, i) => i !== index))}>Remove chapter</button></fieldset>)}
      <button type="button" className="account-text-button" disabled={events.length >= 60} onClick={() => setEvents(current => [...current, { year: "", title: "", detail: "" }])}>Add chapter</button>
      <button className="account-button" disabled={busy || !loaded || !saved || !title.trim()}>{busy ? "Publishing…" : "Publish timeline"}</button>
    </form>}
    <Alert>{error}</Alert><p role="status">{status}</p>
  </section>;
}
