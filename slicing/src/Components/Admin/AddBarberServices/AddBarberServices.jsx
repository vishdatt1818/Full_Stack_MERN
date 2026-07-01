import React from 'react'
import { Link } from 'react-router-dom'

const AddBarberServices = () => {
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
                <Link >
                <button
                className="btn border-secondary py-3 bg-white text-primary "
                type="submit"
              >
                Add Barber
              </button>
              </Link>
          

            </div>

              <div className="container mt-5 d-flex justify-content-between">
           

                <h1>Service List </h1>
                <Link >
                <button
                className="btn border-secondary py-3 bg-white text-primary "
                type="submit" id="sendMessageButton"
              >
                Add Service
              </button>
              </Link>
          

            </div>
   </>
  )
}

export default AddBarberServices
