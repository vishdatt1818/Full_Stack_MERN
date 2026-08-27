/* ==========================================================================
   RADIOWAVE — script.js
   Modular vanilla JS. All state lives inside the RadioApp namespace so this
   file has no stray globals and each concern (player, requests, schedule,
   counters...) can later be lifted into its own React component/hook.
   ========================================================================== */

const RadioApp = {

  /* ------------------------------------------------------------------ */
  /* DATA — kept separate from UI so it can become React state later.   */
  /* ------------------------------------------------------------------ */
  config: {
    radioStreamUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    storageKey: "radiowave_song_requests",
  },

  songs: [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      image: "images/song-1.jpg",
      requests: 482,
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      image: "images/song-2.jpg",
      requests: 361,
    },
    {
      id: 3,
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      image: "images/song-3.jpg",
      requests: 298,
    },
    {
      id: 4,
      title: "Stay",
      artist: "Kid LAROI & Justin Bieber",
      album: "F*CK LOVE 3",
      image: "images/song-4.jpg",
      requests: 254,
    },
  ],

  djs: [
    {
      id: 1,
      name: "DJ Alex",
      show: "Morning Vibes",
      description: "Starting your morning with the best music.",
      image: "images/dj-1.jpg",
    },
    {
      id: 2,
      name: "DJ Sarah",
      show: "Top Hits",
      description: "The biggest chart-toppers, back to back.",
      image: "images/dj-2.jpg",
    },
    {
      id: 3,
      name: "DJ Mike",
      show: "Afternoon Mix",
      description: "A laid-back mix to carry you through the day.",
      image: "images/dj-3.jpg",
    },
    {
      id: 4,
      name: "DJ Nova",
      show: "Night Beats",
      description: "Deep cuts and late-night electronic grooves.",
      image: "images/dj-4.jpg",
    },
  ],

  schedule: [
    { id: 1, time: "08:00", label: "08:00 AM", show: "Morning Vibes", dj: "DJ Alex" },
    { id: 2, time: "11:00", label: "11:00 AM", show: "Top Hits", dj: "DJ Sarah" },
    { id: 3, time: "14:00", label: "02:00 PM", show: "Afternoon Mix", dj: "DJ Mike" },
    { id: 4, time: "17:00", label: "05:00 PM", show: "Drive Time", dj: "DJ Alex" },
    { id: 5, time: "20:00", label: "08:00 PM", show: "Night Beats", dj: "DJ Nova" },
  ],

  nowPlaying: {
    dj: "DJ Alex",
    listeners: 1248,
  },

  /* Runtime state (not persisted) */
  state: {
    currentSongIndex: 0,
    isPlaying: false,
  },

  /* ------------------------------------------------------------------ */
  /* INIT                                                                */
  /* ------------------------------------------------------------------ */
  init() {
    this.initNavigation();
    this.initRadioPlayer();
    this.initSongCards();
    this.initDJs();
    this.initSchedule();
    this.initSongRequests();
    this.initContactForm();
    this.initCounters();
    this.initAnimations();
  },

  /* ------------------------------------------------------------------ */
  /* UTIL                                                                */
  /* ------------------------------------------------------------------ */
  utils: {
    qs(selector, scope) {
      return (scope || document).querySelector(selector);
    },
    qsa(selector, scope) {
      return Array.from((scope || document).querySelectorAll(selector));
    },
    formatNumber(num) {
      return num.toLocaleString("en-US");
    },
    timeAgo(timestamp) {
      const seconds = Math.floor((Date.now() - timestamp) / 1000);
      if (seconds < 60) return "Just now";
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
      const days = Math.floor(hours / 24);
      return `${days} day${days === 1 ? "" : "s"} ago`;
    },
    getInitials(name) {
      return name
        .split(" ")
        .map((part) => part.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase();
    },
    escapeHtml(str) {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    },
  },

  /* ------------------------------------------------------------------ */
  /* NAVIGATION                                                          */
  /* ------------------------------------------------------------------ */
  initNavigation() {
    const { qs, qsa } = this.utils;
    const navbar = qs("#main-navbar");
    const navLinks = qsa("[data-nav-link]");
    const collapseEl = qs("#radioNavCollapse");

    // Sticky navbar background on scroll
    // const onScroll = () => {
    //   if (window.scrollY > 24) {
    //     navbar.classList.add("is-scrolled");
    //   } else {
    //     navbar.classList.remove("is-scrolled");
    //   }
    // };
    // window.addEventListener("scroll", onScroll, { passive: true });
    // onScroll();

    // Smooth-scroll + close mobile menu on nav click
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return;
        const target = qs(href);
        if (!target) return;

        event.preventDefault();

        const collapseInstance =
          window.bootstrap && collapseEl && collapseEl.classList.contains("show")
            ? window.bootstrap.Collapse.getOrCreateInstance(collapseEl)
            : null;
        if (collapseInstance) collapseInstance.hide();

        const top = target.getBoundingClientRect().top + window.scrollY - 76 + 1;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });

    // Highlight active section link with IntersectionObserver
    const sections = qsa("main section[id]");
    if ("IntersectionObserver" in window && sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
              const isMatch = link.getAttribute("href") === `#${entry.target.id}`;
              link.classList.toggle("is-active", isMatch && link.closest(".radio-navbar__links") !== null);
            });
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      sections.forEach((section) => observer.observe(section));
    }

    // "Listen Live" scroll-to-player buttons
    qsa('[data-action="scroll-to-player"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        const player = qs("#radio-player");
        if (!player) return;
        const top = player.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
        this.play();
      });
    });
  },

  /* ------------------------------------------------------------------ */
  /* RADIO PLAYER                                                        */
  /* ------------------------------------------------------------------ */
  initRadioPlayer() {
    const { qs } = this.utils;
    const player = qs("#radio-player");
    const audio = qs("#radio-audio-element");
    const toggleBtn = qs('[data-action="toggle-play"]');
    const prevBtn = qs('[data-action="prev"]');
    const nextBtn = qs('[data-action="next"]');
    const volumeSlider = qs('[data-action="volume"]');

    if (!player || !audio) return;

    this.dom = this.dom || {};
    this.dom.player = player;
    this.dom.audio = audio;

    audio.src = this.config.radioStreamUrl;
    audio.volume = 0.7;

    this.renderNowPlaying();

    toggleBtn.addEventListener("click", () => {
      this.state.isPlaying ? this.pause() : this.play();
    });

    prevBtn.addEventListener("click", () => this.changeSong(-1));
    nextBtn.addEventListener("click", () => this.changeSong(1));

    volumeSlider.addEventListener("input", (event) => {
      audio.volume = Number(event.target.value) / 100;
    });

    audio.addEventListener("waiting", () => player.classList.add("is-buffering"));
    audio.addEventListener("playing", () => player.classList.remove("is-buffering"));
  },

  play() {
    const { qs } = this.utils;
    const audio = this.dom && this.dom.audio;
    if (!audio) return;

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        /* Autoplay/network restrictions in demo environments are expected;
           the visual player still reflects the "playing" state. */
      });
    }

    this.state.isPlaying = true;
    this.dom.player.classList.add("is-playing");
    const icon = qs('[data-field="play-icon"]');
    const toggleBtn = qs('[data-action="toggle-play"]');
    if (icon) {
      icon.classList.remove("bi-play-fill");
      icon.classList.add("bi-pause-fill");
    }
    if (toggleBtn) toggleBtn.setAttribute("aria-label", "Pause");
  },

  pause() {
    const { qs } = this.utils;
    const audio = this.dom && this.dom.audio;
    if (!audio) return;

    audio.pause();
    this.state.isPlaying = false;
    this.dom.player.classList.remove("is-playing");
    const icon = qs('[data-field="play-icon"]');
    const toggleBtn = qs('[data-action="toggle-play"]');
    if (icon) {
      icon.classList.remove("bi-pause-fill");
      icon.classList.add("bi-play-fill");
    }
    if (toggleBtn) toggleBtn.setAttribute("aria-label", "Play");
  },

  changeSong(direction) {
    const total = this.songs.length;
    this.state.currentSongIndex = (this.state.currentSongIndex + direction + total) % total;
    this.renderNowPlaying();
  },

  /** Sets the active song by array index and syncs every "now playing" field
   *  across the player, the Now Playing section, and any data-field targets. */
  setCurrentSong(index) {
    if (index < 0 || index >= this.songs.length) return;
    this.state.currentSongIndex = index;
    this.renderNowPlaying();
    this.play();
  },

  renderNowPlaying() {
    const { qsa } = this.utils;
    const song = this.songs[this.state.currentSongIndex];
    if (!song) return;

    qsa('[data-field="title"]').forEach((el) => (el.textContent = song.title));
    qsa('[data-field="artist"]').forEach((el) => (el.textContent = song.artist));
    qsa('[data-field="album"]').forEach((el) => (el.textContent = song.album));
    qsa('[data-field="dj"]').forEach((el) => (el.textContent = this.nowPlaying.dj));
    qsa('[data-field="listeners"]').forEach(
      (el) => (el.textContent = this.utils.formatNumber(this.nowPlaying.listeners))
    );
    qsa('[data-field="art"]').forEach((el) => {
      el.src = song.image;
      el.alt = `Album artwork for ${song.title} by ${song.artist}`;
    });

    if (this.dom && this.dom.audio) {
      this.dom.audio.src = this.config.radioStreamUrl;
    }
  },

  /* ------------------------------------------------------------------ */
  /* SONG CARDS (Trending)                                               */
  /* ------------------------------------------------------------------ */
  initSongCards() {
    const { qs, qsa, formatNumber, escapeHtml } = this.utils;
    const grid = qs("#song-cards-grid");
    if (!grid) return;

    grid.innerHTML = this.songs
      .map(
        (song) => `
      <div class="col-6 col-md-4 col-xl-3 reveal-on-scroll">
        <article class="song-card">
          <div class="song-card__art-wrap">
            <img src="${song.image}" alt="Album artwork for ${escapeHtml(song.title)} by ${escapeHtml(song.artist)}" class="song-card__art" loading="lazy">
            <button type="button" class="song-card__play-btn" data-action="play-song" data-song-id="${song.id}" aria-label="Play ${escapeHtml(song.title)} by ${escapeHtml(song.artist)}">
              <i class="bi bi-play-fill" aria-hidden="true"></i>
            </button>
          </div>
          <p class="song-card__title">${escapeHtml(song.title)}</p>
          <p class="song-card__artist">${escapeHtml(song.artist)}</p>
          <div class="song-card__footer">
            <span class="song-card__badge">Trending</span>
            <span class="song-card__requests"><i class="bi bi-arrow-repeat" aria-hidden="true"></i>${formatNumber(song.requests)}</span>
          </div>
        </article>
      </div>`
      )
      .join("");

    qsa('[data-action="play-song"]', grid).forEach((btn) => {
      btn.addEventListener("click", () => {
        const songId = Number(btn.dataset.songId);
        const index = this.songs.findIndex((song) => song.id === songId);
        if (index > -1) this.setCurrentSong(index);
      });
    });
  },

  /* ------------------------------------------------------------------ */
  /* DJs                                                                 */
  /* ------------------------------------------------------------------ */
  initDJs() {
    const { qs, escapeHtml } = this.utils;
    const grid = qs("#dj-cards-grid");
    if (!grid) return;

    grid.innerHTML = this.djs
      .map(
        (dj) => `
      <div class="col-6 col-lg-3 reveal-on-scroll">
        <article class="dj-card">
          <div class="dj-card__photo-wrap">
            <img src="${dj.image}" alt="Portrait of ${escapeHtml(dj.name)}" class="dj-card__photo" loading="lazy">
          </div>
          <div class="dj-card__body">
            <h3 class="dj-card__name">${escapeHtml(dj.name)}</h3>
            <p class="dj-card__show">${escapeHtml(dj.show)}</p>
            <p class="dj-card__desc">${escapeHtml(dj.description)}</p>
            <div class="dj-card__socials">
              <a href="#" class="social-icon" aria-label="${escapeHtml(dj.name)} on Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
              <a href="#" class="social-icon" aria-label="${escapeHtml(dj.name)} on X"><i class="bi bi-twitter-x" aria-hidden="true"></i></a>
            </div>
          </div>
        </article>
      </div>`
      )
      .join("");
  },

  /* ------------------------------------------------------------------ */
  /* SCHEDULE                                                            */
  /* ------------------------------------------------------------------ */
  initSchedule() {
    const { qs, escapeHtml } = this.utils;
    const list = qs("#schedule-list");
    if (!list) return;

    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    const withMinutes = this.schedule.map((item) => {
      const [h, m] = item.time.split(":").map(Number);
      return { ...item, minutes: h * 60 + m };
    });

    // Current show = last show whose start time has passed.
    let currentId = null;
    withMinutes.forEach((item) => {
      if (item.minutes <= nowMinutes) currentId = item.id;
    });

    list.innerHTML = withMinutes
      .map((item) => {
        const isLive = item.id === currentId;
        return `
      <li class="schedule-item${isLive ? " is-live-now" : ""} reveal-on-scroll" data-schedule-id="${item.id}">
        <span class="schedule-item__time">${item.label}</span>
        <span class="schedule-item__info">
          <p class="schedule-item__show">${escapeHtml(item.show)}</p>
          <p class="schedule-item__dj">${escapeHtml(item.dj)}</p>
        </span>
        ${isLive ? '<span class="schedule-item__live-tag"><span class="live-pill__dot" aria-hidden="true"></span>LIVE NOW</span>' : ""}
      </li>`;
      })
      .join("");
  },

  /* ------------------------------------------------------------------ */
  /* SONG REQUESTS                                                       */
  /* ------------------------------------------------------------------ */
  initSongRequests() {
    const { qs } = this.utils;
    const form = qs("#song-request-form");
    if (!form) return;

    this.renderRecentRequests();

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fields = {
        name: form.querySelector("#request-name"),
        email: form.querySelector("#request-email"),
        song: form.querySelector("#request-song"),
        artist: form.querySelector("#request-artist"),
        type: form.querySelector("#request-type"),
        message: form.querySelector("#request-message"),
      };

      if (!this.validateForm(fields)) return;

      const request = {
        id: Date.now(),
        name: fields.name.value.trim(),
        email: fields.email.value.trim(),
        song: fields.song.value.trim(),
        artist: fields.artist.value.trim(),
        type: fields.type.value,
        message: fields.message.value.trim(),
        status: "Pending",
        createdAt: Date.now(),
      };

      this.saveRequest(request);
      this.renderRecentRequests();
      this.showToast(`Request sent — "${request.song}" is with the DJ!`);
      form.reset();
      Object.values(fields).forEach((field) => field.classList.remove("is-invalid"));
    });
  },

  validateForm(fields) {
    let isValid = true;

    Object.entries(fields).forEach(([key, field]) => {
      if (!field || key === "message") return;
      let fieldValid = field.value.trim().length > 0;
      if (key === "email" && fieldValid) {
        fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      }
      field.classList.toggle("is-invalid", !fieldValid);
      if (!fieldValid) isValid = false;
    });

    return isValid;
  },

  getRequests() {
    try {
      const raw = localStorage.getItem(this.config.storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  },

  saveRequest(request) {
    try {
      const requests = this.getRequests();
      requests.unshift(request);
      localStorage.setItem(this.config.storageKey, JSON.stringify(requests.slice(0, 50)));
    } catch (error) {
      /* localStorage may be unavailable (e.g. private browsing) — fail silently. */
    }
  },

  renderRecentRequests() {
    const { qs, escapeHtml, timeAgo, getInitials } = this.utils;
    const list = qs("#recent-requests-list");
    const emptyState = qs("#recent-requests-empty");
    if (!list) return;

    const requests = this.getRequests();

    if (!requests.length) {
      list.innerHTML = "";
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;

    list.innerHTML = requests
      .slice(0, 8)
      .map(
        (request) => `
      <li class="request-item">
        <span class="request-item__avatar" aria-hidden="true">${escapeHtml(getInitials(request.name || "?"))}</span>
        <span class="request-item__body">
          <p class="request-item__name">${escapeHtml(request.name)}</p>
          <p class="request-item__song">${escapeHtml(request.song)} — ${escapeHtml(request.artist)}</p>
          <span class="request-item__meta">
            <span class="request-item__time">Requested ${timeAgo(request.createdAt)}</span>
            <span class="request-item__status">${escapeHtml(request.status)}</span>
          </span>
        </span>
      </li>`
      )
      .join("");
  },

  /* ------------------------------------------------------------------ */
  /* CONTACT FORM                                                        */
  /* ------------------------------------------------------------------ */
  initContactForm() {
    const { qs } = this.utils;
    const form = qs("#contact-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fields = {
        name: form.querySelector("#contact-name"),
        email: form.querySelector("#contact-email"),
        message: form.querySelector("#contact-message"),
      };

      let isValid = true;
      Object.entries(fields).forEach(([key, field]) => {
        let fieldValid = field.value.trim().length > 0;
        if (key === "email" && fieldValid) {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        }
        field.classList.toggle("is-invalid", !fieldValid);
        if (!fieldValid) isValid = false;
      });

      if (!isValid) return;

      this.showToast("Message sent — we'll get back to you soon!");
      form.reset();
      Object.values(fields).forEach((field) => field.classList.remove("is-invalid"));
    });
  },

  /* ------------------------------------------------------------------ */
  /* STATISTICS COUNTERS                                                 */
  /* ------------------------------------------------------------------ */
  initCounters() {
    const { qsa } = this.utils;
    const counters = qsa("[data-counter]");
    if (!counters.length) return;

    const animateCounter = (el) => {
      const target = Number(el.dataset.target || 0);
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.5 }
      );
      counters.forEach((counter) => observer.observe(counter));
    } else {
      counters.forEach(animateCounter);
    }
  },

  /* ------------------------------------------------------------------ */
  /* SCROLL REVEAL ANIMATIONS                                            */
  /* ------------------------------------------------------------------ */
  initAnimations() {
    const { qsa } = this.utils;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Elements rendered at init time (static markup)
    qsa(
      ".section-heading, .now-playing-card, .song-request-card, .recent-requests, .contact-info, .contact-form-card, .stat-card"
    ).forEach((el) => el.classList.add("reveal-on-scroll"));

    if (!("IntersectionObserver" in window)) {
      qsa(".reveal-on-scroll").forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    // Re-query so dynamically injected cards (songs/DJs/schedule) are covered too.
    qsa(".reveal-on-scroll").forEach((el) => observer.observe(el));
  },

  /* ------------------------------------------------------------------ */
  /* TOAST                                                               */
  /* ------------------------------------------------------------------ */
  showToast(message, isError) {
    const { qs } = this.utils;
    const toastEl = qs("#app-toast");
    if (!toastEl) return;

    const messageField = qs('[data-field="toast-message"]', toastEl);
    const iconField = qs('[data-field="toast-icon"]', toastEl);
    if (messageField) messageField.textContent = message;

    toastEl.classList.toggle("radio-toast--error", Boolean(isError));
    if (iconField) {
      iconField.className = isError ? "bi bi-exclamation-circle-fill" : "bi bi-check-circle-fill";
      iconField.setAttribute("data-field", "toast-icon");
    }

    if (window.bootstrap && window.bootstrap.Toast) {
      const toast = window.bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 3200 });
      toast.show();
    } else {
      toastEl.classList.add("show");
      window.setTimeout(() => toastEl.classList.remove("show"), 3200);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  RadioApp.init();
});
