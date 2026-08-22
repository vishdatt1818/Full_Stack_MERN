import React, { useEffect, useState } from 'react'
import { categoryAll } from '../../../services/categoryServices'
import { BASEURL } from '../../../endpoints'
import { Link } from 'react-router-dom'

const ManageCustomers = () => {

  const [data, setdata] = useState([])

  const fetchData = () => {
    categoryAll().then((res) => {
      console.log(res.data.data);
      setdata(res.data.data)
      
    }).catch((err) => {
      console.log(err);
      
    })
  }

   useEffect(() => {
        fetchData()
    }, [])
  return (
       <>
  {/* START SECTION TOP */}
  <section className="section-top">
    <div className="container">
      <div className="col-lg-10 offset-lg-1 text-center">
        <div
          className="section-top-title wow fadeInRight"
          data-wow-duration="1s"
          data-wow-delay="0.3s"
          data-wow-offset={0}
        >
          <h1>Manage Customers</h1>
          <ul>
            <li>
              <a href="index.html">Manage Customers</a>
            </li>
            <li> / Manage Customers</li>
          </ul>
        </div>
        {/* //.HERO-TEXT */}
      </div>
      {/*- END COL */}
    </div>
    {/*- END CONTAINER */}
  </section>
  {/* END SECTION TOP */}

  {/* CONTACT */}
 <div className="container m-5">
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    {
      data.slice(1,11).map((item, index) => (

    <tr>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td> <img width={100} src={BASEURL+ item.image} alt="" /> </td>
      <td> <Link to={"/admin/updatecategory/"+item._id} className='btn btn-success' >Update</Link> </td>
      
    </tr>
      ))
    }
   
  </tbody>
</table>

 </div>
  {/* END CONTACT */}
</>
  )
}

export default ManageCustomers
