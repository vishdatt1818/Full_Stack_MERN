import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import "./Home.css"

const Home = () => {

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Dimmed backdrop
    zIndex: 1000, // Keeps overlay on top of standard content
  },
  content: {
    top: '80px', // Adjust this value to match your navbar's height
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translateX(-50%)', // Centers horizontally while respecting top margin
    width: '90%', // Responsive width for mobile
    maxWidth: '600px', // Restricts size on laptop screens
    maxHeight: 'calc(100vh - 100px)', // Fits within screen height below navbar
    // maxHeight: '600px', // Fits within screen height below navbar
    overflowY: 'auto', // Adds vertical scrollbar if form content overflows
    backgroundColor: '#000000',
    borderRadius: '8px',
    padding: '24px',
    border: '1px solid #333',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

// function App() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] =useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

// }

// const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const togglePlay = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };


  const playlist = [
    {
      id: 1,
      title: "Rock Music",
      artist: "The Weeknd",
      src: "/audio/alex-morgan-hype-attitude-rock-music-583246.mp3",
      art: "images/song-1.jpg",
    },
    {
      id: 2,
      title: "Lofi Music",
      artist: "Second Artist",
      src: "/audio/prettyjohn1-lofi-lofi-music_61sec-587180.mp3",
      art: "images/song-2.jpg",
    },
    {
      id: 3,
      title: "Instrumental",
      artist: "Third Artist",
      src: "/audio/alex-morgan-party-birthday-instrumental-music-583236.mp3",
      art: "images/song-3.jpg",
    },
  ];

  // 2. Track current track index, playing state, and volume
 const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const currentTrack = playlist[currentIndex];

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    setCurrentIndex(nextIndex);
    if (isPlaying) {
      setTimeout(() => audioRef.current.play(), 0);
    }
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    setCurrentIndex(prevIndex);
    if (isPlaying) {
      setTimeout(() => audioRef.current.play(), 0);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Calculate percentage filled for dynamic gradient styling
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  
  return (
  <>

  <main id="main-content">
  {/* ============ HERO ============ */}
  <section className="hero-section" id="hero-section" aria-label="Introduction">
    <div
      className="hero-section__glow hero-section__glow--one"
      aria-hidden="true"
    />
    <div
      className="hero-section__glow hero-section__glow--two"
      aria-hidden="true"
    />
    <div className="container">
      <div className="row align-items-center hero-section__row">
        {/* <div className="col-12 col-lg-6 hero-content">
          <p className="eyebrow">On air · 24 hours a day</p>
          <h1 className="hero-content__title">
            Your Music.
            <br />
            Your Vibe.
            <br />
            <span className="hero-content__title-accent">Your Radio.</span>
          </h1>
          <p className="hero-content__desc">
            Listen live, discover new music, and request the songs you want to
            hear.
          </p>
          <div className="hero-content__actions">
            <button
              type="button"
              className="btn radio-btn radio-btn--primary radio-btn--lg"
              data-action="scroll-to-player"
            >
              <i className="bi bi-play-circle-fill" aria-hidden="true" /> Listen
              Live
            </button>
            <a
              href="#song-requests-section"
              className="btn radio-btn radio-btn--ghost radio-btn--lg"
              data-nav-link=""
            >
              <i className="bi bi-music-note-list" aria-hidden="true" /> Request
              a Song
            </a>
          </div>
          <dl className="hero-content__mini-stats">
            <div className="hero-content__mini-stat">
              <dt>25K+</dt>
              <dd>Monthly listeners</dd>
            </div>
            <div className="hero-content__mini-stat">
              <dt>24/7</dt>
              <dd>Live broadcast</dd>
            </div>
            <div className="hero-content__mini-stat">
              <dt>50+</dt>
              <dd>Countries tuned in</dd>
            </div>
          </dl>
        </div> */}
        <div
        style={{
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 999, // Keeps button below modal overlay (zIndex: 1000)
    width: 'auto',
  }}
        className="container ">
             <button
             className='btn radio-btn radio-btn--primary radio-navbar__cta'
             onClick={openModal}>Request Song</button>
        </div>
        <div className="col-12  hero-player-col">
          {/* ============ RADIO PLAYER (signature element) ============ */}
          {/* <div
            className="radio-player"
            id="radio-player"
            role="region"
            aria-label="Radio player"
          >
            <div className="radio-player__top">
              <span className="live-pill live-pill--sm" aria-hidden="true">
                <span className="live-pill__dot" />
                LIVE
              </span>
              <span
                className="radio-player__listeners"
                id="player-listener-count"
                aria-label="Current listeners"
              >
                <i className="bi bi-headphones" aria-hidden="true" />
                <span data-field="listeners">1,248</span> listening
              </span>
            </div>
            <div className="radio-player__body">
              <div className="radio-player__art-wrap">
                <img
                  src="images/song-1.jpg"
                  alt=""
                  className="radio-player__art"
                  id="player-art"
                  data-field="art"
                />
                <div className="radio-player__art-ring" aria-hidden="true" />
              </div>
              <div className="radio-player__meta">
                <p
                  className="radio-player__song"
                  id="player-song-title"
                  data-field="title"
                >
                  Blinding Lights
                </p>
                <p
                  className="radio-player__artist"
                  id="player-song-artist"
                  data-field="artist"
                >
                  The Weeknd
                </p>
                <div
                  className="waveform"
                  id="player-waveform"
                  aria-hidden="true"
                >
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                  <span className="waveform__bar" />
                </div>
              </div>
            </div>
            <div className="radio-player__controls">
              <button
                type="button"
                className="radio-player__ctrl-btn"
                data-action="prev"
                aria-label="Previous song"
              >
                <i className="bi bi-skip-start-fill" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="radio-player__ctrl-btn radio-player__ctrl-btn--play"
                data-action="toggle-play"
                id="player-toggle-play"
                aria-label="Play"
              >
                <i
                  className="bi bi-play-fill"
                  aria-hidden="true"
                  data-field="play-icon"
                />
              </button>
              <button
                type="button"
                className="radio-player__ctrl-btn"
                data-action="next"
                aria-label="Next song"
              >
                <i className="bi bi-skip-end-fill" aria-hidden="true" />
              </button>
              <div className="radio-player__volume">
                <i className="bi bi-volume-up-fill" aria-hidden="true" />
                <label htmlFor="player-volume" className="visually-hidden">
                  Volume
                </label>
                <input
                  type="range"
                  className="form-range radio-player__volume-slider"
                  id="player-volume"
                  min={0}
                  max={100}
                  defaultValue={70}
                  data-action="volume"
                />
              </div>
            </div>
            <audio 
            src="C:\Users\shivd\OneDrive\Documents\GitHub\Full_Stack_MERN\React\RealRadio\public\audio\alex-morgan-hype-attitude-rock-music-583246.mp3"
            id="radio-audio-element" preload="none" />
          </div> */}

      



  <div className="radio-player" id="radio-player" role="region" aria-label="Radio player">
      <div className="radio-player__top">
        <span className="live-pill live-pill--sm" aria-hidden="true">
          <span className="live-pill__dot" />
          LIVE
        </span>
        <span className="radio-player__listeners" id="player-listener-count" aria-label="Current listeners">
          <i className="bi bi-headphones" aria-hidden="true" />
          <span data-field="listeners">1,248</span> listening
        </span>
      </div>

      <div className="radio-player__body">
        <div className="radio-player__art-wrap">
          <img
            src={currentTrack.art}
            alt={currentTrack.title}
            className="radio-player__art"
            id="player-art"
          />
          <div className="radio-player__art-ring" aria-hidden="true" />
        </div>

        <div className="radio-player__meta">
          <p className="radio-player__song" id="player-song-title">
            {currentTrack.title}
          </p>
          <p className="radio-player__artist" id="player-song-artist">
            {currentTrack.artist}
          </p>
          <div className={`waveform ${isPlaying ? "waveform--active" : ""}`} id="player-waveform" aria-hidden="true">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="waveform__bar" />
            ))}
          </div>
        </div>
      </div>

      {/* STYLISH PROGRESS BAR SECTION */}
      <div className="radio-player__progress-container">
        <div className="progress-bar-wrapper">
          <input
            type="range"
            className="stylish-progress-bar"
            min={0}
            max={duration || 0}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            style={{ "--progress-percent": `${progressPercent}%` }}
          />
        </div>
        <div className="radio-player__time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="radio-player__controls">
        <button
          type="button"
          className="radio-player__ctrl-btn"
          onClick={handlePrev}
          aria-label="Previous song"
        >
          <i className="bi bi-skip-start-fill" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="radio-player__ctrl-btn radio-player__ctrl-btn--play"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`} aria-hidden="true" />
        </button>

        <button
          type="button"
          className="radio-player__ctrl-btn"
          onClick={handleNext}
          aria-label="Next song"
        >
          <i className="bi bi-skip-end-fill" aria-hidden="true" />
        </button>

        <div className="radio-player__volume">
          <i className="bi bi-volume-up-fill" aria-hidden="true" />
          <label htmlFor="player-volume" className="visually-hidden">
            Volume
          </label>
          <input
            type="range"
            // className =" stylish-progress-bar"
            className="form-range radio-player__volume-slider stylish-progress-bar"
            id="player-volume"
            min={0}
            max={100}
            value={volume * 100}
            onChange={handleVolumeChange}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
        preload="auto"
      />
    </div>



        </div>
      </div>
    </div>
  </section>
  {/* ============ NOW PLAYING ============ */}
  <section
    className="now-playing-section"
    id="now-playing"
    aria-labelledby="now-playing-heading"
  >
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">On air right now</p>
        <h2 className="section-heading__title" id="now-playing-heading">
          Now Playing
        </h2>
      </div>
      <div className="now-playing-card">
        <div className="now-playing-card__art-wrap">
          <img
            src="images/song-1.jpg"
            alt=""
            className="now-playing-card__art"
            data-field="art"
          />
          <div className="equalizer" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="now-playing-card__info">
          <span className="live-pill live-pill--sm" aria-hidden="true">
            <span className="live-pill__dot" />
            LIVE
          </span>
          <h3 className="now-playing-card__song" data-field="title">
            Blinding Lights
          </h3>
          <p className="now-playing-card__artist" data-field="artist">
            The Weeknd
          </p>
          <p className="now-playing-card__album">
            Album: <span data-field="album">After Hours</span>
          </p>
          <dl className="now-playing-card__facts">
            <div>
              <dt>Current DJ</dt>
              <dd data-field="dj">DJ Alex</dd>
            </div>
            <div>
              <dt>Listeners</dt>
              <dd>
                <span data-field="listeners">1,248</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
  {/* ============ TRENDING SONGS ============ */}
  
  {/* ============ SONG REQUESTS + RECENT REQUESTS ============ */}
  <section
    className="requests-section"
    id="song-requests-section"
    aria-labelledby="requests-heading"
  >
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">Tell our DJ what you want to hear next</p>
        <h2 className="section-heading__title" id="requests-heading">
          Request Your Song
        </h2>
      </div>
      <div className="row g-4">
        <div className="col-12 col-lg-7">
          <form
            className="song-request-card"
            id="song-request-form"
            noValidate=""
          >
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <label
                  htmlFor="request-name"
                  className="form-label radio-form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control radio-form-control"
                  id="request-name"
                  name="name"
                  autoComplete="name"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="name">
                  Please tell us your name.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <label
                  htmlFor="request-email"
                  className="form-label radio-form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control radio-form-control"
                  id="request-email"
                  name="email"
                  autoComplete="email"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="email">
                  Enter a valid email address.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <label
                  htmlFor="request-song"
                  className="form-label radio-form-label"
                >
                  Song Name
                </label>
                <input
                  type="text"
                  className="form-control radio-form-control"
                  id="request-song"
                  name="song"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="song">
                  Enter the song name.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <label
                  htmlFor="request-artist"
                  className="form-label radio-form-label"
                >
                  Artist Name
                </label>
                <input
                  type="text"
                  className="form-control radio-form-control"
                  id="request-artist"
                  name="artist"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="artist">
                  Enter the artist name.
                </div>
              </div>
              <div className="col-12">
                <label
                  htmlFor="request-type"
                  className="form-label radio-form-label"
                >
                  Request Type
                </label>
                <select
                  className="form-select radio-form-control"
                  id="request-type"
                  name="type"
                  required=""
                >
                  <option value="" selected="" disabled="">
                    Choose an option
                  </option>
                  <option value="Play this song">Play this song</option>
                  <option value="Dedicate this song">Dedicate this song</option>
                  <option value="Shoutout">Shoutout</option>
                </select>
                <div className="invalid-feedback" data-error-for="type">
                  Please choose a request type.
                </div>
              </div>
              <div className="col-12">
                <label
                  htmlFor="request-message"
                  className="form-label radio-form-label"
                >
                  Message / Dedication
                </label>
                <textarea
                  className="form-control radio-form-control"
                  id="request-message"
                  name="message"
                  rows={3}
                  placeholder="Optional — add a shoutout or dedication"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn radio-btn radio-btn--primary radio-btn--lg w-100 w-sm-auto"
                >
                  <i className="bi bi-send-fill" aria-hidden="true" /> Send
                  Request
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-5">
          <div
            className="recent-requests"
            id="recent-requests"
            aria-labelledby="recent-requests-heading"
          >
            <h3 className="recent-requests__title" id="recent-requests-heading">
              Recent Requests
            </h3>
            <ul className="recent-requests__list" id="recent-requests-list">
              {/* Requests injected by initSongRequests() */}
            </ul>
            <div
              className="recent-requests__empty"
              id="recent-requests-empty"
              hidden=""
            >
              <i className="bi bi-music-note" aria-hidden="true" />
              <p>No song requests yet.</p>
              <p>Be the first to request a song!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============ RADIO SCHEDULE ============ */}
 
  {/* ============ DJ SECTION ============ */}

  {/* ============ STATISTICS ============ */}
  <section
    className="stats-section"
    id="statistics"
    aria-label="Listener statistics"
  >
    <div className="container">
      <div className="row g-3 g-md-4 stats-grid" id="stats-grid">
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <p
              className="stat-card__number"
              data-counter=""
              data-target={25}
              data-suffix="K+"
            >
              0
            </p>
            <p className="stat-card__label">Monthly Listeners</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <p
              className="stat-card__number"
              data-counter=""
              data-target={120}
              data-suffix="+"
            >
              0
            </p>
            <p className="stat-card__label">Songs Played Daily</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <p className="stat-card__number" data-static-value="24/7">
              24/7
            </p>
            <p className="stat-card__label">Live Radio</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="stat-card">
            <p
              className="stat-card__number"
              data-counter=""
              data-target={50}
              data-suffix="+"
            >
              0
            </p>
            <p className="stat-card__label">Countries</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============ CONTACT ============ */}
  <section
    className="contact-section"
    id="contact-section"
    aria-labelledby="contact-heading"
  >
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">We'd love to hear from you</p>
        <h2 className="section-heading__title" id="contact-heading">
          Get in Touch
        </h2>
      </div>
      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <div className="contact-info">
            <div className="contact-info__item">
              <i className="bi bi-envelope-fill" aria-hidden="true" />
              <div>
                <p className="contact-info__label">Email</p>
                <p className="contact-info__value">radio@example.com</p>
              </div>
            </div>
            <div className="contact-info__item">
              <i className="bi bi-telephone-fill" aria-hidden="true" />
              <div>
                <p className="contact-info__label">Phone</p>
                <p className="contact-info__value">+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="contact-info__socials">
              <a
                href="#"
                className="social-icon"
                aria-label="RadioWave on Instagram"
              >
                <i className="bi bi-instagram" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="RadioWave on YouTube"
              >
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="RadioWave on Facebook"
              >
                <i className="bi bi-facebook" aria-hidden="true" />
              </a>
              <a href="#" className="social-icon" aria-label="RadioWave on X">
                <i className="bi bi-twitter-x" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <form className="contact-form-card" id="contact-form" noValidate="">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <label
                  htmlFor="contact-name"
                  className="form-label radio-form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control radio-form-control"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="name">
                  Please tell us your name.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <label
                  htmlFor="contact-email"
                  className="form-label radio-form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control radio-form-control"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="email">
                  Enter a valid email address.
                </div>
              </div>
              <div className="col-12">
                <label
                  htmlFor="contact-message"
                  className="form-label radio-form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control radio-form-control"
                  id="contact-message"
                  name="message"
                  rows={4}
                  required=""
                  defaultValue={""}
                />
                <div className="invalid-feedback" data-error-for="message">
                  Please enter a message.
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn radio-btn radio-btn--primary radio-btn--lg w-100 w-sm-auto"
                >
                  <i className="bi bi-send-fill" aria-hidden="true" /> Send
                  Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
   


<div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <div>I am a modal</div> */}
     <form
            className="song-request-card"
            id="song-request-form"
            noValidate=""
            // style={{height:"800px"}}
          >
            <div  className="row g-3">
              <div className="col-12 col-sm-6">
                {/* <label
                  htmlFor="request-name"
                  className="form-label radio-form-label"
                >
                  Name
                </label> */}
                <input
                  type="text"
                  placeholder='Name'
                  className="form-control radio-form-control"
                  id="request-name"
                  name="name"
                  autoComplete="name"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="name">
                  Please tell us your name.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                {/* <label
                  htmlFor="request-email"
                  className="form-label radio-form-label"
                >
                  Email
                </label> */}
                <input
                placeholder='Email'
                  type="email"
                  className="form-control radio-form-control"
                  id="request-email"
                  name="email"
                  autoComplete="email"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="email">
                  Enter a valid email address.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                {/* <label
                  htmlFor="request-song"
                  className="form-label radio-form-label"
                >
                  Song Name
                </label> */}
                <input
                  type="text"
                  placeholder='Song Name'
                  className="form-control radio-form-control"
                  id="request-song"
                  name="song"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="song">
                  Enter the song name.
                </div>
              </div>
              <div className="col-12 col-sm-6">
                {/* <label
                  htmlFor="request-artist"
                  className="form-label radio-form-label"
                >
                  Artist Name
                </label> */}
                <input
                  type="text"
                  placeholder='    Artist Name'
                  className="form-control radio-form-control"
                  id="request-artist"
                  name="artist"
                  required=""
                />
                <div className="invalid-feedback" data-error-for="artist">
                  Enter the artist name.
                </div>
              </div>
              <div className="col-12">
                <label
                  htmlFor="request-type"
                  className="form-label radio-form-label"
                >
                  Request Type
                </label>
                <select
                  className="form-select radio-form-control"
                  id="request-type"
                  name="type"
                  required=""
                >
                  <option value="" selected="" disabled="">
                    Choose an option
                  </option>
                  <option value="Play this song">Play this song</option>
                  <option value="Dedicate this song">Dedicate this song</option>
                  <option value="Shoutout">Shoutout</option>
                </select>
                <div className="invalid-feedback" data-error-for="type">
                  Please choose a request type.
                </div>
              </div>
              <div className="col-12">
                {/* <label
                  htmlFor="request-message"
                  className="form-label radio-form-label"
                >
                  Message / Dedication
                </label> */}
                <input
                  className="form-control radio-form-control"
                  id="request-message"
                  name="message"
                  rows={3}
                  placeholder="Optional — add a shoutout or dedication"
                  defaultValue={""}
                />
              </div>
              <div className="col-12 d-flex justify-content-between">
                <button
                  type="submit"
                  className="btn radio-btn radio-btn--primary radio-btn--lg w-100 w-sm-auto"
                >
                  <i className="bi bi-send-fill" aria-hidden="true" /> Send
                  Request
                </button>
        <button className='btn radio-btn radio-btn--primary radio-btn--lg w-100 w-sm-auto ' onClick={closeModal}>close</button>

              </div>
            </div>
          </form>
      </Modal>
    </div>

  </>

  )
}

export default Home
