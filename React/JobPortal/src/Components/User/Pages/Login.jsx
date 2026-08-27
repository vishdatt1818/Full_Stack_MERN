  import { useState } from "react"
  import { useNavigate } from "react-router-dom"
  import { CustomerLogin, setData } from "../../../services/AuthServices"
  // import { toast } from "react-toastify"
  import toast from "react-hot-toast";

  const Login = () => {

    
      const [email, setEmail] =useState("")
      const [Password, setPassword] = useState("")

      const nav=useNavigate()

      const handleForm = (e) =>{
        e.preventDefault()

        // setEmail("")
        //       setPassword("")

        let payload={
              email:email,
              password:Password
          }
          CustomerLogin(payload).then((res) =>{
            nav("/")
            console.log(res.data);
              toast.success(res.data.message)
              setData(res.data)
              
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
                    <label htmlFor="">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required="required"
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

  export default Login
