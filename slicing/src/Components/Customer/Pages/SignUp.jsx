import React, { useState } from 'react'

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'
import UserService from '../../../Services/UserService'

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    async function userDetail(e) {

        e.preventDefault();

      let payload = {
        name : name,
        phone : phone,
        email : email,
        password : password
      }

      await UserService.register(payload)
      console.log(payload);
      

         toast.success("Registeration Successful")

    }


  return (
   <>
    {/* Page Header Start */}
  <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Sign Up</h2>
        </div>
        <div className="col-12">
          <a href="">Home</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}

  {/* Contact Start */}
  {/* <div className="section-header text-center" style={{ marginTop: 0 }}>
    <p>Login</p>
    <h2>Login to see your Account</h2>
  </div> */}
  <div className="contact" style={{ marginBottom: 10 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" onSubmit={ userDetail } id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your Name"
                    onChange={(e) => { setName( e.target.value)}}
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Enter your email"
                    onChange={(e) => { setEmail( e.target.value)}}
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your Password"
                    onChange={(e) => { setPassword( e.target.value)}}
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                 <div className="control-group">
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your Phone No."
                    onChange={(e) => { setPhone( e.target.value)}}
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                
               
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    SIGN UP
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

export default SignUp
