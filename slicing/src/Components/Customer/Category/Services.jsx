import { useEffect, useState } from "react";
import ServiceOfBarber from "../../../Services/ServiceOfBarber";

export default function Services() {
  const [services, setServices] = useState([]);

  async function getServices() {
    let res = await ServiceOfBarber.all();
    setServices(res);
    console.log(res);
  }
  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Best Salon and Barber services for You</h2>
            </div>
            <div className="col-12">
              <a href="">Home</a>
              <a href="">Services</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Service Start */}
      <div className="service">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Salon Services</p>
            {/* <h2>Best Salon and Barber Services for You</h2> */}
          </div>
<div className=" container   ">
  <div className="row  d-flex justify-content-around">
          {services.map((ser) => (
            
              <div className="card my-4 text-center" style={{ width: "18rem"}}>
                <img src={ser.image} style={{height:"250px", objectFit: "cover"}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ser.serviceName}</h5>
                   <p className="card-text">Price
                   {ser.price}
                  </p>
                  <p className="card-text">
                   {ser.duration}
                  </p>
                  <a href="#" className="btn newbtn btn-primary">
                    Add Service
                  </a>
                </div>
              </div>
         
          ))}
          </div>
             </div>

          {/* <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-1.jpg" alt="Image" />
                </div>
                <h3>Hair Cut</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
                <a className="btn" href="">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-2.jpg" alt="Image" />
                </div>
                <h3>Beard Style</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
                <a className="btn" href="">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-3.jpg" alt="Image" />
                </div>
                <h3>Color &amp; Wash</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non
                </p>
                <a className="btn" href="">
                  Learn More
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Service End */}
    </>
  );
}
