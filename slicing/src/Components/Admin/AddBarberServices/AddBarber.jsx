import { log } from 'firebase/firestore/pipelines'
import React, { useState } from 'react'
import BarberService from "../../../Services/BarberService"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const AddBarber = () => {

    const [BarberName, setBarberName] = useState("")
const [specialty , setSpeciality] = useState("")
const nav = useNavigate()

function addbarber(e){
    e.preventDefault()

    try{ let payload = {
        name: BarberName,
        specialty: specialty
    }
    
    BarberService.add(payload)
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
    <h2>Add Barber</h2>
  </div>
  <div className="contact" style={{ marginBottom: 90 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" onSubmit={addbarber} id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Barber Name"
                      onChange={(e) => { setBarberName( e.target.value)}}
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
                    placeholder="Speciality Tag"
                      onChange={(e) => { setSpeciality( e.target.value)}}
                    required="required"
                    data-validation-required-message="Please enter your speciality"
                  />
                  <p className="help-block text-danger" />
                </div>
                
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    Add Barber
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

export default AddBarber
