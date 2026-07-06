import React from 'react'
import { Link } from 'react-router-dom'

const Customer = () => {
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
   </>
  )
}

export default Customer
