import React, { useEffect, useState } from 'react'

const User = () => {

   const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

     const [showPassword, setShowPassword] = useState(false);

     const[mess, setMess] = useState("")

  function toggle(event){
    event.preventDefault();
console.log("hello");

    setShowPassword((change) => !change )
  }

  useEffect(() =>{
    if(email == ""){
      setEmail("")
    }
    else if(email.length < 8){
      setMess("Email length must be 8 ")
    }
    else if(!email.endsWith("@gmail.com")){
        setMess("Email is not valid")
    }else{
      setMess("Email is valid")
    }
  },[email])

  return (
    <>
     <>
    
      <div className="container m-5">
        <form  className="w-50">
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div >
          </div>
          <p className='text-primary'>{mess}</p>
          <div style={{position: "relative"}}>
          <div className="mb-3" >
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              // type="password"
              className="form-control"
              id="exampleInputPassword1"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}

               style={{
            width: "100%",
            padding: "10px 40px 10px 12px", 
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
              
              />
              <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          style={{
            position: "absolute",
            right: "10px",
            top: "40px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.2rem", 
            color: "#6c757d"     
          }}
        >
          
          <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
        </button>
            {/* <i class="bi bi-eye"></i> */}
              {/* <span>sdasdsa</span> */}
            
          </div>
          </div>
      
            
       

        <button className='btn btn-primary'>submit</button>
        {/* <button className='btn btn-primary'  onClick={toggle}>show</button> */}
        </form>
      </div>
    </>
    </>
  )
}

export default User
