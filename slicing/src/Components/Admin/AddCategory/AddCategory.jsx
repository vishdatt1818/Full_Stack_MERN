import { log } from 'firebase/firestore/pipelines'
import React, { useState } from 'react'
import CategoryService from '../../../Services/CategoryService';
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import CloudinaryService from '../../../Services/CloudinaryService';

 const AddCategory = () => {

    const [CategoryName, setCategoryName] = useState("")
const [Description , setDescription] = useState("")
const [image , setImage] = useState("")



const nav = useNavigate()

async function addcategory(e){
    e.preventDefault()

    let imageUrl = ""


    if(image){
      imageUrl = await CloudinaryService.upload(image)
}

    try{ let payload = {
        CategoryName: CategoryName,
        Description: Description,
        image: imageUrl
       
    }
    
    CategoryService.add(payload)
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
              <h2>Add Barber</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Add Barber</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}


      {/* Contact Start */}
  
  <div className="contact" style={{ marginBottom: 10,marginTop: 10 }}>
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4" />
          <div className="col-md-8">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" onSubmit={addcategory} id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Category Name"
                      onChange={(e) => { setCategoryName( e.target.value)}}
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
                    placeholder="Description"
                      onChange={(e) => { setDescription( e.target.value)}}
                    required="required"
                    data-validation-required-message="Please enter your speciality"
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
                    Add Category
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

export default AddCategory
