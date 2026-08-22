import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASEURL, CATEGORYADD } from "../../../endpoints";
import { categoryAdd, categorySingle, categoryUpdate } from "../../../services/categoryServices";
import toast from "react-hot-toast";
// import { toast } from 'react-toastify'

const UpdateCategory = () => {

     const {id}=useParams()
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
   const [URL, setURL] = useState("")

  const nav = useNavigate();

   useEffect(()=>{
        FetchSingleCategory()
    },[])

    const FetchSingleCategory=()=>{
        categorySingle({_id:id}).then((res)=>{
            console.log(res.data.data);
            setName(res.data.data.name)
            setURL(res.data.data.image)
            
        }).catch((err)=>{
            console.log(err);
            
        })
    }


  const handleForm = (e) => {
    e.preventDefault();

    let payload = new FormData();
    payload.append("name", name);
    payload.append("_id", id);
    if(!!img){

        payload.append("category_image", img);
    }

    categoryUpdate(payload)
      .then((res) => {
        nav(-1)
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
              <h1>Login</h1>
              <ul>
                <li>
                  <a href="index.html">Login</a>
                </li>
                <li> / Login</li>
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
                        value={name}
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
                        // required="required"
                        onChange={(e) => {
                          setImg(e.target.files[0]);
                        }}
                      />
                    </div>

                              <div className="col-lg-5 ">
            <img width={100} src={BASEURL+URL} alt="" />
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
                        Update Category
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

export default UpdateCategory;
