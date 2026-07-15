import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../../Services/CustomerService";

import Swal from "sweetalert2";

const Customer = () => {

    const [user, setUser] = useState([]);
    
      async function getUsers() {
        let res = await UserService.all();
        setUser(res);
      }
    
      useEffect(() => {
        getUsers();
      }, []);

    // getUsers()


       async function deleteUser(id) {
      
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
               await UserService.deleteu(id)
                getUsers()
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
              <h2>Customers</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Manage Users</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      <div className="container mt-5 d-flex justify-content-between">
        <h1>Users List</h1>
        <Link to="/admin/addcustomer">
          <button className="btn newbtn" type="submit">
            Add Users
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
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Status</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{u.userName}</td>
                <td>{u.email} </td>
                <td>{u.phoneNo} </td>
                <td>{u.status ? "Active" : "Inactive"}</td>

                <td>{new Date(u.createAt).toLocaleDateString()}</td>

                <td>
                    <Link to={`/admin/editcustomer/${u.id}`}>
                  <button className="btn btn-md rounded-circle bg-light border ">
                    <i className="bi bi-pencil text-danger" />
                  </button>
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-md rounded-circle bg-light border "
                    onClick={() => {
                      deleteUser(u.id);
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
   </>
  )
}

export default Customer
