import React, { useEffect, useRef, useState } from "react";
import { lifeEvents, timelineTitle } from "./timeline-data";
import "./Timeline.css";

export default function Timeline({ content }) {
  const events = content?.events || lifeEvents;
  const title = content?.title || timelineTitle;
  const scrollRef = useRef(null);
  const rows = useRef([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const scroller = scrollRef.current;
    let frame;
    const measure = () => {
      frame = null;
      const bounds = scroller.getBoundingClientRect();
      const center = bounds.top + bounds.height / 2;
      let closest = 0, distance = Infinity;
      rows.current.slice(0, events.length).forEach((row, index) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const delta = Math.abs(rect.top + rect.height / 2 - center);
        const strength = Math.max(0, 1 - delta / (bounds.height * .65));
        row.style.setProperty("--focus", strength.toFixed(3));
        if (delta < distance) { closest = index; distance = delta; }
      });
      setActive(closest);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const resize = new ResizeObserver(schedule);
    resize.observe(scroller);
    scroller.addEventListener("scroll", schedule, { passive: true });
    measure();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); scroller.removeEventListener("scroll", schedule); };
  }, [events]);
  return <section className="life-timeline" aria-labelledby="life-title">
    <header className="life-heading"><p>2003 — 2026</p><h1 id="life-title">{title}</h1><span>Small chapters. A continuing story.</span></header>
    <div className="life-window">
      <div className="life-scroll" ref={scrollRef} tabIndex={0} role="region" aria-label="Life timeline, scroll to explore">
        <ol className="life-track">
          {events.map((event, index) => <li key={index} ref={row => { rows.current[index] = row; }} className="life-event" aria-current={active === index ? "step" : undefined}>
            <div className="life-year"><time dateTime={event.date || undefined}>{event.year}</time><span aria-hidden="true" /></div>
            <div className="life-copy"><h2>{event.title}</h2><p>{event.detail}</p></div>
          </li>)}
        </ol>
      </div>
    </div>
    <p className="life-footnote">Scroll through the years <span aria-hidden="true">↓</span><span className="life-date-note">Early school dates are approximate.</span></p>
  </section>;
}
