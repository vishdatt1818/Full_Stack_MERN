import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider';

const Login = () => {

     const { saveUserId } = useContext(AuthContext);

    const [email, setEmail] =useState("")
    const [Password, setPassword] = useState("")

     const nav=useNavigate()

     const handleForm = (e) => {
         e.preventDefault()
         
         const rand = Math.floor(1000+Math.random()*9000)
        if(email === "admin@gmail.com" && Password === "123" ){

            saveUserId(rand);

            nav("/admin")
            console.log(email);
            console.log(Password);
            localStorage.setItem("email", email)
        localStorage.setItem("password", Password)
        localStorage.setItem("id", rand)
        
        
        console.log(rand);
        
        }

        


    }

  return (
    <>
    <section
    className="contact-section "
    id="contact-section"
    aria-labelledby="contact-heading"
  >
    <div className="container ">
      <div className="section-heading d-flex justify-content-center mt-5">
        {/* <p className="eyebrow">We'd love to hear from you</p> */}
        <h2 className="section-heading__title" id="contact-heading">
          Login
        </h2>
      </div>
      <div className="d-flex justify-content-center">
       
        <div className="col-12 col-lg-7">
          <form onSubmit={handleForm} className="contact-form-card" id="contact-form" noValidate="">
            <div className="row g-3">
             
              <div className="col-12">
                <label
                  htmlFor="contact-email"
                  className="form-label radio-form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control radio-form-control"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  required=""
                  onChange={(e) => {
                        setEmail(e.target.value)}}
                />
                <div className="invalid-feedback" data-error-for="email">
                  Enter a valid email address.
                </div>
              </div>

               <div className="col-12 ">
                <label
                  htmlFor="contact-name"
                  className="form-label radio-form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control radio-form-control"
                  id="contact-name"
                  name="password"
                  autoComplete="password"
                  required=""
                   onChange={(e) => {
                        setPassword(e.target.value)}}
                />
                <div className="invalid-feedback" data-error-for="name">
                  Please tell us your password.
                </div>
              </div>
              
              <div className="col-12">
                <button
                  type="submit"
                  className="btn radio-btn radio-btn--primary radio-btn--lg w-100 w-sm-auto"
                >
                  <i className="bi bi-send-fill" aria-hidden="true" /> Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Login
