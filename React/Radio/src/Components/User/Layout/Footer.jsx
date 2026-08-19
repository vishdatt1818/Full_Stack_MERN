import React from 'react'

const Footer = () => {
  return (
   <>
  {/* Strat Footer Area */}
  <footer className="footer-area">
    <div className="container">
      <div className="row footer-content">
        <div className="col-lg-6 copy-right-text">
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with{" "}
          <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        </div>
        <div className="col-lg-6 footer-social">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
          <a href="#">
            <i className="fa fa-behance" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer Area */}
</>

  )
}

export default Footer
