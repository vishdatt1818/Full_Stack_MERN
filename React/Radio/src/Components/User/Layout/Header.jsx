import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
  {/* Start Banner Area */}
  <section className="banner-area relative" id="home">
    <div className="container">
      {/* Start Header Area */}
      <header className="default-header">
        <div className="container">
          <div className="header-wrap">
            <div className="header-top d-flex justify-content-between align-items-center">
              <div className="logo">
                <a href="#home">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <div className="main-menubar d-flex align-items-center">
                <nav >
                  <Link to="/">Home</Link>
                  <Link to="#feature">Feature</Link>
                  <Link to="#about">About</Link>
                  <Link to="#contact">Contact</Link>
                  <Link to="/login">Login</Link>
                </nav>
                <div className="menu-bar">
                  <span className="lnr lnr-menu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}
      <div
        className="row fullscreen align-items-center justify-content-center"
        style={{ height: 735 }}
      >
        <div className="col-lg-10">
          <div className="banner-content text-center">
            <h1 className="text-uppercase text-white">Music is life</h1>
            <p className="text-uppercase mx-auto">Universal Truth</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Banner Area */}
</>

  )
}

export default Header
