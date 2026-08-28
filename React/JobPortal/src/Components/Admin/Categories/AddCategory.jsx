import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORYADD } from "../../../endpoints";
import { categoryAdd } from "../../../services/categoryServices";
import toast from "react-hot-toast";
// import { toast } from 'react-toastify'

const AddCategory = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);

  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    let payload = new FormData();
    payload.append("name", name);
    payload.append("category_image", img);

    categoryAdd(payload)
      .then((res) => {
        console.log(res.data);
        // toast.success(res.data.message);
        toast(res.data.message, {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        // toast.success("sdasdasdasd")
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
              <h1>Add Category</h1>
              <ul>
                <li>
                  <a href="index.html">Add Category</a>
                </li>
                <li> / Add Category</li>
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
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-8 col-sm-12 mx-auto wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-wow-offset={0}
            >
              <div className="contact">
                <form
                  className="form"
                  name="enq"
                  method="post"
                  action="contact.php"
                  onsubmit="return validation();"
                  onSubmit={handleForm}
                >
                  <div className="row">
                    <div className="form-group ">
                      <label htmlFor="">Enter Category Name</label>
                      <input
                        type="text"
                        // placeholder='Enter Category Name'
                        name="name"
                        className="form-control"
                        required="required"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="">Image</label>
                      <input
                        type="file"
                        name="subject"
                        className="form-control"
                        required="required"
                        onChange={(e) => {
                          setImg(e.target.files[0]);
                        }}
                      />
                    </div>

                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="btn_one"
                        title="Submit Your Message!"
                      >
                        Add Category
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END CONTACT */}
    </>
  );
};

export default AddCategory;
