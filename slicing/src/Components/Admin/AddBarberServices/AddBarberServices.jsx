import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarberServices from "../../../Services/BarberService";
import ServiceOfBarber from "../../../Services/ServiceOfBarber";

import Swal from "sweetalert2";

const AddBarberServices = () => {
  const [barber, setBarber] = useState([]);

  async function getbarber() {
    let res = await BarberServices.all();
    setBarber(res);
  }

  useEffect(() => {
    getbarber();
  }, []);

  async function deleteBarber(id) {

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
         await BarberServices.deleteBar(id)
        getbarber()
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

      }
       
    }


    const [barberService , setBarberService] = useState([])

    async function AddServiceOfBarber(){
        let res = await ServiceOfBarber.all()
        setBarberService(res)
        // console.log( setBarberService(res));
        
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
              <h2>Add Barber / Services</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Add Barber / Services</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <div className="container-fluid">

      <div className="container mt-5 d-flex justify-content-between">
        <h1>Barber List</h1>
        <Link to="/admin/barberservice">
          <button className="btn newbtn" type="submit">
            Add Barber
          </button>
        </Link>
      </div>

      <div className="container mt-5 d-flex justify-content-between">
        <h1>Service List </h1>
        <Link to="/admin/service">
          <button className="btn newbtn" type="submit" id="sendMessageButton">
            Add Service
          </button>
        </Link>
      </div>

      <div className="d-flex justify-content-center">
        <table
          className="table table-bordered text-center table-hover mt-5"
          style={{ width: "80%" }}
        >
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Name</th>
              <th scope="col">speciality</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {barber.map((bar, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{bar.name}</td>
                <td>{bar.specialty} </td>
                <td>{bar.status ? "Active" : "Inactive"}</td>

                <td>{new Date(bar.createAt).toLocaleDateString()}</td>

                <td>
                  <button className="btn btn-md rounded-circle bg-light border ">
                    <i className="bi bi-pencil text-danger" />
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-md rounded-circle bg-light border "
                    onClick={() => {
                      deleteBarber(bar.id);
                    }}
                  >
                    <i className="bi bi-trash text-danger" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        

     
        {/* Service Page Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">ServiceName</th>
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
                        <p className="mb-0 mt-1">{service.serviceName}</p>
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
                        <button className="btn btn-md rounded-circle bg-light border">
                          <i className="bi bi-pencil text-danger" />
                        </button>
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

        </div>
      </div>
      {/* Service Page End */}
  
        </div>

    </>
  );
}
export default AddBarberServices;
