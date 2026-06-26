import {Link} from "react-router-dom"

export default function Header() {
  return (

      <>
        {/* Top Bar Start */}
        <div className="top-bar d-none d-md-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="top-bar-left">
                  <div className="text">
                    <h2>8:00 - 9:00</h2>
                    <p>Opening Hour Mon - Fri</p>
                  </div>
                  <div className="text">
                    <h2>+123 456 7890</h2>
                    <p>Call Us For Appointment</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="top-bar-right">
                  <div className="social">
                    <a href="">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top Bar End */}
        {/* Nav Bar Start */}
        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a href="index.html" className="navbar-brand">
              Barber <span>X</span>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/services" className="nav-item nav-link">
                  Service
                </Link>
                <Link to="/price" className="nav-item nav-link">
                  Price
                </Link>
                <Link to="/team" className="nav-item nav-link">
                  Barber
                </Link>
                <Link to="/portfolio" className="nav-item nav-link">
                  Gallery
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <Link to="/blog" className="dropdown-item">
                      Blog Page
                    </Link>
                    <Link to="/single" className="dropdown-item">
                      Single Page
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Nav Bar End */}
      </>
  );
}
