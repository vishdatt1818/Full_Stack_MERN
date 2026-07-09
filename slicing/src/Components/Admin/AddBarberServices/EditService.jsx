import { log } from 'firebase/firestore/pipelines'
import React, { useState } from 'react'

import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

import   ServieOfbarber from "../../../Services/ServiceOfBarber"

const AddService = () => {

      const [serviceName, setServiceName] = useState("")
  const [price , setPrice] = useState("")
  const [duration , setDuration] = useState("")
  const nav = useNavigate()
  
  function addService(e){
      e.preventDefault()
  
      try{ let payload = {
          serviceName : serviceName,
          price : price,
          duration : duration
        
      }
    
      ServieOfbarber.add(payload)
      nav("/admin/barbers")
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
    <h2>Add Service</h2>
  </div>
  <div className="contact" style={{ marginBottom: 90 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" onSubmit={addService} id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Service Name"
                    onChange={(e) => { setServiceName( e.target.value)}}
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
                       onChange={(e) => { setPrice( e.target.value)}}
                    placeholder="Price"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>

                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                       onChange={(e) => { setDuration( e.target.value)}}
                    placeholder="Duration(min)"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    Add Service
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

export default AddService
