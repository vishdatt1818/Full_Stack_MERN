import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BarberServices from "../../../Services/BarberService";

const AddBarberServices = () => {
  const [barber, setBarber] = useState([]);

  async function getbarber() {
    let res = await BarberServices.all();
    setBarber(res);
  }

  useEffect(() => {
    getbarber();
  }, []);

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

      <div className="container mt-5 d-flex justify-content-between">
        <h1>Barber List</h1>
        <Link to="/admin/barberservice">
          <button
            className="btn newbtn"
            type="submit"
          >
            Add Barber
          </button>
        </Link>
      </div>

      <div className="container mt-5 d-flex justify-content-between">
        <h1>Service List </h1>
        <Link to="/admin/service">
          <button
            className="btn newbtn"
            type="submit"
            id="sendMessageButton"
          >
            Add Service
          </button>
        </Link>
      </div>

<div className="d-flex justify-content-center">
      <table className="table table-bordered text-center table-hover mt-5" style={{width:"80%"}}>
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
            <tr>
              <td>{index+1}</td>
              <td>{bar.name}</td>
              <td>{bar.specialty} </td>
              <td>{bar.status ? "Active" : "Inactive"}</td>

              <td>{new Date(bar.createAt).toLocaleDateString()}</td>

              <td>
                <button className="btn btn-md rounded-circle bg-light border ">
                  <i className="bi bi-pencil text-danger" />
                </button>
                &nbsp;
                <button className="btn btn-md rounded-circle bg-light border ">
                  <i className="bi bi-trash text-danger" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default AddBarberServices;
