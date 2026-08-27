import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX,
  X, Check, Menu, Instagram, Youtube, Facebook, Twitter,
  Mail, Phone, MapPin, Radio as RadioIcon,
} from "lucide-react";

/* ============================================================
   DATA
   ============================================================ */

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Live", id: "live" },
  { label: "Shows", id: "shows" },
  { label: "Schedule", id: "schedule" },
  { label: "Request", id: "request" },
  { label: "Contact", id: "contact" },
];

const RECENTLY_PLAYED = [
  { title: "Midnight Drive", artist: "The Weekenders", time: "12:42 PM", art: "linear-gradient(135deg,#218DAE,#2BBBD7)" },
  { title: "Electric Nights", artist: "Nova Lane", time: "12:37 PM", art: "linear-gradient(135deg,#E98B50,#FFD758)" },
  { title: "Lost Again", artist: "Atlas", time: "12:31 PM", art: "linear-gradient(135deg,#BC4F4F,#CC3A63)" },
  { title: "Golden Hour", artist: "Ruby Sands", time: "12:24 PM", art: "linear-gradient(135deg,#165823,#A2AB73)" },
];

const SHOWS = [
  {
    name: "Morning Rush",
    time: "06:00 — 10:00",
    desc: "Start your morning with music, conversations and good energy.",
    accent: "#FFD758",
    dark: "#1A1A1A",
  },
  {
    name: "Midday Frequency",
    time: "10:00 — 14:00",
    desc: "The perfect soundtrack for your day.",
    accent: "#2BBBD7",
    dark: "#0E2E36",
  },
  {
    name: "Drive Time",
    time: "17:00 — 20:00",
    desc: "Music for the road home.",
    accent: "#E98B50",
    dark: "#3A2410",
  },
  {
    name: "Night Sessions",
    time: "20:00 — 00:00",
    desc: "Slow tempos and late-night stories for the night owls.",
    accent: "#CC3A63",
    dark: "#2B0F19",
  },
];

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const SCHEDULE = {
  MON: [{ t: "06:00", s: "Morning Rush" }, { t: "10:00", s: "Midday Frequency" }, { t: "17:00", s: "Drive Time" }],
  TUE: [{ t: "06:00", s: "Morning Rush" }, { t: "10:00", s: "Midday Frequency" }, { t: "20:00", s: "Night Sessions" }],
  WED: [{ t: "06:00", s: "Morning Rush" }, { t: "17:00", s: "Drive Time" }, { t: "20:00", s: "Night Sessions" }],
  THU: [{ t: "10:00", s: "Midday Frequency" }, { t: "17:00", s: "Drive Time" }, { t: "20:00", s: "Night Sessions" }],
  FRI: [{ t: "06:00", s: "Morning Rush" }, { t: "10:00", s: "Midday Frequency" }, { t: "17:00", s: "Drive Time" }],
  SAT: [{ t: "09:00", s: "Midday Frequency" }, { t: "20:00", s: "Night Sessions" }],
  SUN: [{ t: "09:00", s: "Morning Rush" }, { t: "20:00", s: "Night Sessions" }],
};

const HOSTS = [
  { name: "Maya Reyes", show: "Morning Rush", desc: "Coffee-fuelled mornings and the songs that make traffic bearable.", ring: "#FFD758" },
  { name: "Jordan Cole", show: "Midday Frequency", desc: "Keeps the afternoon moving with deep cuts and fan favourites.", ring: "#2BBBD7" },
  { name: "Sam Okafor", show: "Drive Time", desc: "Your co-pilot for the ride home, one request at a time.", ring: "#E98B50" },
  { name: "Lena Voss", show: "Night Sessions", desc: "Slow tempos and late-night stories for the night owls.", ring: "#CC3A63" },
];

const LISTEN_OPTIONS = ["Home", "Car", "Work", "College", "With Friends"];

/* ============================================================
   HOOKS
   ============================================================ */

function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div", style = {}, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`rw-reveal ${visible ? "rw-in" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function useCounter(target, active, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

/* ============================================================
   NAVBAR
   ============================================================ */

function Navbar({ loaded }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`rw-nav ${scrolled ? "rw-nav-scrolled" : ""}`}>
      <div className="rw-nav-inner">
        <div className={`rw-logo rw-load ${loaded ? "rw-load-in" : ""}`} style={{ transitionDelay: "0ms" }} onClick={() => go("home")}>
          <span className="rw-logo-mark" />
          RADIOWAVE
        </div>

        <nav className={`rw-nav-links rw-load ${loaded ? "rw-load-in" : ""}`} style={{ transitionDelay: "80ms" }}>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="rw-nav-link">
              {l.label}
            </button>
          ))}
        </nav>

        <div className={`rw-onair rw-load ${loaded ? "rw-load-in" : ""}`} style={{ transitionDelay: "120ms" }}>
          <span className="rw-onair-dot" />
          ON AIR
        </div>

        <button className="rw-hamburger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>

      <div className={`rw-mobile-menu ${open ? "rw-mobile-menu-open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button key={l.id} onClick={() => go(l.id)} className="rw-mobile-link">
            {l.label}
          </button>
        ))}
        <div className="rw-onair" style={{ marginTop: 8 }}>
          <span className="rw-onair-dot" /> ON AIR
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   HERO BACKGROUND
   ============================================================ */

function HeroBackground() {
  return (
    <div className="rw-hero-bg" aria-hidden="true">
      <svg className="rw-hero-blobs" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <circle className="rw-blob rw-blob-a" cx="180" cy="150" r="220" fill="#218DAE" opacity="0.28" />
        <circle className="rw-blob rw-blob-b" cx="1040" cy="620" r="260" fill="#CC3A63" opacity="0.22" />
        <circle className="rw-blob rw-blob-c" cx="980" cy="120" r="150" fill="#FFD758" opacity="0.35" />
        <circle className="rw-blob rw-blob-d" cx="220" cy="680" r="170" fill="#E98B50" opacity="0.25" />
        <path className="rw-wave-path rw-wave-1" d="M0,420 Q150,380 300,420 T600,420 T900,420 T1200,420" stroke="#2BBBD7" strokeWidth="2" fill="none" opacity="0.35" />
        <path className="rw-wave-path rw-wave-2" d="M0,470 Q150,510 300,470 T600,470 T900,470 T1200,470" stroke="#FFD758" strokeWidth="2" fill="none" opacity="0.3" />
        {Array.from({ length: 16 }).map((_, i) => (
          <circle
            key={i}
            className="rw-float-dot"
            cx={(i * 79) % 1200}
            cy={(i * 137) % 800}
            r={i % 3 === 0 ? 4 : 2.5}
            fill={["#FFD758", "#2BBBD7", "#FF788D"][i % 3]}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={`star-${i}`} className="rw-star" style={{ animationDelay: `${i * 0.7}s` }} transform={`translate(${120 + i * 190} ${70 + (i % 2) * 60})`}>
            <path d="M0,-6 L1.6,-1.6 L6,0 L1.6,1.6 L0,6 L-1.6,1.6 L-6,0 L-1.6,-1.6 Z" fill="#FEF2A0" />
          </g>
        ))}
      </svg>
      <div className="rw-grain" />
    </div>
  );
}

/* ============================================================
   AUDIO VISUALIZER + RADIO PLAYER
   ============================================================ */

function AudioVisualizer({ playing }) {
  const bars = 24;
  return (
    <div className={`rw-viz ${playing ? "rw-viz-playing" : ""}`}>
      <svg className="rw-viz-rings" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="150" className="rw-ring rw-ring-1" />
        <circle cx="170" cy="170" r="128" className="rw-ring rw-ring-2" />
        <circle cx="170" cy="170" r="106" className="rw-ring rw-ring-3" />
      </svg>
      <div className="rw-viz-particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="rw-particle" style={{ "--ang": `${i * 36}deg`, animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>
      <div className="rw-eq-ring">
        {Array.from({ length: bars }).map((_, i) => (
          <span key={i} className="rw-eq-bar" style={{ "--i": i, animationDelay: `${(i % 8) * 0.08}s` }} />
        ))}
      </div>
      <div className="rw-disk">
        <div className="rw-disk-art">
          <span className="rw-disk-hole" />
        </div>
      </div>
    </div>
  );
}

function RadioPlayer({ loaded }) {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(32);
  const [volume, setVolume] = useState(70);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 0.6));
      }, 250);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing]);

  const fmt = (pct) => {
    const totalSec = Math.floor((pct / 100) * 214);
    const m = Math.floor(totalSec / 60);
    const s = String(totalSec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div id="live" className={`rw-player rw-load ${loaded ? "rw-load-in" : ""}`} style={{ transitionDelay: "260ms" }}>
      <div className="rw-player-inner">
        <div className="rw-player-viz-col">
          <span className="rw-live-tag"><span className="rw-onair-dot" /> LIVE NOW</span>
          <AudioVisualizer playing={playing} />
        </div>

        <div className="rw-player-info">
          <p className="rw-eyebrow">Now playing</p>
          <h3 className="rw-song-title">Midnight Drive</h3>
          <p className="rw-song-artist">The Weekenders</p>

          <div className="rw-progress-wrap">
            <div className="rw-progress-track" onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setProgress(((e.clientX - rect.left) / rect.width) * 100);
            }}>
              <div className="rw-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="rw-progress-labels">
              <span>{fmt(progress)}</span>
              <span>3:34</span>
            </div>
          </div>

          <div className="rw-controls">
            <button className="rw-ctrl-btn" aria-label="Previous"><SkipBack size={20} /></button>
            <button className="rw-play-btn" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
              {playing ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
            </button>
            <button className="rw-ctrl-btn" aria-label="Next"><SkipForward size={20} /></button>

            <div className="rw-volume">
              <button className="rw-ctrl-btn rw-ctrl-btn-sm" onClick={() => setVolume((v) => (v === 0 ? 70 : 0))}>
                {volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>
              <input
                type="range" min="0" max="100" value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="rw-volume-slider"
                style={{ "--val": `${volume}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */

function Hero({ loaded, onRequest }) {
  return (
    <section id="home" className="rw-hero">
      <HeroBackground />
      <div className="rw-hero-content">
        <h1 className={`rw-h1 rw-load ${loaded ? "rw-load-in" : ""}`} style={{ transitionDelay: "160ms" }}>
          YOUR SOUND.<br />YOUR FREQUENCY.
        </h1>
        <p className={`rw-hero-sub rw-load ${loaded ? "rw-load-in" : ""}`} style={{ transitionDelay: "200ms" }}>
          Live music, fresh voices and the sounds that keep your day moving.
        </p>
        <div className={`rw-hero-ctas rw-load ${loaded ? "rw-load-in" : ""}`} style={{ transitionDelay: "230ms" }}>
          <a href="#live" className="rw-btn rw-btn-primary">LISTEN LIVE</a>
          <button className="rw-btn rw-btn-outline" onClick={onRequest}>REQUEST A SONG</button>
        </div>

        <RadioPlayer loaded={loaded} />
      </div>
    </section>
  );
}

/* ============================================================
   REQUEST CTA
   ============================================================ */

function RequestCTA({ onOpen }) {
  return (
    <section id="request" className="rw-request">
      <div className="rw-request-decor" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="rw-note" style={{ left: `${8 + i * 20}%`, animationDelay: `${i * 0.9}s` }}>♪</span>
        ))}
        <svg className="rw-request-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q100,10 200,60 T400,60 T600,60 T800,60 T1000,60 T1200,60" fill="none" stroke="#FFDADA" strokeWidth="2" opacity="0.5" />
        </svg>
      </div>
      <Reveal className="rw-request-inner">
        <p className="rw-eyebrow rw-eyebrow-light">On air, for you</p>
        <h2 className="rw-h2 rw-light-text">WHAT SHOULD WE<br />PLAY NEXT?</h2>
        <p className="rw-request-sub">You choose the song. We bring it to the air.</p>
        <button className="rw-btn rw-btn-primary rw-btn-lg" onClick={onOpen}>REQUEST A SONG</button>
      </Reveal>
    </section>
  );
}

/* ============================================================
   REQUEST MODAL
   ============================================================ */

function RequestModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", song: "", artist: "", message: "", listening: "Home" });
  const [sent, setSent] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setSent(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open && !modalRef.current?.classList.contains("rw-modal-closing")) {
    // still render for exit animation control via CSS class below
  }

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className={`rw-modal-overlay ${open ? "rw-modal-open" : ""}`}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="rw-modal" ref={modalRef} role="dialog" aria-modal="true">
        <button className="rw-modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>

        {!sent ? (
          <>
            <p className="rw-eyebrow">Studio line open</p>
            <h3 className="rw-h3">REQUEST A SONG</h3>
            <form className="rw-form" onSubmit={submit}>
              <label className="rw-field">
                <span>Your Name</span>
                <input required value={form.name} onChange={update("name")} placeholder="Jamie Rivera" />
              </label>
              <div className="rw-field-row">
                <label className="rw-field">
                  <span>Song Name</span>
                  <input required value={form.song} onChange={update("song")} placeholder="Midnight Drive" />
                </label>
                <label className="rw-field">
                  <span>Artist</span>
                  <input required value={form.artist} onChange={update("artist")} placeholder="The Weekenders" />
                </label>
              </div>
              <label className="rw-field">
                <span>Message</span>
                <textarea rows={3} value={form.message} onChange={update("message")} placeholder="Say hi to the studio..." />
              </label>
              <label className="rw-field">
                <span>Where are you listening?</span>
                <select value={form.listening} onChange={update("listening")}>
                  {LISTEN_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
              <button type="submit" className="rw-btn rw-btn-primary rw-btn-full">SEND REQUEST</button>
            </form>
          </>
        ) : (
          <div className="rw-success">
            <div className="rw-check-circle"><Check size={30} strokeWidth={3} /></div>
            <h3 className="rw-h3">REQUEST SENT!</h3>
            <p>Your song request has been sent to the studio.</p>
            <div className="rw-success-notes" aria-hidden="true">
              <span>♪</span><span>♫</span><span>♪</span>
            </div>
            <button className="rw-btn rw-btn-outline rw-btn-full" onClick={onClose}>DONE</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   RECENTLY PLAYED
   ============================================================ */

function RecentlyPlayed() {
  return (
    <section className="rw-section">
      <Reveal as="h2" className="rw-h2 rw-section-title">RECENTLY ON AIR</Reveal>
      <div className="rw-recent-grid">
        {RECENTLY_PLAYED.map((r, i) => (
          <Reveal key={r.title} delay={i * 90} className="rw-recent-card">
            <div className="rw-recent-art" style={{ background: r.art }}>
              <span className="rw-recent-play"><Play size={18} fill="currentColor" /></span>
            </div>
            <div className="rw-recent-info">
              <p className="rw-recent-title">{r.title}</p>
              <p className="rw-recent-artist">{r.artist}</p>
            </div>
            <span className="rw-recent-time">{r.time}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   SHOWS
   ============================================================ */

function Shows() {
  return (
    <section id="shows" className="rw-section">
      <Reveal as="h2" className="rw-h2 rw-section-title">THE SHOWS</Reveal>
      <div className="rw-shows-grid">
        {SHOWS.map((s, i) => (
          <Reveal key={s.name} delay={i * 90} className="rw-show-card" style={{ "--accent": s.accent, "--dark": s.dark }}>
            <span className="rw-show-time">{s.time}</span>
            <h3 className="rw-show-name">{s.name.toUpperCase()}</h3>
            <p className="rw-show-desc">{s.desc}</p>
            <span className="rw-show-arrow">→</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   SCHEDULE
   ============================================================ */

function Schedule() {
  const todayIdx = (new Date().getDay() + 6) % 7; // Mon=0
  return (
    <section id="schedule" className="rw-section rw-schedule-section">
      <Reveal as="h2" className="rw-h2 rw-section-title">ON AIR THIS WEEK</Reveal>
      <div className="rw-schedule-scroll">
        {DAYS.map((d, i) => (
          <Reveal key={d} delay={i * 60} className={`rw-day-col ${i === todayIdx ? "rw-day-today" : ""}`}>
            <div className="rw-day-label">{d}</div>
            <div className="rw-day-shows">
              {SCHEDULE[d].map((item, j) => (
                <div key={j} className="rw-day-item">
                  <span className="rw-day-time">{item.t}</span>
                  <span className="rw-day-show">{item.s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   HOSTS
   ============================================================ */

function Hosts() {
  return (
    <section className="rw-section">
      <Reveal as="h2" className="rw-h2 rw-section-title">MEET THE VOICES</Reveal>
      <div className="rw-hosts-grid">
        {HOSTS.map((h, i) => (
          <Reveal key={h.name} delay={i * 90} className="rw-host-card">
            <div className="rw-host-avatar-wrap">
              <span className="rw-host-ring" style={{ borderColor: h.ring }} />
              <div className="rw-host-avatar" style={{ background: `linear-gradient(135deg, ${h.ring}, #FFF7EB)` }}>
                {h.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
            <h3 className="rw-host-name">{h.name}</h3>
            <p className="rw-host-show" style={{ color: h.ring }}>{h.show}</p>
            <p className="rw-host-desc">{h.desc}</p>
            <div className="rw-host-social">
              <Instagram size={16} /><Youtube size={16} /><Facebook size={16} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   LISTENER STATS
   ============================================================ */

function ListenerStats() {
  const [ref, visible] = useReveal(0.3);
  const listeners = useCounter(12480, visible);
  const songs = useCounter(1240, visible);
  const requests = useCounter(340, visible);

  return (
    <section className="rw-stats-section" ref={ref}>
      <div className="rw-stats-inner">
        <p className="rw-eyebrow rw-eyebrow-light">Community</p>
        <h2 className="rw-h2 rw-light-text">YOU'RE PART OF<br />THE FREQUENCY</h2>
        <p className="rw-stats-copy">Radio isn't just something you listen to. It's something you become part of.</p>
        <div className="rw-stats-grid">
          <div className="rw-stat">
            <span className="rw-stat-num">{listeners.toLocaleString()}+</span>
            <span className="rw-stat-label">Listeners today</span>
          </div>
          <div className="rw-stat">
            <span className="rw-stat-num">{songs.toLocaleString()}</span>
            <span className="rw-stat-label">Songs played</span>
          </div>
          <div className="rw-stat">
            <span className="rw-stat-num">{requests.toLocaleString()}+</span>
            <span className="rw-stat-label">Requests this month</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="rw-section rw-contact-section">
      <div className="rw-contact-decor" aria-hidden="true">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
          <circle cx="90" cy="80" r="60" fill="#FFD758" opacity="0.18" className="rw-blob rw-blob-a" />
          <circle cx="1120" cy="320" r="90" fill="#218DAE" opacity="0.15" className="rw-blob rw-blob-b" />
          <path className="rw-wave-path rw-wave-1" d="M0,220 Q150,180 300,220 T600,220 T900,220 T1200,220" stroke="#CC3A63" strokeWidth="2" fill="none" opacity="0.25" />
        </svg>
      </div>

      <Reveal as="div" className="rw-contact-head">
        <p className="rw-eyebrow">Say hello</p>
        <h2 className="rw-h2">LET'S TALK</h2>
        <p className="rw-contact-sub">Got a question, idea, feedback or something you'd love to hear on air? Drop us a message.</p>
      </Reveal>

      <div className="rw-contact-grid">
        <Reveal className="rw-contact-info">
          <h3 className="rw-contact-block-title">RADIO STUDIO</h3>
          <p className="rw-contact-line"><MapPin size={16} /> 123 Frequency Street, Music District</p>

          <h3 className="rw-contact-block-title">CALL THE STUDIO</h3>
          <p className="rw-contact-line"><Phone size={16} /> +91 98765 43210</p>

          <h3 className="rw-contact-block-title">EMAIL</h3>
          <p className="rw-contact-line"><Mail size={16} /> hello@radiowave.com</p>

          <h3 className="rw-contact-block-title">SOCIAL</h3>
          <div className="rw-contact-social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </Reveal>

        <Reveal delay={100} className="rw-contact-form-wrap">
          {!sent ? (
            <form className="rw-form" onSubmit={submit}>
              <label className="rw-field">
                <span>Your Name</span>
                <input required value={form.name} onChange={update("name")} placeholder="Your name" />
              </label>
              <label className="rw-field">
                <span>Email Address</span>
                <input required type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" />
              </label>
              <label className="rw-field">
                <span>Subject</span>
                <input value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
              </label>
              <label className="rw-field">
                <span>Message</span>
                <textarea rows={4} required value={form.message} onChange={update("message")} placeholder="Write your message..." />
              </label>
              <button type="submit" className="rw-btn rw-btn-dark rw-btn-full">SEND MESSAGE</button>
            </form>
          ) : (
            <div className="rw-success">
              <div className="rw-check-circle"><Check size={30} strokeWidth={3} /></div>
              <h3 className="rw-h3">MESSAGE SENT!</h3>
              <p>Thanks for reaching out. We'll get back to you soon.</p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="rw-footer">
      <div className="rw-footer-top">
        <div>
          <div className="rw-logo rw-logo-footer"><span className="rw-logo-mark" />RADIOWAVE</div>
          <p className="rw-footer-tagline">ALWAYS ON. ALWAYS LISTENING.</p>
        </div>
        <nav className="rw-footer-links">
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}>
              {l.label}
            </button>
          ))}
        </nav>
        <div className="rw-footer-social">
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
          <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          <a href="#" aria-label="X"><Twitter size={18} /></a>
        </div>
      </div>
      <div className="rw-footer-eq" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${(i % 10) * 0.09}s` }} />
        ))}
      </div>
      <p className="rw-footer-copy">© {new Date().getFullYear()} RadioWave Broadcasting. All frequencies reserved.</p>
    </footer>
  );
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <div className="rw-app">
      <style>{CSS}</style>
      <Navbar loaded={loaded} />
      <Hero loaded={loaded} onRequest={() => setModalOpen(true)} />
      <RequestCTA onOpen={() => setModalOpen(true)} />
      <RecentlyPlayed />
      <Shows />
      <Schedule />
      <Hosts />
      <ListenerStats />
      <Contact />
      <Footer />
      <RequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

/* ============================================================
   CSS
   ============================================================ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

.rw-app {
  --ocean: #218DAE;
  --cyan: #2BBBD7;
  --yellow: #FFD758;
  --yellow-soft: #FCE59A;
  --orange: #E98B50;
  --orange-soft: #F3CD97;
  --burgundy: #BC4F4F;
  --pink: #CC3A63;
  --pink-light: #FF788D;
  --pink-pale: #FFDADA;
  --pink-white: #FFF2F2;
  --cream: #FFF7EB;
  --cream-2: #F9F0E0;
  --green: #A2AB73;
  --green-dark: #165823;
  --ink: #1B1B16;
  --font-display: 'Anton', sans-serif;
  --font-body: 'Manrope', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  font-family: var(--font-body);
  color: var(--ink);
  background: var(--cream);
  overflow-x: hidden;
  position: relative;
}
.rw-app * { box-sizing: border-box; }
.rw-app h1, .rw-app h2, .rw-app h3 { font-family: var(--font-display); font-weight: 400; letter-spacing: 0.01em; margin: 0; line-height: 1.02; }
.rw-app p { margin: 0; }
.rw-app button { font-family: var(--font-body); cursor: pointer; border: none; background: none; }
.rw-app input, .rw-app select, .rw-app textarea { font-family: var(--font-body); }
.rw-app a { text-decoration: none; color: inherit; }

/* ---------- reveal / load animations ---------- */
.rw-reveal { opacity: 0; transform: translateY(28px); transition: opacity 650ms cubic-bezier(.22,1,.36,1), transform 650ms cubic-bezier(.22,1,.36,1); }
.rw-reveal.rw-in { opacity: 1; transform: translateY(0); }
.rw-load { opacity: 0; transform: translateY(18px); transition: opacity 700ms cubic-bezier(.22,1,.36,1), transform 700ms cubic-bezier(.22,1,.36,1); }
.rw-load.rw-load-in { opacity: 1; transform: translateY(0); }

/* ---------- eyebrow / headings ---------- */
.rw-eyebrow { font-family: var(--font-mono); text-transform: uppercase; font-size: 12px; letter-spacing: 0.16em; color: var(--pink); margin-bottom: 10px; }
.rw-eyebrow-light { color: var(--yellow); }
.rw-h1 { font-size: clamp(48px, 9vw, 108px); color: var(--ink); }
.rw-h2 { font-size: clamp(32px, 5vw, 56px); }
.rw-h3 { font-size: clamp(22px, 4vw, 30px); margin-bottom: 6px; }
.rw-light-text { color: var(--cream); }
.rw-section-title { text-align: center; margin: 0 auto 44px; max-width: 900px; padding: 0 24px; }

/* ---------- buttons ---------- */
.rw-btn { display: inline-flex; align-items: center; justify-content: center; padding: 16px 30px; border-radius: 100px; font-family: var(--font-mono); font-weight: 600; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; transition: transform 280ms cubic-bezier(.22,1,.36,1), box-shadow 280ms ease, background 280ms ease; position: relative; overflow: hidden; }
.rw-btn:active { transform: scale(0.96); }
.rw-btn-primary { background: var(--yellow); color: var(--ink); box-shadow: 0 8px 24px rgba(255,215,88,0.35); }
.rw-btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 30px rgba(255,215,88,0.5); }
.rw-btn-outline { background: transparent; color: var(--ink); border: 2px solid var(--ink); }
.rw-btn-outline:hover { background: var(--ink); color: var(--cream); transform: translateY(-3px); }
.rw-btn-dark { background: var(--green-dark); color: var(--cream); }
.rw-btn-dark:hover { background: var(--ocean); transform: translateY(-3px); }
.rw-btn-lg { padding: 20px 40px; font-size: 14px; }
.rw-btn-full { width: 100%; }

/* ============ NAVBAR ============ */
.rw-nav { position: sticky; top: 0; z-index: 60; width: 100%; padding: 18px 6vw; transition: all 350ms ease; background: transparent; }
.rw-nav-scrolled { padding: 10px 6vw; background: rgba(255,247,235,0.75); backdrop-filter: blur(14px); box-shadow: 0 2px 24px rgba(0,0,0,0.06); }
.rw-nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; max-width: 1400px; margin: 0 auto; }
.rw-logo { font-family: var(--font-display); font-size: 21px; letter-spacing: 0.03em; display: flex; align-items: center; gap: 10px; cursor: pointer; }
.rw-logo-mark { width: 12px; height: 12px; border-radius: 50%; background: var(--pink); box-shadow: 0 0 0 4px var(--yellow-soft); flex-shrink: 0; }
.rw-nav-links { display: flex; gap: 30px; }
.rw-nav-link { font-size: 14px; font-weight: 600; color: var(--ink); position: relative; padding: 4px 0; }
.rw-nav-link::after { content: ""; position: absolute; left: 0; bottom: -2px; width: 0%; height: 2px; background: var(--pink); transition: width 250ms ease; }
.rw-nav-link:hover::after { width: 100%; }
.rw-onair { font-family: var(--font-mono); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; display: flex; align-items: center; gap: 8px; background: var(--ink); color: var(--cream); padding: 8px 16px; border-radius: 100px; }
.rw-onair-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff5252; animation: rwPulseDot 1.6s ease-in-out infinite; }
.rw-hamburger { display: none; color: var(--ink); }
.rw-mobile-menu { max-height: 0; overflow: hidden; transition: max-height 400ms ease; display: flex; flex-direction: column; gap: 4px; }
.rw-mobile-menu-open { max-height: 400px; margin-top: 16px; }
.rw-mobile-link { text-align: left; padding: 12px 4px; font-size: 16px; font-weight: 600; border-bottom: 1px solid rgba(0,0,0,0.06); }

@keyframes rwPulseDot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(0.75); } }

/* ============ HERO ============ */
.rw-hero { position: relative; padding: 40px 6vw 90px; min-height: 100vh; display: flex; align-items: center; }
.rw-hero-bg { position: absolute; inset: 0; overflow: hidden; z-index: 0; }
.rw-hero-blobs { width: 100%; height: 100%; }
.rw-blob { transform-origin: center; animation: rwFloat 14s ease-in-out infinite; }
.rw-blob-a { animation-duration: 16s; }
.rw-blob-b { animation-duration: 20s; animation-delay: -4s; }
.rw-blob-c { animation-duration: 12s; animation-delay: -2s; }
.rw-blob-d { animation-duration: 18s; animation-delay: -7s; }
@keyframes rwFloat { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(20px,-24px) scale(1.05); } 66% { transform: translate(-16px,16px) scale(0.97); } }
.rw-wave-path { animation: rwWaveShift 8s ease-in-out infinite; }
.rw-wave-2 { animation-duration: 10s; animation-delay: -2s; }
@keyframes rwWaveShift { 0%,100% { transform: translateX(0); } 50% { transform: translateX(30px); } }
.rw-float-dot { animation: rwDotFloat 6s ease-in-out infinite; }
@keyframes rwDotFloat { 0%,100% { transform: translateY(0); opacity: 0.7; } 50% { transform: translateY(-18px); opacity: 1; } }
.rw-star { animation: rwStarTwinkle 3s ease-in-out infinite; transform-origin: center; }
@keyframes rwStarTwinkle { 0%,100% { opacity: 0.25; transform: scale(0.8) rotate(0deg); } 50% { opacity: 0.9; transform: scale(1.15) rotate(20deg); } }
.rw-grain { position: absolute; inset: 0; opacity: 0.05; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }

.rw-hero-content { position: relative; z-index: 1; max-width: 1400px; margin: 0 auto; width: 100%; }
.rw-hero-sub { font-size: clamp(15px,2vw,19px); color: #4a4a3f; max-width: 480px; margin-top: 22px; }
.rw-hero-ctas { display: flex; gap: 16px; margin-top: 34px; flex-wrap: wrap; }

/* ---------- player ---------- */
.rw-player { margin-top: 64px; background: var(--ink); border-radius: 32px; padding: 4px; box-shadow: 0 30px 70px rgba(0,0,0,0.25); }
.rw-player-inner { background: linear-gradient(135deg, #20201a, #141410); border-radius: 28px; padding: clamp(24px,4vw,48px); display: grid; grid-template-columns: 340px 1fr; gap: 40px; align-items: center; }
.rw-player-viz-col { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.rw-live-tag { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--yellow); display: flex; align-items: center; gap: 8px; }

.rw-viz { position: relative; width: 260px; height: 260px; display: flex; align-items: center; justify-content: center; }
.rw-viz-rings { position: absolute; inset: 0; width: 100%; height: 100%; }
.rw-ring { fill: none; stroke-width: 1; stroke: var(--cyan); opacity: 0.25; transform-origin: center; }
.rw-ring-2 { stroke: var(--yellow); opacity: 0.2; }
.rw-ring-3 { stroke: var(--pink-light); opacity: 0.18; }
.rw-viz-playing .rw-ring-1 { animation: rwRingPulse 2.4s ease-in-out infinite; }
.rw-viz-playing .rw-ring-2 { animation: rwRingPulse 2.4s ease-in-out infinite 0.3s; }
.rw-viz-playing .rw-ring-3 { animation: rwRingPulse 2.4s ease-in-out infinite 0.6s; }
@keyframes rwRingPulse { 0%,100% { opacity: 0.15; transform: scale(0.97); } 50% { opacity: 0.4; transform: scale(1.03); } }

.rw-eq-ring { position: absolute; inset: 0; }
.rw-eq-bar { position: absolute; left: 50%; top: 50%; width: 3px; height: 14px; background: var(--cyan); border-radius: 3px; transform: rotate(calc(var(--i) * 15deg)) translateY(-118px); transform-origin: center 118px; opacity: 0.85; }
.rw-viz-playing .rw-eq-bar { animation: rwEqBar 1.1s ease-in-out infinite; }
@keyframes rwEqBar { 0%,100% { height: 8px; } 50% { height: 22px; } }

.rw-viz-particles { position: absolute; inset: 0; }
.rw-particle { position: absolute; left: 50%; top: 50%; width: 4px; height: 4px; border-radius: 50%; background: var(--yellow); opacity: 0; transform: rotate(var(--ang)) translateX(60px); }
.rw-viz-playing .rw-particle { animation: rwParticleOut 2.4s ease-out infinite; }
@keyframes rwParticleOut { 0% { opacity: 0; transform: rotate(var(--ang)) translateX(60px) scale(0.5); } 30% { opacity: 1; } 100% { opacity: 0; transform: rotate(var(--ang)) translateX(128px) scale(1); } }

.rw-disk { width: 160px; height: 160px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.rw-disk-art { width: 100%; height: 100%; border-radius: 50%; background: conic-gradient(from 90deg, var(--ocean), var(--cyan), var(--pink), var(--yellow), var(--ocean)); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 6px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.4); animation: rwSpin 12s linear infinite; animation-play-state: paused; }
.rw-viz-playing .rw-disk-art { animation-play-state: running; }
.rw-disk-hole { width: 20px; height: 20px; border-radius: 50%; background: #141410; box-shadow: 0 0 0 4px rgba(255,247,235,0.15); }
@keyframes rwSpin { to { transform: rotate(360deg); } }

.rw-player-info { color: var(--cream); }
.rw-player-info .rw-eyebrow { color: var(--cyan); }
.rw-song-title { font-size: clamp(28px,4vw,42px); color: var(--cream); }
.rw-song-artist { font-family: var(--font-mono); color: #a9a99a; margin-top: 6px; font-size: 14px; }

.rw-progress-wrap { margin-top: 26px; }
.rw-progress-track { height: 6px; background: rgba(255,255,255,0.12); border-radius: 10px; cursor: pointer; overflow: hidden; }
.rw-progress-fill { height: 100%; background: linear-gradient(90deg, var(--cyan), var(--yellow)); border-radius: 10px; transition: width 150ms linear; }
.rw-progress-labels { display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 11px; color: #8f8f80; margin-top: 8px; }

.rw-controls { display: flex; align-items: center; gap: 18px; margin-top: 28px; flex-wrap: wrap; }
.rw-ctrl-btn { width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--cream); background: rgba(255,255,255,0.08); transition: all 220ms ease; }
.rw-ctrl-btn:hover { background: rgba(255,255,255,0.18); transform: scale(1.08); }
.rw-ctrl-btn-sm { width: 34px; height: 34px; }
.rw-play-btn { width: 66px; height: 66px; border-radius: 50%; background: var(--yellow); color: var(--ink); display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 26px rgba(255,215,88,0.4); transition: transform 220ms cubic-bezier(.22,1,.36,1); }
.rw-play-btn:hover { transform: scale(1.08); }
.rw-volume { display: flex; align-items: center; gap: 8px; margin-left: auto; }
.rw-volume-slider { -webkit-appearance: none; width: 90px; height: 4px; border-radius: 4px; background: linear-gradient(90deg, var(--cyan) var(--val), rgba(255,255,255,0.15) var(--val)); }
.rw-volume-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 13px; height: 13px; border-radius: 50%; background: var(--cream); cursor: pointer; }

/* ============ SECTIONS GENERIC ============ */
.rw-section { padding: 110px 6vw; max-width: 1400px; margin: 0 auto; }

/* ============ REQUEST CTA ============ */
.rw-request { position: relative; background: linear-gradient(135deg, var(--pink), var(--burgundy)); padding: 120px 6vw; overflow: hidden; text-align: center; }
.rw-request-decor { position: absolute; inset: 0; }
.rw-note { position: absolute; top: 20%; font-size: 34px; color: rgba(255,255,255,0.35); animation: rwNoteFloat 5s ease-in-out infinite; }
@keyframes rwNoteFloat { 0%,100% { transform: translateY(0) rotate(-6deg); opacity: 0.3; } 50% { transform: translateY(-40px) rotate(8deg); opacity: 0.7; } }
.rw-request-wave { position: absolute; bottom: 0; left: 0; width: 100%; height: 100px; }
.rw-request-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
.rw-request-sub { color: var(--pink-pale); font-size: 17px; margin: 18px 0 34px; }

/* ============ MODAL ============ */
.rw-modal-overlay { position: fixed; inset: 0; z-index: 100; display: flex; align-items: center; justify-content: center; padding: 20px; background: rgba(20,15,15,0); backdrop-filter: blur(0px); pointer-events: none; transition: background 320ms ease, backdrop-filter 320ms ease; }
.rw-modal-open { background: rgba(20,15,15,0.55); backdrop-filter: blur(8px); pointer-events: auto; }
.rw-modal { width: 100%; max-width: 460px; max-height: 90vh; overflow-y: auto; background: var(--cream); border-radius: 28px; padding: 34px; position: relative; opacity: 0; transform: scale(0.9) translateY(10px); transition: opacity 320ms cubic-bezier(.22,1,.36,1), transform 320ms cubic-bezier(.22,1,.36,1); }
.rw-modal-open .rw-modal { opacity: 1; transform: scale(1) translateY(0); }
.rw-modal-close { position: absolute; top: 20px; right: 20px; width: 34px; height: 34px; border-radius: 50%; background: rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: center; transition: background 200ms; }
.rw-modal-close:hover { background: rgba(0,0,0,0.12); }

.rw-form { display: flex; flex-direction: column; gap: 16px; margin-top: 20px; }
.rw-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.rw-field { display: flex; flex-direction: column; gap: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #6b6b5c; }
.rw-field input, .rw-field select, .rw-field textarea { border: 2px solid rgba(0,0,0,0.08); background: #fff; border-radius: 14px; padding: 13px 15px; font-size: 15px; color: var(--ink); font-weight: 500; transition: border-color 220ms ease, box-shadow 220ms ease; resize: vertical; }
.rw-field input:focus, .rw-field select:focus, .rw-field textarea:focus { outline: none; border-color: var(--cyan); box-shadow: 0 0 0 4px rgba(43,187,215,0.15); }

.rw-success { text-align: center; padding: 20px 0 6px; }
.rw-check-circle { width: 64px; height: 64px; border-radius: 50%; background: var(--green-dark); color: var(--cream); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; animation: rwPop 500ms cubic-bezier(.34,1.56,.64,1); }
@keyframes rwPop { 0% { transform: scale(0); } 70% { transform: scale(1.15); } 100% { transform: scale(1); } }
.rw-success p { margin-top: 10px; color: #5c5c4e; }
.rw-success-notes { display: flex; justify-content: center; gap: 18px; font-size: 22px; color: var(--pink); margin: 18px 0; }
.rw-success-notes span { animation: rwNoteFloat 2.4s ease-in-out infinite; display: inline-block; }
.rw-success-notes span:nth-child(2) { animation-delay: 0.3s; }
.rw-success-notes span:nth-child(3) { animation-delay: 0.6s; }
.rw-success .rw-btn { margin-top: 14px; }

/* ============ RECENTLY PLAYED ============ */
.rw-recent-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.rw-recent-card { background: #fff; border-radius: 22px; padding: 16px; display: flex; flex-direction: column; gap: 14px; box-shadow: 0 6px 18px rgba(0,0,0,0.05); transition: transform 320ms cubic-bezier(.22,1,.36,1), box-shadow 320ms ease; cursor: pointer; }
.rw-recent-card:hover { transform: translateY(-8px); box-shadow: 0 20px 34px rgba(0,0,0,0.12); }
.rw-recent-art { width: 100%; aspect-ratio: 1; border-radius: 16px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; transition: transform 400ms ease; }
.rw-recent-card:hover .rw-recent-art { transform: scale(1.04); }
.rw-recent-play { width: 44px; height: 44px; border-radius: 50%; background: rgba(255,255,255,0.9); color: var(--ink); display: flex; align-items: center; justify-content: center; opacity: 0; transform: scale(0.7); transition: all 250ms ease; }
.rw-recent-card:hover .rw-recent-play { opacity: 1; transform: scale(1); }
.rw-recent-title { font-weight: 800; font-size: 15px; }
.rw-recent-artist { font-size: 13px; color: #767666; margin-top: 2px; }
.rw-recent-time { font-family: var(--font-mono); font-size: 12px; color: var(--pink); }

/* ============ SHOWS ============ */
.rw-shows-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.rw-show-card { background: var(--dark); color: var(--cream); border-radius: 24px; padding: 30px 26px; position: relative; overflow: hidden; min-height: 220px; display: flex; flex-direction: column; transition: transform 320ms cubic-bezier(.22,1,.36,1); }
.rw-show-card::before { content: ""; position: absolute; top: -30px; right: -30px; width: 110px; height: 110px; border-radius: 50%; background: var(--accent); opacity: 0.18; }
.rw-show-card:hover { transform: translateY(-8px); }
.rw-show-time { font-family: var(--font-mono); font-size: 12px; color: var(--accent); font-weight: 600; letter-spacing: 0.06em; }
.rw-show-name { font-size: 24px; margin-top: 14px; }
.rw-show-desc { font-size: 14px; color: rgba(255,247,235,0.75); margin-top: 12px; line-height: 1.5; }
.rw-show-arrow { margin-top: auto; align-self: flex-end; font-size: 20px; color: var(--accent); transition: transform 250ms ease; }
.rw-show-card:hover .rw-show-arrow { transform: translateX(6px); }

/* ============ SCHEDULE ============ */
.rw-schedule-section { background: var(--cream-2); border-radius: 40px; }
.rw-schedule-scroll { display: grid; grid-template-columns: repeat(7, minmax(140px, 1fr)); gap: 14px; overflow-x: auto; padding-bottom: 6px; }
.rw-day-col { background: #fff; border-radius: 18px; padding: 18px 14px; min-height: 200px; transition: background 300ms ease, transform 300ms ease; }
.rw-day-today { background: var(--yellow); }
.rw-day-label { font-family: var(--font-mono); font-weight: 700; font-size: 13px; letter-spacing: 0.08em; margin-bottom: 14px; }
.rw-day-shows { display: flex; flex-direction: column; gap: 10px; }
.rw-day-item { display: flex; flex-direction: column; font-size: 12px; }
.rw-day-time { font-family: var(--font-mono); color: var(--pink); font-weight: 600; }
.rw-day-show { font-weight: 600; margin-top: 1px; }

/* ============ HOSTS ============ */
.rw-hosts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.rw-host-card { text-align: center; padding: 10px; transition: transform 320ms cubic-bezier(.22,1,.36,1); }
.rw-host-card:hover { transform: translateY(-8px); }
.rw-host-avatar-wrap { position: relative; width: 108px; height: 108px; margin: 0 auto 18px; }
.rw-host-ring { position: absolute; inset: -8px; border: 2px dashed; border-radius: 50%; opacity: 0.5; transition: transform 500ms ease; }
.rw-host-card:hover .rw-host-ring { transform: rotate(45deg); }
.rw-host-avatar { width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 26px; color: var(--ink); transition: transform 350ms ease; }
.rw-host-card:hover .rw-host-avatar { transform: scale(1.06); }
.rw-host-name { font-size: 19px; }
.rw-host-show { font-family: var(--font-mono); font-size: 12px; font-weight: 700; margin-top: 4px; letter-spacing: 0.04em; }
.rw-host-desc { font-size: 13.5px; color: #6b6b5c; margin-top: 10px; line-height: 1.5; }
.rw-host-social { display: flex; justify-content: center; gap: 12px; margin-top: 14px; color: #8a8a78; }

/* ============ STATS ============ */
.rw-stats-section { background: var(--green-dark); padding: 110px 6vw; text-align: center; position: relative; overflow: hidden; }
.rw-stats-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }
.rw-stats-copy { color: rgba(255,247,235,0.75); font-size: 17px; max-width: 480px; margin: 18px auto 0; }
.rw-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 56px; }
.rw-stat { display: flex; flex-direction: column; gap: 6px; }
.rw-stat-num { font-family: var(--font-display); font-size: clamp(34px,5vw,54px); color: var(--yellow); }
.rw-stat-label { font-family: var(--font-mono); font-size: 12px; color: rgba(255,247,235,0.65); text-transform: uppercase; letter-spacing: 0.06em; }

/* ============ CONTACT ============ */
.rw-contact-section { position: relative; }
.rw-contact-decor { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.rw-contact-head { text-align: center; max-width: 640px; margin: 0 auto 60px; position: relative; z-index: 1; }
.rw-contact-sub { color: #6b6b5c; font-size: 16px; margin-top: 14px; }
.rw-contact-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 50px; position: relative; z-index: 1; }
.rw-contact-block-title { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em; color: var(--pink); margin-top: 22px; }
.rw-contact-block-title:first-child { margin-top: 0; }
.rw-contact-line { display: flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 600; margin-top: 6px; }
.rw-contact-social { display: flex; gap: 12px; margin-top: 10px; }
.rw-contact-social a { width: 38px; height: 38px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.06); transition: all 250ms ease; }
.rw-contact-social a:hover { background: var(--pink); color: #fff; transform: translateY(-4px) rotate(8deg); }
.rw-contact-form-wrap { background: #fff; border-radius: 28px; padding: clamp(24px,3vw,40px); box-shadow: 0 20px 50px rgba(0,0,0,0.07); }

/* ============ FOOTER ============ */
.rw-footer { background: var(--ink); color: var(--cream); padding: 60px 6vw 30px; }
.rw-footer-top { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 30px; padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.rw-logo-footer { color: var(--cream); }
.rw-footer-tagline { font-family: var(--font-mono); font-size: 12px; color: #a9a99a; margin-top: 10px; letter-spacing: 0.06em; }
.rw-footer-links { display: flex; flex-direction: column; gap: 10px; }
.rw-footer-links button { color: #cfcfc0; font-size: 14px; text-align: left; transition: color 200ms; }
.rw-footer-links button:hover { color: var(--yellow); }
.rw-footer-social { display: flex; gap: 14px; align-items: flex-start; }
.rw-footer-social a { color: #cfcfc0; transition: color 200ms, transform 200ms; }
.rw-footer-social a:hover { color: var(--yellow); transform: translateY(-3px); }
.rw-footer-eq { display: flex; align-items: flex-end; gap: 3px; height: 26px; margin: 30px 0 20px; }
.rw-footer-eq span { width: 3px; flex: 1; max-width: 4px; background: var(--cyan); border-radius: 2px; animation: rwFooterEq 1.2s ease-in-out infinite; }
@keyframes rwFooterEq { 0%,100% { height: 20%; } 50% { height: 100%; } }
.rw-footer-copy { font-size: 12px; color: #7a7a6c; text-align: center; }

/* ============ RESPONSIVE ============ */
@media (max-width: 1080px) {
  .rw-shows-grid, .rw-hosts-grid { grid-template-columns: repeat(2, 1fr); }
  .rw-recent-grid { grid-template-columns: repeat(2, 1fr); }
  .rw-player-inner { grid-template-columns: 1fr; justify-items: center; text-align: center; }
  .rw-player-info { text-align: center; }
  .rw-controls { justify-content: center; }
  .rw-volume { margin-left: 0; }
  .rw-progress-labels { max-width: 320px; margin: 8px auto 0; }
  .rw-contact-grid { grid-template-columns: 1fr; }
}
@media (max-width: 760px) {
  .rw-nav-links { display: none; }
  .rw-onair { display: none; }
  .rw-hamburger { display: flex; }
  .rw-hero { padding-top: 20px; }
  .rw-shows-grid, .rw-hosts-grid, .rw-recent-grid { grid-template-columns: 1fr 1fr; }
  .rw-field-row { grid-template-columns: 1fr; }
  .rw-schedule-scroll { grid-auto-flow: column; grid-template-columns: unset; grid-auto-columns: 62vw; }
  .rw-section { padding: 80px 6vw; }
  .rw-hero-ctas { flex-direction: column; align-items: stretch; }
}
@media (max-width: 480px) {
  .rw-recent-grid, .rw-shows-grid, .rw-hosts-grid { grid-template-columns: 1fr; }
  .rw-viz { width: 220px; height: 220px; }
  .rw-disk { width: 130px; height: 130px; }
}

@media (prefers-reduced-motion: reduce) {
  .rw-app * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
}
`;
