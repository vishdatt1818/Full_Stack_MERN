import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const [passwordMessage, setPasswordMessage] = useState("");
  const [matchMessage, setMatchMessage] = useState("");
  const [isStrongPassword, setIsStrongPassword] = useState(false);
  const nav = useNavigate();

  // const handleForm = (event) => {
  //   event.preventDefault();

  //   if (email == "admin@gmail.com" && password == "123") {
  //     alert("form submit");

  //     nav("/counter");
  //   } else {
  //     alert("wrong credentials");
  //   }
  // };

  useEffect(() => {
    console.log("component render");
  });

  useEffect(() => {
    alert("Welcome to Student Registration");
  }, []);

  useEffect(() => {
    if(password.length === 0){
      setPasswordMessage("")
    }
    else if (password.length < 8) {
      setPasswordMessage("Minimum 8 characters");
      setIsStrongPassword(false);
    } else if (!/[A-Z]/.test(password)) {
      setPasswordMessage("Add one uppercase letter");
      setIsStrongPassword(false);
    } else if (!/[0-9]/.test(password)) {
      setPasswordMessage("Add one number");
      setIsStrongPassword(false);
    } else {
      setPasswordMessage("Strong Password");
      setIsStrongPassword(true);
    }
  }, [password]);

  useEffect(() => {
    if (password === "" || confirmPassword === "") {
      setMatchMessage("");
    } else if (password === confirmPassword) {
      setMatchMessage("Passwords Matched");
    } else {
      setMatchMessage("Passwords Do Not Match");
    }
  }, [password, confirmPassword]);

  return (
    <>
    
      <div className="container m-5">
        <form  className="w-50">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
           
          </div>
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
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <div className="mb-3">
            <label htmlFor="exampleInputccPassword1" className="form-label">
             Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputccPassword1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <p>{passwordMessage}</p>
          <p>{matchMessage}</p>


          {email.includes("@") && isStrongPassword && name !== "" && password === confirmPassword ? <button type="submit" 

           className="btn btn-primary">
            Submit
          </button> : null}
        </form>
      </div>
    </>
  );
}
