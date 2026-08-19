import axios from 'axios'
import React, { useState } from 'react'
import { BASEURL } from '../../../endpoints'
import { CustomerAdd } from '../../../services/customerServices'

const SignUp = () => {

      const [email, setEmail] =useState("")
    const [Password, setPassword] = useState("")
    console.log(Password);
    
    const [name, setName] = useState("")

    function handleForm(e){
        console.log("hello");
        
        e.preventDefault()
        let payload = {
            name:name,
            email:email,
            password:Password
        }
        CustomerAdd(payload).then((res) =>{
            console.log(res.data);
            console.log(Password);
            
            
        }).catch((err) =>{
            console.log(err);
            
        })
    }
    

  return (
     <>
  {/* START SECTION TOP */}
  <section className="section-top">
    <div className="container">
      <div className="col-lg-10 offset-lg-1 text-center">
        <div
          className="section-top-title wow fadeInRight"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
          data-wow-offset={0}
        >
          <h1>Login</h1>
          <ul>
            <li>
              <a href="index.html">Login</a>
            </li>
            <li> / Login</li>
          </ul>
        </div>
        {/* //.HERO-TEXT */}
      </div>
      {/*- END COL */}
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END SECTION TOP */}

  {/* CONTACT */}
  <div id="contact" className="contact_area section-padding">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 col-md-8 col-sm-12 mx-auto wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
          data-wow-offset={0}
        >
          <div className="contact">
            <form
              className="form"
              name="enq"
              method="post"
              action="contact.php"
              onsubmit="return validation();"
              onSubmit={handleForm}
            >
              <div className="row">
                <div className="form-group ">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required="required"
                    onChange={(e) => {
                                setName(e.target.value)
                                                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required="required"
                    // value={email}
                     onChange={(e) => {
                                setEmail(e.target.value)
                                                    }}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="subject"
                    className="form-control"
                    required="required"
                    onChange={(e) => {
                                setPassword(e.target.value)
                                                    }}
                  />
                </div>
                {/* <div className="form-group col-md-12">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    required="required"
                  />
                </div> */}
              
                <div className="col-md-12 text-center">
                  <button
                    type="submit"
                    value="Send message"
                    name="submit"
                    id="submitButton"
                    className="btn_one"
                    title="Submit Your Message!"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
      </div>
      {/* END ROW */}
    </div>
    {/*- END CONTAINER */}
  </div>
  {/* END CONTACT */}
</>
  )
}

export default SignUp
