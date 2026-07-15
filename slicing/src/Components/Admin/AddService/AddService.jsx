import { log } from 'firebase/firestore/pipelines'
import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import CategoryService from "../../../Services/CategoryService";

import   ServieOfbarber from "../../../Services/ServiceOfBarber"
import CloudinaryService from '../../../Services/CloudinaryService';


const AddService = () => {

    const [addCategory , setAddCategory] = useState([])
    
        async function AddCategory(){
            let res = await CategoryService.all()
            setAddCategory(res)
            // console.log( setBarberService(res));
            
        }
    
         useEffect(() => {
      
             AddCategory()
      }, []);

  const [serviceName, setServiceName] = useState("")
  const [category , setCategory] = useState("")
  const [price , setPrice] = useState("")
  const [duration , setDuration] = useState("")
  const [image , setImage] = useState("")
  const nav = useNavigate()
  
  async function addService(e){
      e.preventDefault()

      let imageUrl = ""
      
      
          if(image){
            imageUrl = await CloudinaryService.upload(image)
      }
  
      try{ let payload = {
          serviceName : serviceName,
          category: category,
          price : price,
          duration : duration,
          image: imageUrl
        
      }
    
      ServieOfbarber.add(payload)
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
  {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Add Service</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Add Service</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
 
  <div className="contact" style={{ marginBottom: 10 }}>
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
                  <select 
                   
                    className="form-control w-50"
               
                       onChange={(e) => { setCategory( e.target.value)}}
                    placeholder="category"
                   value={category}
                    data-validation-required-message="Please enter your email"
               
                  >
                    <option value="" disabled>-- Select a Category --</option>
                 {addCategory.map((item) =>(

                     <option 
                    //    onChange={(e) => { setCategory( e.target.value)}}
                     value={item.id}>{item.CategoryName}</option>

                 ))}
                 </select>
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

                 <div className="control-group">
                  <input
                    type="file"
                    // className="form-control"
                    id="text"
                 
                      onChange={(e) => { setImage( e.target.files[0])}}
                   
                    data-validation-required-message="Please enter your speciality"
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
