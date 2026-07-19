import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { ScaleLoader } from "react-spinners";
import Swal from "sweetalert2";
import BookingService from "../../../Services/BookingService";
import ServiceOfBarber from "../../../Services/ServiceOfBarber";
import UserService from "../../../Services/UserService";

const ManageBooking = () => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  let [loading, setLoading] = useState(false);

  const [booking, setBooking] = useState([]);

  async function getBooings() {
    try {
      setLoading(true);

      let res = await BookingService.all();
      setBooking(res);
      console.log("booking",res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooings();
  }, []);

  async function deleteBooking(id) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await BookingService.deleteBook(id);
      getBooings();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  }

  const [barberService, setBarberService] = useState([]);

  async function AddServiceOfBarber() {
    try {
      setLoading(true);

      let res = await ServiceOfBarber.all();
      setBarberService(res);
      // console.log( setBarberService(res));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    AddServiceOfBarber();
  }, []);


  const [user, setUser] = useState([]);

  async function fetchUser() {
    try {
      setLoading(true);

      let res = await UserService.all();
      setUser(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const [dropDown , setDropDown] = useState()

  function getValue(e){
     
     setDropDown(e.target.value)

  }

   

  async function handleStatusChange(e , bookingId){

    const newStatus = e.target.value;

    let payload = {
      appointmentStatus: newStatus
    }
       await BookingService.update(payload,bookingId)

       await getBooings()
  }
// checking
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Manage Booking</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Manage Booking</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <div className="container-fluid">
        <div className="container mt-5 d-flex justify-content-between">
          <h1>Manage Bookings </h1>
        </div>

        {/* Service Page Start */}
        <div className="container-fluid">
          <div className="container d-flex justify-content-center py-5">
            {loading ? (
              <ScaleLoader
                color="orange"
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Sr. No</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Service Name</th>
                      <th scope="col">Appointment Date</th>
                      <th scope="col">Price</th>
                      <th scope="col">Time</th>
                      <th scope="col">Notes</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {booking.map((book, index) => (
                      <tr className="text-center">
                        <td>
                          <p className="mb-0 mt-1 ">{index + 1}</p>
                        </td>

                        <td>
                          {/* <p className="mb-0 mt-1">{book.customerId}</p> */}
                           <p>
                            {user.find(
                              (item) => item.id === book.customerId,
                            )?.name || "Unknown Customer"}
                          </p>
                        </td>
                        <td>
                          <p>
                            {barberService.find(
                              (item) => item.id === book.serviceId,
                            )?.serviceName || "Unknown service"}
                          </p>
                        </td>

                        <td>
                          <p className="mb-0 mt-1">{book.appointmentDate}</p>
                        </td>
                        <td>
                          <p className="mb-0 mt-1">{book.totalAmount}</p>
                        </td>
                        <td>
                          <p className="mb-0 mt-1">{book.time}</p>
                        </td>
                        <td>
                          <p className="mb-0 mt-1">{book.notes}</p>
                        </td>
                        <td>
                          <p className="mb-0 mt-1">
                            {book.status ? "Active" : "Inactive"}
                          </p>
                        </td>
                        <td>
                          <p className="mb-0 mt-1">
                            {new Date(book.createAt).toLocaleDateString()}
                          </p>
                        </td>

                        <td className="d-flex gap-2">
                          {/* <Link to={`/admin/managebooking/${book.}`}> */}
                          <select name="" id="" onChange={(e) => handleStatusChange(e , book.id)}>

                            <option value="Pending" >{book.appointmentStatus}</option>
                            <option value="On Progress" >On Progress</option>
                            <option value="Completed" >Completed</option>

                          </select>
                          {/* </Link> */}
                        
                          &nbsp;
                          <button
                            onClick={() => {
                              deleteBooking(book.id);
                            }}
                            className="btn btn-md rounded-circle bg-light border"
                          >
                            <i className="bi bi-trash text-danger" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        {/* Service Page End */}
      </div>
    </>
  );
};

export default ManageBooking;
