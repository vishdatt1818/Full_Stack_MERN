import React from 'react'

const AdminFooter = () => {
  return (
    <>
  <footer className="site-footer">
  <div className="container">
    <div className="row g-4 site-footer__top">
      <div className="col-12 col-md-5">
        <a
          href="#hero-section"
          className="radio-navbar__brand"
          data-nav-link=""
        >
          <img
            src="images/logo.png"
            alt="RadioWave logo"
            className="radio-navbar__logo"
            width={32}
            height={32}
          />
          <span className="radio-navbar__brand-text">
            RADIO<span className="radio-navbar__brand-accent">WAVE</span>
          </span>
        </a>
        <p className="site-footer__tagline">
          Your Music. Your Vibe. Your Radio.
        </p>
      </div>
      <div className="col-6 col-md-4">
        <h3 className="site-footer__heading">Explore</h3>
        <ul className="site-footer__links">
          <li>
            <a href="#hero-section" data-nav-link="">
              Home
            </a>
          </li>
          <li>
            <a href="#now-playing" data-nav-link="">
              Now Playing
            </a>
          </li>
          <li>
            <a href="#radio-schedule" data-nav-link="">
              Schedule
            </a>
          </li>
          <li>
            <a href="#trending-songs" data-nav-link="">
              Songs
            </a>
          </li>
          <li>
            <a href="#dj-section" data-nav-link="">
              DJs
            </a>
          </li>
          <li>
            <a href="#song-requests-section" data-nav-link="">
              Requests
            </a>
          </li>
          <li>
            <a href="#contact-section" data-nav-link="">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md-3">
        <h3 className="site-footer__heading">Follow</h3>
        <div className="contact-info__socials">
          <a
            href="#"
            className="social-icon"
            aria-label="RadioWave on Instagram"
          >
            <i className="bi bi-instagram" aria-hidden="true" />
          </a>
          <a href="#" className="social-icon" aria-label="RadioWave on YouTube">
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
    <div className="site-footer__bottom">
      <p>© 2026 RadioWave. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </>
  )
}

export default AdminFooter
