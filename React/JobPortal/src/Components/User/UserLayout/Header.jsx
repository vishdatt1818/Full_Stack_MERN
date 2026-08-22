import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      {/* START PRELOADER */}
      {/* <div className="preloaders">
        <span className="loader" />
      </div> */}
      {/* END PRELOADER */}

      {/* START NAVBAR */}
      <div id="navigation" className="navbar-light bg-faded site-navigation">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* LOGO COLUMN */}
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="site-logo">
                <Link to="/">
                  <img src="assets/img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>

            {/* NAVIGATION MENU COLUMN */}
            <div className="col-xl-7 col-lg-9 d-flex justify-content-center">
              <nav id="main-menu">
                <ul>
                  <li className="">
                    <Link to="/">Home</Link>
                   
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  
                  
                  
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/news">News</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* BUTTONS COLUMN (FIXED & ALIGNED) */}
            <div className="col-xl-3 d-none d-xl-flex justify-content-end align-items-center gap-3">
              <Link to="/login" className="header-btn">
                Sign In
              </Link>
              <Link to="/signup" className="btn_one">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END NAVBAR */}
    </>
  )
}

export default Header