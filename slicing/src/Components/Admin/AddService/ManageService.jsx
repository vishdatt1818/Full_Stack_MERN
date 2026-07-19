import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarberServices from "../../../Services/BarberService";
import ServiceOfBarber from "../../../Services/ServiceOfBarber";
import axios from 'axios'
import { ScaleLoader } from "react-spinners";
import CategoryService from "../../../Services/CategoryService";

import Swal from "sweetalert2";

const ManageService = () => {
  
 const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
   let [loading, setLoading] = useState(false);
      const [addCategory , setAddCategory] = useState([])
      
          async function AddCategory(){
              let res = await CategoryService.all()
              setAddCategory(res)
              console.log( res);
              
          }
      
           useEffect(() => {
        
               AddCategory()
        }, []);


    const [barberService , setBarberService] = useState([])

    async function AddServiceOfBarber(){

      try{

         setLoading(true)

        let res = await ServiceOfBarber.all()
        setBarberService(res)
        // console.log( setBarberService(res));
      } catch (err){
        console.log(err);
        
      }
        finally{
          setLoading(false)
        }
    }

     useEffect(() => {
  
         AddServiceOfBarber()
  }, []);



   async function deleteService(id) {

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
         await ServiceOfBarber.deleteSer(id)
          AddServiceOfBarber()
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
              <h2>Add Services</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Add Services</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <div className="container-fluid">


      <div className="container mt-5 d-flex justify-content-between">
        <h1>Service List </h1>
        <Link to="/admin/service">
          <button className="btn newbtn" type="submit" id="sendMessageButton">
            Add Service
          </button>
        </Link>
      </div>

     
        

     
        {/* Service Page Start */}
        <div className="container-fluid">
          <div className="container d-flex justify-content-center py-5">
              { loading ?

                <ScaleLoader

                color="orange"
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />

              :
            <div className="table-responsive">

              
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Cagegory</th>
                    <th scope="col">ServiceName</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {barberService.map((service, index) => (
                    < tr  >
                      <td>
                        <p className="mb-0 mt-1">{index + 1}</p>
                      </td>
                      <td>
                        
                          <p>
                         {addCategory.find((item) => item.id === service.category)?.CategoryName || "Unknown Category"}
                          </p>
                        
                        {/* <p className="mb-0 mt-1">{service.category}</p> */}
                      </td>
                      <td>
                        <p className="mb-0 mt-1">{service.serviceName}</p>
                      </td>
                      <td>
                        <img src={service.image} alt="" style={{height:"80px", width:"100px"}} />
                      </td>

                      <td>
                        <p className="mb-0 mt-1">{service.price}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-1">{service.duration}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-1">{service.status ? "Active" : "Inactive"}</p>
                      </td>
                      <td>
                        <p className="mb-0 mt-1">{new Date(service.createAt).toLocaleDateString()}</p>
                      </td>
                      <td>
                          <Link to={`/admin/editservice/${service.id}`}>
                        <button className="btn btn-md rounded-circle bg-light border">
                          <i className="bi bi-pencil text-danger" />
                        </button>
                        </Link>
                        &nbsp;
                        <button
                          onClick={() => {
                      deleteService(service.id);
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
            }

        </div>
      </div>
      {/* Service Page End */}
  
        </div>

    </>
  );
}
export default ManageService;
