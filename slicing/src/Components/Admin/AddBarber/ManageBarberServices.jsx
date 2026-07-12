import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarberServices from "../../../Services/BarberService";
import ServiceOfBarber from "../../../Services/ServiceOfBarber";
import axios from 'axios'
import { FadeLoader, PacmanLoader } from "react-spinners";

import Swal from "sweetalert2";

const AddBarberServices = () => {
  const [barber, setBarber] = useState([]);

    let [loading, setLoading] = useState(false);

  async function getbarber() {
    try{

      setLoading(true)
      let res = await BarberServices.all();
      setBarber(res);
    }
    catch (err) {
      console.log(err)
    }
     finally {
      setLoading(false)
    }
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

      <div className="container-fluid">

      <div className="container mt-5 d-flex justify-content-between">
        <h1>Barber List</h1>
        <Link to="/admin/barberservice">
          <button className="btn newbtn" type="submit">
            Add Barber
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
              <th scope="col">Image</th>
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
                <td><img src={bar.image} alt="" style={{height:"80px", width:"100px"}} /></td>
                <td>{bar.specialty} </td>
                <td>{bar.status ? "Active" : "Inactive"}</td>

                <td>{new Date(bar.createAt).toLocaleDateString()}</td>

                <td>
                  <Link to={`/admin/editbarber/${bar.id}`}>
                  <button className="btn btn-md rounded-circle bg-light border ">
                    <i className="bi bi-pencil text-danger" />
                  </button>
                  </Link>
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


        </div>

    </>
  );
}
export default AddBarberServices;
