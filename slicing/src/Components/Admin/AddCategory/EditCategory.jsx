import { log } from 'firebase/firestore/pipelines'
import React, { useEffect, useState } from 'react'
import CategoryService from '../../../Services/CategoryService';
import { toast } from 'react-toastify'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import CloudinaryService from '../../../Services/CloudinaryService';

 const EditCategory = () => {

    const [CategoryName, setCategoryName] = useState("")
const [Description , setDescription] = useState("")
const [image , setImage] = useState("")

 const params = useParams()

    

    async function getCategoryDetails() {
        let res = await CategoryService.single(params.id)
        if(res){
            setCategoryName(res.CategoryName)
            setDescription(res.Description)
        
        }else{
             toast.error("No such Document")
        }
    }

    useEffect(()=>{
        getCategoryDetails()
    }, [])




const nav = useNavigate()

async function editcategory(e){
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
    
    CategoryService.update(payload, params.id)
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
              <h2>Edit Category</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Edit Category</a>
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
              <form name="sentMessage" onSubmit={editcategory} id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Category Name"
                      onChange={(e) => { setCategoryName( e.target.value)}}
                      value={CategoryName}
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
                      value={Description}
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
                    Edit Category
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

export default EditCategory
