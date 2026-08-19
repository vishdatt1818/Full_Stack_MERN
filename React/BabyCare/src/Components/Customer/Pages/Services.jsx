import React from 'react'

const Services = () => {
  return (
    <>
  {/* Modal Search Start */}
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Search by keyword
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4">Services</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item text-white" aria-current="page">
            Services
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Service Start */}
  <div className="container-fluid service py-5">
    <div className="container py-5">
      <div
        className="mx-auto text-center wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: 700 }}
      >
        <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
          What We Do
        </h4>
        <h1 className="mb-5 display-3">
          Thanks To Get Started With Our School
        </h1>
      </div>
      <div className="row g-5">
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="text-center border-primary border bg-white service-item">
            <div className="service-content d-flex align-items-center justify-content-center p-4">
              <div className="service-content-inner">
                <div className="p-4">
                  <i className="fas fa-gamepad fa-6x text-primary" />
                </div>
                <a href="#" className="h4">
                  Study &amp; Game
                </a>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus, culpa qui officiis animi Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
          data-wow-delay="0.3s"
        >
          <div className="text-center border-primary border bg-white service-item">
            <div className="service-content d-flex align-items-center justify-content-center p-4">
              <div className="service-content-inner">
                <div className="p-4">
                  <i className="fas fa-sort-alpha-down fa-6x text-primary" />
                </div>
                <a href="#" className="h4">
                  A to Z Programs
                </a>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus, culpa qui officiis animi Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="text-center border-primary border bg-white service-item">
            <div className="service-content d-flex align-items-center justify-content-center p-4">
              <div className="service-content-inner">
                <div className="p-4">
                  <i className="fas fa-users fa-6x text-primary" />
                </div>
                <a href="#" className="h4">
                  Expert Teacher
                </a>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus, culpa qui officiis animi Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeIn"
          data-wow-delay="0.7s"
        >
          <div className="text-center border-primary border bg-white service-item">
            <div className="service-content d-flex align-items-center justify-content-center p-4">
              <div className="service-content-inner">
                <div className="p-4">
                  <i className="fas fa-user-nurse fa-6x text-primary" />
                </div>
                <a href="#" className="h4">
                  Mental Health
                </a>
                <p className="my-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus, culpa qui officiis animi Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
                <a
                  href="#"
                  className="btn btn-primary text-white px-4 py-2 my-2 btn-border-radius"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
</>

  )
}

export default Services
