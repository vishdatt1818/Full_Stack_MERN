

export default function(){
    return(
     <>
  {/* Page Header Start */}
  <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Service</h2>
        </div>
        <div className="col-12">
          <a href="">Home</a>
          <a href="">Service</a>
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
        <h2>Best Salon and Barber Services for You</h2>
      </div>
      <div className="row">
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
      </div>
    </div>
  </div>
  {/* Service End */}
</>

    )
}