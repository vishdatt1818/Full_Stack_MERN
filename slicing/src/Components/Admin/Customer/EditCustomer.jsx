import React, { useEffect, useState } from 'react'
import UserService from "../../../Services/CustomerService"
import { toast } from 'react-toastify'
import { useNavigate, useParams } from "react-router-dom";
import { log } from 'firebase/firestore/pipelines'

const EditCustomer = () => {

      const [userName, setUserName] = useState("")
    const [email , setEmail] = useState("")
    const [phoneNo , setPhoneNo] = useState("")
    const nav = useNavigate()

    const params = useParams()

    

    async function getUserDetails() {
        let res = await UserService.Single(params.id)
        if(res){
            setUserName(res.userName)
            setEmail(res.email)
            setPhoneNo(res.phoneNo)
        }else{
             toast.error("No such Document")
        }
    }

    useEffect(()=>{
        getUserDetails()
    }, [])

   function updateCustomer(e){
        e.preventDefault()
    
        try{ let payload = {
            userName: userName,
            email: email,
            phoneNo:phoneNo
        }
        
        UserService.update(payload, params.id)
        nav(-1)
        console.log(payload);
        toast.success("Item Updated Successfully")
    
    } catch(err){
        console.log("Error", err);
        toast.error("Item not Updated added")
        
    }
    }

  return (
       <>
      {/* Contact Start */}
  <div className="section-header text-center" style={{ marginTop: 90 }}>
    <p>Admin Dashboard</p>
    <h2>Edit User</h2>
  </div>
  <div className="contact" style={{ marginBottom: 90 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" onSubmit={updateCustomer}  id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Edit Name"
                    onChange={(e) => { setUserName( e.target.value)}}
                    value={userName}
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
                       value={email}
                    placeholder="Edit Email"
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
                      value={phoneNo}
                    placeholder="Edit Phone No."
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    Edit User
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

export default EditCustomer
