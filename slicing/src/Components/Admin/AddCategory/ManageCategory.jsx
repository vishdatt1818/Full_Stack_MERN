import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../../Services/CategoryService";

import axios from 'axios'
import { FadeLoader, PacmanLoader } from "react-spinners";

import Swal from "sweetalert2";

const ManageCategory = () => {
  


    const [addCategory , setAddCategory] = useState([])

    async function AddCategory(){
        let res = await CategoryService.all()
        setAddCategory(res)
        // console.log( setBarberService(res));
        
    }

     useEffect(() => {
  
         AddCategory()
  }, []);



   async function deleteCategory(id) {

    const result = 
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    
    
      if (result.isConfirmed){
         await CategoryService.deleteCat(id)
          AddCategory()
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

      }
       
    }

  

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Add Category</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Add Category</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <div className="container-fluid">


      <div className="container mt-5 d-flex justify-content-between">
        <h1>Category List </h1>
        <Link to="/admin/category">
          <button className="btn newbtn" type="submit" id="sendMessageButton">
            Add Category
          </button>
        </Link>
      </div>

     
        

     
        {/* Service Page Start */}
        <div className="container-fluidF">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">CategoryName</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {addCategory.map((cat, index) => (
                    < tr  >
                      <td>
                        <p className="mb-0 mt-1">{index + 1}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-1">{cat.CategoryName}</p>
                      </td>

                      <td>
                        <p className="mb-0 mt-1">{cat.Description}</p>
                      </td>
                      <td>
                        <img src={cat.Image} alt="" style={{height:"80px", width:"100px"}} />
                      </td>
                      <td>
                        <p className="mb-0 mt-1">{cat.status ? "Active" : "Inactive"}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-1">{new Date(cat.createAt).toLocaleDateString()}</p>
                      </td>
                      <td>
                           <Link to={`/admin/editcategory/${cat.id}`}>
                        <button className="btn btn-md rounded-circle bg-light border">
                          <i className="bi bi-pencil text-danger" />
                        </button>
                         </Link>
                        &nbsp;
                        <button
                          onClick={() => {
                      deleteCategory(cat.id);
                    }}
                        className="btn btn-md rounded-circle bg-light border ">
                          <i className="bi bi-trash text-danger" />
                        </button>
                      </td>
                    </tr>
                ))
                  }
              </tbody>
            </table>
          </div>

        </div>
      </div>
      {/* Service Page End */}
  
        </div>

    </>
  );
}
export default ManageCategory;
