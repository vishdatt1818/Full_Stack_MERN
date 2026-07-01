import React from 'react'

const Loign = () => {
  return (
   <>
    {/* Page Header Start */}
  <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Login</h2>
        </div>
        <div className="col-12">
          <a href="">Home</a>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}

  {/* Contact Start */}
  <div className="section-header text-center" style={{ marginTop: 90 }}>
    <p>Login</p>
    <h2>Login to see your Account</h2>
  </div>
  <div className="contact" style={{ marginBottom: 90 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Enter your email"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="password"
                    className="form-control"
                    id="email"
                    placeholder="Enter your Password"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                
               
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
   </>
  )
}

export default Loign
