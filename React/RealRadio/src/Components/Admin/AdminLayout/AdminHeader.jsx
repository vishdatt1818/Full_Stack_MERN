import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
   <header>
  <nav
    className="radio-navbar navbar navbar-expand-lg fixed-top"
    id="main-navbar"
    aria-label="Primary"
  >
    <div className="container radio-navbar__inner">
      <a className="radio-navbar__brand" href="#hero-section" data-nav-link="">
        <img
          src="images/logo.png"
          alt="RadioWave logo"
          className="radio-navbar__logo"
          width={36}
          height={36}
        />
        <span className="radio-navbar__brand-text">
          RADIO<span className="radio-navbar__brand-accent">WAVE</span>
        </span>
      </a>
      <button
        className="navbar-toggler radio-navbar__toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#radioNavCollapse"
        aria-controls="radioNavCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list" aria-hidden="true" />
      </button>
      <div className="collapse navbar-collapse" id="radioNavCollapse">
        <ul className="navbar-nav radio-navbar__links mx-lg-auto">
          <li className="nav-item">
            <Link className="nav-link" href="#hero-section" data-nav-link="">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/addsong" data-nav-link="">
              Add Song
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#radio-schedule" data-nav-link="">
              Schedule
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#trending-songs" data-nav-link="">
              Songs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#dj-section" data-nav-link="">
              DJs
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#song-requests-section"
              data-nav-link=""
            >
              Requests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-section" data-nav-link="">
              Contact
            </a>
          </li>
        </ul>
        <div className="radio-navbar__actions">
          <span className="live-pill" aria-hidden="true">
            <span className="live-pill__dot" />
            LIVE
          </span>
          <button
            type="button"
            className="btn radio-btn radio-btn--primary radio-navbar__cta"
            data-action="scroll-to-player"
          >
            <i className="bi bi-broadcast" aria-hidden="true" /> Listen Live
          </button>
        </div>
      </div>
    </div>
  </nav>
</header>

  )
}

export default AdminHeader
