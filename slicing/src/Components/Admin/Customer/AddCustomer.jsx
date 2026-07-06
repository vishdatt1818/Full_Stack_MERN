import React, { useState } from 'react'
import UserService from "../../../Services/UserService"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { log } from 'firebase/firestore/pipelines'

const AddCustomer = () => {

      const [userName, setUserName] = useState("")
    const [email , setEmail] = useState("")
    const [phoneNo , setPhoneNo] = useState("")
    const nav = useNavigate()

    function addcustomer(e){
        e.preventDefault()
    
        try{ let payload = {
            userName: userName,
            email: email,
            phoneNo:phoneNo
        }
        
        UserService.add(payload)
        nav(-1)
        console.log(payload);
        toast.success("Item Added Successfully")
    
    } catch(err){
        console.log("Error", err);
        toast.error("Item not added")
        
    }
    }

  return (
       <>
      {/* Contact Start */}
  <div className="section-header text-center" style={{ marginTop: 90 }}>
    <p>Admin Dashboard</p>
    <h2>Add User</h2>
  </div>
  <div className="contact" style={{ marginBottom: 90 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" onSubmit={addcustomer}  id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="User Name"
                    onChange={(e) => { setUserName( e.target.value)}}
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                       onChange={(e) => { setEmail( e.target.value)}}
                    placeholder="Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>

                <div className="control-group">
                  <input
                    type="number"
                    className="form-control"
                    id="text"
                      onChange={(e) => { setPhoneNo( e.target.value)}}
                    placeholder="Phone No."
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    Add User
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

export default AddCustomer
