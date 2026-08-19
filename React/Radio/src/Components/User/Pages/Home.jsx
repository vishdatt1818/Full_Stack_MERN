import React from 'react'

const Home = () => {
  return (
    <>
  {/* Start quote Area */}
  <section className="quote-area pt-100 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 quote-left">
          <h2 className="text-right">
            <span>Music</span> gives soul to the universe,
            <br />
            wings to the <span>mind</span>, flight
            <br />
            to the <span>imagination</span>.
          </h2>
        </div>
        <div className="col-lg-6 col-sm-12 quote-right">
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* End quote Area */}
  {/* Start feature Area */}
  <section className="feature-area pb-100" id="feature">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 no-padding single-img">
          <img src="img/f1.jpg" className="image img-fluid" />
          <div className="middle">
            <h2 className="text-uppercase text-white">Concert Toronto</h2>
            <p>Need concert details</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 no-padding single-img">
          <img src="img/f2.jpg" className="image img-fluid" />
          <div className="middle">
            <h2 className="text-uppercase text-white">Concert Toronto</h2>
            <p>Need concert details</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 no-padding single-img">
          <img src="img/f3.jpg" className="image img-fluid" />
          <div className="middle">
            <h2 className="text-uppercase text-white">Concert Toronto</h2>
            <p>Need concert details</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 no-padding single-img">
          <img src="img/f4.jpg" className="image img-fluid" />
          <div className="middle2">
            <a
              href="https://www.youtube.com/watch?v=L3V7LKYPIUQ"
              className="play-btn"
            >
              <img className="vdo-icon" src="img/video-btn.png" alt="" />
            </a>
            <h2 className="text-uppercase text-white">
              Being unique is the preference
            </h2>
            <p>Youtube video will appear in popover</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 no-padding single-img">
          <img src="img/f5.jpg" className="image img-fluid" />
          <div className="middle2">
            <a
              href="https://www.youtube.com/watch?v=L3V7LKYPIUQ"
              className="play-btn"
            >
              <img className="vdo-icon" src="img/video-btn.png" alt="" />
            </a>
            <h2 className="text-uppercase text-white">
              Being unique is the preference
            </h2>
            <p>Youtube video will appear in popover</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End feature Area */}
  {/* Start service Area */}
  <section
    className="service-area pt-100 pb-100"
    data-parallax="scroll"
    data-image-src="img/service-bg.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="single-service d-flex justify-content-between align-items-top">
            <div className="icon">
              <img src="img/s1.png" alt="" />
            </div>
            <div className="desc">
              <h4 className="text-uppercase">DJ Party on the house</h4>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and the power of globalization.
              </p>
            </div>
          </div>
          <div className="single-service d-flex justify-content-between align-items-top">
            <div className="icon">
              <img src="img/s2.png" alt="" />
            </div>
            <div className="desc">
              <h4 className="text-uppercase">Concert at its best</h4>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and the power of globalization.
              </p>
            </div>
          </div>
          <div className="single-service d-flex justify-content-between align-items-top">
            <div className="icon">
              <img src="img/s3.png" alt="" />
            </div>
            <div className="desc">
              <h4 className="text-uppercase">playing Music Videos</h4>
              <p>
                Usage of the Internet is becoming more common due to rapid
                advancement of technology and the power of globalization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End service Area */}
  {/* Start member Area */}
  <section className="member-area relative pt-100 pb-100">
    <div className="overlay overlay-bg" />
    <div className="container relative">
      <div className="row justify-content-center">
        <div className="active-member-carousel">
          <div className="single-member item">
            <div className="member-info d-flex flex-row justify-content-center">
              <img
                className=""
                style={{ width: 100, height: "100%" }}
                src="img/m1.jpg"
                alt=""
              />
              <div className="details">
                <h4 className="text-white text-uppercase">Fredric Elsa</h4>
                <p>Lead Vocalist</p>
                <p>Date of Birth: 31st Dec, 1989</p>
              </div>
            </div>
            <p className="summery">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and the power of globalization. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="single-member item">
            <div className="member-info d-flex flex-row justify-content-center">
              <img
                className=""
                style={{ width: 100, height: "100%" }}
                src="img/m1.jpg"
                alt=""
              />
              <div className="details">
                <h4 className="text-white text-uppercase">Fredric Elsa</h4>
                <p>Lead Vocalist</p>
                <p>Date of Birth: 31st Dec, 1989</p>
              </div>
            </div>
            <p className="summery">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and the power of globalization. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="next-trigger">
        <span className="lnr lnr-arrow-right" />
      </div>
      <div className="prev-trigger">
        <span className="lnr lnr-arrow-left" />
      </div>
    </div>
  </section>
  {/* End member Area */}
  {/* Start About Area */}
  <section className="about-area" id="about">
    <div className="container-fluid">
      <div className="row  d-flex justify-content-start align-items-center">
        <div className="col-lg-6 col-md-12 no-padding">
          <img className="img-fluid" src="img/about-img.png" alt="" />
        </div>
        <div className="about-details col-lg-4 col-md-12">
          <h2>
            <span>Music</span> gives soul to the universe, <br />
            wings to the <span>mind</span>, flight <br />
            to the <span>imagination</span>.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* End About Area */}
  {/* Start contact Area */}
  <section className="contact-area pt-100 pb-100" id="contact">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4 title-section">
          <h2 className="text-uppercase">
            Send <br />
            Us <br />
            Message
          </h2>
          <p>We won’t send any kind of spam</p>
        </div>
        <div className="col-lg-8">
          <form
            id="myForm"
            action="mail.php"
            method="post"
            className="contact-form"
          >
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <input
                  name="fname"
                  placeholder="Enter your name"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter your name'"
                  className="common-input mt-20"
                  required=""
                  type="text"
                />
                <input
                  name="email"
                  placeholder="Enter email address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter email address'"
                  className="common-input mt-20"
                  required=""
                  type="email"
                />
                <input
                  name="phone"
                  placeholder="Enter phone number"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter phone number'"
                  className="common-input mt-20"
                  required=""
                  type="tel"
                />
              </div>
              <div className="col-lg-6">
                <textarea
                  className="common-textarea mt-20"
                  name="message"
                  placeholder="Messege"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Messege'"
                  required=""
                  defaultValue={""}
                />
                <button className="primary-btn d-inline-flex align-items-center mt-20">
                  <span className="mr-10">Send Message</span>
                  <span className="lnr lnr-arrow-right" />
                </button>{" "}
                <br />
                <div className="alert-msg" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* End contact Area */}
</>

  )
}

export default Home
