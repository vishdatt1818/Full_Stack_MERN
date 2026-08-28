import React, { useEffect, useState } from "react";
import { categoryAll, categoryUpdate } from "../../../services/categoryServices";
import { BASEURL } from "../../../endpoints";
import { Link } from "react-router-dom";

import Switch from "react-switch";
import toast from "react-hot-toast";

import ResponsivePagination from 'react-responsive-pagination';

const ManageCategory = () => {
  const [data, setdata] = useState([]);
   const [TotalPages, setTotalPages] = useState(0)
     const [currentPage, setCurrentPage] = useState(1);
    const limit=10

  const fetchData = () => {
    categoryAll()
      .then((res) => {

         console.log(res.data.data.length);
            let totalLenght=res.data.data.length

            console.log("formula----->", Math.ceil(totalLenght/limit));
            setTotalPages(Math.ceil(totalLenght/limit))
            
        // console.log(res.data.data);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function ChangeStatus(id ,status){

     let data = new FormData()
        data.append("_id", id)
        data.append("status", !status)

        categoryUpdate(data).then((res) =>{
          console.log(res.data);
          fetchData();
          toast.success("Status changed")
        }).catch((err) => {
            console.log(err);
            toast.error("Status not changed")
        })
  }
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
              <h1>Manage Categories</h1>
              <ul>
                <li>
                  <a href="index.html">Manage Categories</a>
                </li>
                <li> / Manage Categories</li>
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
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.slice((currentPage-1)*limit, ((currentPage-1)*limit)+limit).map((item, index) => (
              <tr>
                <th scope="row">{(currentPage-1)*limit+index + 1}</th>
                <td>{item.name}</td>
                <td>
                
                  <img width={100} src={BASEURL + item.image} alt="" />{" "}
                </td>
                <td>
        
                  <Link
                    to={"/admin/updatecategory/" + item._id}
                    className="btn btn-success"
                  >
                    Update
                  </Link>
                </td>
                
                <td>
   

                  <Switch
                    className="react-switch"
                    onChange={() => {
                      ChangeStatus(item._id, item.status);
                    }}
                    checked={item.status}
                    aria-label="super secret label that is not visible"
                  />
                </td>
              </tr>
            ))}
            {/* <tr> */}
            
            {/* </tr> */}
          </tbody>
        </table>
        <div className="d-flex justify-content-center ">
            <div className="w-50  ">
                {/* <td colSpan={1}> */}
         <ResponsivePagination
      current={currentPage}
      total={TotalPages}
      onPageChange={setCurrentPage}
    />
                {/* </td> */}
                </div>
      </div>
      </div>
      {/* END CONTACT */}
    </>
  );
};

export default ManageCategory;
