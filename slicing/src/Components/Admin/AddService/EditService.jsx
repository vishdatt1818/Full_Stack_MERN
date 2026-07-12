import { log } from 'firebase/firestore/pipelines'
import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'
import { useNavigate, useParams } from "react-router-dom";

import   ServiceOfBarber from "../../../Services/ServiceOfBarber"

const EditService = () => {

      const [serviceName, setServiceName] = useState("")
  const [price , setPrice] = useState("")
  const [duration , setDuration] = useState("")
  const nav = useNavigate()

  const params = useParams()

   async function getServiceDetails() {
          let res = await ServiceOfBarber.single(params.id)
          if(res){
              setServiceName(res.serviceName)
              setPrice(res.price)
              setDuration(res.duration)
          
          }else{
               toast.error("No such Document")
          }
      }
  
      useEffect(()=>{
          getServiceDetails()
      }, [])
  
  function editservice(e){
      e.preventDefault()
  
      try{ let payload = {
          serviceName : serviceName,
          price : price,
          duration : duration
        
      }
    
     ServiceOfBarber.update(payload, params.id)
       nav(-1)
       console.log(payload);
       toast.success("Item Edit Successfully")
  
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
    <h2>Edit Service</h2>
  </div>
  <div className="contact" style={{ marginBottom: 90 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" onSubmit={editservice} id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Service Name"
                    onChange={(e) => { setServiceName( e.target.value)}}
                    value={serviceName}
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
                       value={price}
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
                    value={duration}
                       onChange={(e) => { setDuration( e.target.value)}}
                    placeholder="Duration(min)"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    Edit Service
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

export default EditService
