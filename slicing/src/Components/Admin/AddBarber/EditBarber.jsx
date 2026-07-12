import React, { useEffect, useState } from 'react'
import BarberServices from "../../../Services/BarberService"
import { toast } from 'react-toastify'
import { useNavigate, useParams } from "react-router-dom";
import { log } from 'firebase/firestore/pipelines'

const EditBarber = () => {

   
       const [BarberName, setBarberName] = useState("")
   const [specialty , setSpeciality] = useState("")
   const nav = useNavigate()

    const params = useParams()

    

    async function getBarberDetails() {
        let res = await BarberServices.single(params.id)
        if(res){
            setBarberName(res.name)
            setSpeciality(res.specialty)
        
        }else{
             toast.error("No such Document")
        }
    }

    useEffect(()=>{
        getBarberDetails()
    }, [])


function editbarber(e){
    e.preventDefault()

    try{ let payload = {
        name: BarberName,
        specialty: specialty
    }
    
    BarberServices.update(payload, params.id)
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
    <h2>Edit Barber</h2>
  </div>
  <div className="contact" style={{ marginBottom: 90 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" onSubmit={editbarber}  id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Edit Name"
                    onChange={(e) => { setBarberName( e.target.value)}}
                    value={BarberName}
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
                       onChange={(e) => { setSpeciality( e.target.value)}}
                       value={specialty}
                    placeholder="Edit Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>

           
                
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    Edit Barber
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

export default EditBarber
