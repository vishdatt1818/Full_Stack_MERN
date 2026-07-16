import React, { useState } from 'react'

import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'
import UserService from '../../../Services/UserService'
import AuthService from '../../../Services/AuthService'




const Loign = () => {

     const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      const nav = useNavigate();


    async function submitForm(e) {
        e.preventDefault();

        let payload = {
            email: email,
            password: password
        };

        try {
            const user = await UserService.login(payload);
            toast.success("Login Success");
            
            if (user.userType == "1") {
                nav("/admin");  
            } else if (user.userType == "4") { // navigate based on your user Roles
                nav("/");
            } else {
                nav("/");
            }
            
            // const userData = await UserService.single(user.user.uid)
            // console.log(userData);

            // localStorage.setItem("userName" , userData.name)
            

        } catch (err) {
            toast.error(err.message);
        }
    }

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
              <form name="sentMessage" onSubmit={submitForm} id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
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
