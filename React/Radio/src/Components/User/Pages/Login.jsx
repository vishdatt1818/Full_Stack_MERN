import React from 'react'

const Login = () => {
  return (
   <>
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
                 name="email"
                  placeholder="Enter  Your Email"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter email address'"
                  className="common-input mt-20"
                  required=""
                  type="email"
                />
                <input
                  name="email"
                  placeholder="Enter Your  Passoword"
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
              
                <button className="primary-btn d-inline-flex align-items-center mt-20">
                  <span className="mr-10">Login</span>
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

export default Login
