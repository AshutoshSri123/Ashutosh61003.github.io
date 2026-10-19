import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, Home, Briefcase, Layers, Mail, Plus, User, BookOpen, History, Lightbulb, LogIn } from "lucide-react";
import "./Landing.css";
import Timeline from "./Timeline";
import ReactMarkdown from "react-markdown";

// Unsupported or disabled vibration must never interrupt navigation.
function haptic(pattern = 8) {
  try {
    navigator.vibrate?.(pattern);
  } catch {
    /* Device feedback is optional. */
  }
}

const AccountFeatures = React.lazy(async () => {
  try {
    if (!import.meta.env.DEV) {
      const response = await fetch("/firebase-public-config.json");
      if (!response.ok) throw new Error("Account configuration unavailable");
      globalThis.__SITE_FIREBASE_CONFIG__ = await response.json();
    }
    return await import("../account/Features");
  } catch {
    return { default: function AccountUnavailable({ pathname }) {
      return ["/login", "/contact"].includes(pathname) ? <section style={{ maxWidth: 400 }}><h1>Connection unavailable</h1><p>Please reload to try again.</p><button onClick={() => location.reload()}>Retry</button></section> : null;
    } };
  }
});

const pages = [
  { label: "Home", to: "/", icon: Home },
  { label: "Portfolio", to: "/portfolio", icon: User },
  { label: "Work", to: "/work", icon: Briefcase },
  { label: "Projects", to: "/projects", icon: Layers },
  { label: "Identity", to: "/identity", icon: User },
  { label: "Thoughts", to: "/thoughts", icon: Lightbulb },
  { label: "Blogs", to: "/blogs", icon: BookOpen },
  { label: "Timeline", to: "/timeline", icon: History },
  { label: "Contact", to: "/contact", icon: Mail },
];
pages.push({ label: "Dreams", to: "/dreams", icon: Lightbulb }, { label: "Login", to: "/login", icon: LogIn });
const primaryPages = [pages[0], pages[1], pages[5], pages[8]];

function LocalDateTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const day = now.getDate();
  const suffix = day % 100 >= 11 && day % 100 <= 13 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" }[day % 10] || "th");
  return (
    <div className="landing-datetime" aria-live="off">
      <time className="landing-clock" dateTime={now.toISOString()} aria-label="Your local time">{now.toLocaleTimeString("en-GB", { hour12: false })}</time>
      <time className="landing-date" dateTime={`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`}>
        {day}{suffix} {now.toLocaleDateString("en-GB", { month: "long" })} {now.getFullYear()}
      </time>
    </div>
  );
}

export default function Landing() {
  const { pathname: rawPathname } = useLocation();
  const pathname = rawPathname.replace(/\/+$/, "") || "/";
  const navigate = useNavigate();
  const isHome = pathname === "/";
  const [homeCopy, setHomeCopy] = useState(null);
  const [timelineContent, setTimelineContent] = useState(null);
  const [pressed, setPressed] = useState(false);
  const dockHoldTimer = useRef(null);
  const endDockHold = () => {
    window.clearTimeout(dockHoldTimer.current);
    dockHoldTimer.current = null;
    setPressed(false);
  };
  const beginDockHold = () => {
    endDockHold();
    dockHoldTimer.current = window.setTimeout(() => {
      setPressed(true);
      haptic([14, 24, 20]);
    }, 1000);
  };
  useEffect(() => {
    const reset = () => {
      window.clearTimeout(dockHoldTimer.current);
      setPressed(false);
    };
    window.addEventListener("pointerup", reset);
    window.addEventListener("pointercancel", reset);
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", reset);
    return () => {
      window.clearTimeout(dockHoldTimer.current);
      window.removeEventListener("pointerup", reset);
      window.removeEventListener("pointercancel", reset);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, []);
  const [selection, setSelection] = useState(-1);
  const gesture = useRef(null);
  const [steering, setSteering] = useState(false);
  const suppressClick = useRef(false);
  useEffect(() => {
    const cancel = () => {
      window.clearTimeout(gesture.current?.timer);
      gesture.current = null;
      suppressClick.current = true;
      setSteering(false);
      setSelection(-1);
    };
    window.addEventListener("blur", cancel);
    document.addEventListener("visibilitychange", cancel);
    return () => {
      cancel();
      window.removeEventListener("blur", cancel);
      document.removeEventListener("visibilitychange", cancel);
    };
  }, []);
  const beginGesture = (event) => {
    if (event.button !== 0 || !event.isPrimary || gesture.current) return;
    suppressClick.current = false;
    endDockHold();
    event.currentTarget.setPointerCapture(event.pointerId);
    const state = { x: event.clientX, y: event.clientY, held: false, moved: false, opened: !expanded, index: Math.max(0, pages.findIndex((page) => page.to === pathname)) };
    state.timer = window.setTimeout(() => {
      state.held = true;
      setExpanded(true);
      setSteering(true);
      haptic([14, 24, 20]);
      setSelection(state.index);
    }, 1000);
    gesture.current = state;
    haptic(state.opened ? [8, 20, 12] : 8);
    if (state.opened) setExpanded(true);
  };
  const moveGesture = (event) => {
    const state = gesture.current;
    if (!state) return;
    if (!state.held) {
      state.x = event.clientX;
      state.y = event.clientY;
      return;
    }
    // Consume small relative steps so reversing at an edge responds immediately.
    const step = 16;
    const dx = Math.trunc((event.clientX - state.x) / step);
    const dy = Math.trunc((event.clientY - state.y) / step);
    if (!dx && !dy) return;
    if (dx) state.x = event.clientX;
    if (dy) state.y = event.clientY;
    const row = Math.floor(state.index / 4);
    const column = state.index % 4;
    const nextRow = Math.max(0, Math.min(Math.ceil(pages.length / 4) - 1, row + dy));
    const lastColumn = Math.min(3, pages.length - nextRow * 4 - 1);
    const nextColumn = Math.max(0, Math.min(lastColumn, column + dx));
    const nextIndex = nextRow * 4 + nextColumn;
    if (nextIndex !== state.index) haptic(10);
    state.moved ||= nextIndex !== state.index;
    state.index = nextIndex;
    setSelection(state.index);
  };
  const endGesture = (event) => {
    const state = gesture.current;
    if (!state) return;
    window.clearTimeout(state.timer);
    const cancelled = event.type !== "pointerup";
    suppressClick.current = true;
    if (!state.held && !cancelled) {
      if (!state.opened) setExpanded(false);
      else menuRef.current?.querySelector("a")?.focus({ preventScroll: true });
    }
    if (state.held) {
      if (!cancelled) haptic(12);
      if (cancelled) setExpanded(false);
      if (!cancelled && state.moved && state.index >= 0) {
        navigate(pages[state.index].to);
        setExpanded(false);
      }
    }
    gesture.current = null;
    setSteering(false);
    setSelection(-1);
  };
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!expanded) return;
    const close = (event) => {
      if (event.key === "Escape") {
        window.clearTimeout(gesture.current?.timer);
        gesture.current = null;
        setSteering(false);
        setSelection(-1);
        suppressClick.current = true;
        haptic(8);
        setExpanded(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    if (!gesture.current) menuRef.current?.querySelector("a")?.focus({ preventScroll: true });
    return () => document.removeEventListener("keydown", close);
  }, [expanded]);
  useEffect(() => {
    setExpanded(false);
    endDockHold();
    setSelection(-1);
  }, [pathname]);
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("personal-theme") === "dark";
    } catch {
      return false;
    }
  });
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("personal-dark", dark);
    try {
      localStorage.setItem("personal-theme", dark ? "dark" : "light");
    } catch {
      /* Optional preference storage. */
    }
    return () => document.documentElement.classList.remove("personal-dark");
  }, [dark]);
  return (
    <main className="landing-page" aria-label="Ashutosh Srivastava">
      <LocalDateTime />
      <button
        className="landing-theme"
        type="button"
        onClick={() => setDark((value) => !value)}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={dark}
      >
        <span className="theme-symbols" aria-hidden="true">
          <Sun className="theme-sun" size={17} strokeWidth={1.5} />
          <Moon className="theme-moon" size={17} strokeWidth={1.5} />
        </span>
      </button>
      {isHome && <div className="landing-content">
        <header className="landing-profile">
        <div
          className="landing-portrait"
          role="img"
          aria-label="Portrait of Ashutosh Srivastava"
        >
          <img
            className="landing-portrait-light"
            src="/images/ashutosh-diptych-light.webp"
            width="180"
            height="180"
            alt=""
            fetchPriority="high"
          />
          <img
            className="landing-portrait-dark"
            src="/images/ashutosh-diptych-dark.webp"
            width="180"
            height="180"
            alt=""
            fetchPriority="high"
          />
        </div>
        <div className="landing-profile-copy">
        <h1>
          <Link
            to="/portfolio"
            aria-label="Ashutosh Srivastava — open portfolio"
            title="Open portfolio"
          >
            Ashutosh Srivastava
          </Link>
        </h1>
        <p className="landing-subtitle">A curious mind, thinking in products</p>
        </div>
        </header>
        <div className="landing-intro">
          {homeCopy ? <ReactMarkdown components={{ a: ({ href, children }) => <Link to={href}>{children}</Link> }}>{homeCopy}</ReactMarkdown> : <>
          <p>I’m <strong>Ashutosh</strong>, a VIT-AP graduate interested in products, people, and the thinking that connects them. I like asking why something feels difficult, what someone actually needs, and how a small idea can become something useful.</p>
          <p>I’m drawn to the space between understanding a problem and building a response. That means exploring ideas, questioning assumptions, and learning by making things — often with AI, always with curiosity.</p>
          <p>This website is my own corner of the internet, with room for more than work. My <Link to="/portfolio">portfolio</Link> brings together what I build, my <Link to="/timeline">timeline</Link> traces the path so far, and <Link to="/contact">contact</Link> is where you can start a conversation with me.</p>
          <p>Use the navbar for shortcuts. Tap the <button className="intro-menu-button" aria-label="Expand all pages" aria-controls="mobile-page-menu" aria-expanded={expanded} onClick={() => { haptic(); setExpanded(true); }}>+</button> for every page, or hold the round button for one second, slide to choose, and release.</p>
          </>}
        </div>
      </div>}
      {pathname === "/timeline" && <Timeline content={timelineContent} />}
      <React.Suspense fallback={null}><AccountFeatures pathname={pathname} onHomeContent={setHomeCopy} onTimelineContent={setTimelineContent} /></React.Suspense>
      <div onPointerDownCapture={(event) => {
        if (event.isPrimary && event.button === 0 && !event.target.closest(".mobile-menu-toggle")) haptic();
      }} onClickCapture={(event) => {
        if (event.detail === 0) haptic();
      }} className={`mobile-navigation ${expanded ? "is-expanded" : ""} ${pressed ? "is-pressed" : ""} ${steering ? "is-steering" : ""}`}>
        <button className="mobile-menu-backdrop" aria-label="Close page menu" tabIndex={-1} onClick={() => setExpanded(false)} />
        <div className="mobile-menu" id="mobile-page-menu" ref={menuRef} inert={expanded ? undefined : ""} aria-hidden={!expanded}>
          <svg className="mobile-menu-surface" viewBox="0 0 350 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 29 1 H 321 Q 349 1 349 29 V 204.4 Q 349 222.4 331 222.4 H 322 C 299.4 222.4 282.4 239.4 282.4 262 V 272 Q 282.4 299 254.4 299 H 29 Q 1 299 1 271 V 29 Q 1 1 29 1 Z" />
          </svg>
          <nav aria-label="All pages" className="mobile-menu-grid">
            {pages.map(({ label, to, icon: Icon }, index) => (
              <Link key={label} to={to} data-page-index={index} className={selection === index ? "gesture-selected" : undefined} aria-current={pathname === to ? "page" : undefined} onClick={() => { setExpanded(false); toggleRef.current?.focus(); }}>
                <span><Icon size={24} strokeWidth={1.5} /></span>{label}
              </Link>
            ))}
          </nav>
        </div>
        <nav className="mobile-dock" onContextMenu={(event) => event.preventDefault()} onPointerDown={beginDockHold} onPointerUp={endDockHold} onPointerCancel={endDockHold} onPointerLeave={endDockHold} onLostPointerCapture={endDockHold} aria-label="Main navigation" aria-hidden={expanded} inert={expanded ? "" : undefined}>
          {primaryPages.map(({ label, to, icon: Icon }) => (
            <Link key={label} to={to} aria-label={label} aria-current={pathname === to ? "page" : undefined}>
              <Icon size={23} strokeWidth={1.6} /><span className="dock-label">{label}</span>
            </Link>
          ))}
        </nav>
        <button ref={toggleRef} className="mobile-menu-toggle" aria-label={expanded ? "Close page menu" : "Open page menu"} aria-expanded={expanded} aria-controls="mobile-page-menu" onPointerDown={beginGesture} onPointerMove={moveGesture} onPointerUp={endGesture} onPointerCancel={endGesture} onLostPointerCapture={endGesture} onContextMenu={(event) => event.preventDefault()} onClick={() => {
          if (suppressClick.current) { suppressClick.current = false; return; }
          setExpanded((value) => !value);
        }}>
          <Plus size={26} strokeWidth={1.6} />
        </button>
      </div>
    </main>
  );
}
