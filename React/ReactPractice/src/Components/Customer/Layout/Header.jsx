import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Form
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/formhook">
                FormHook
              </Link>
            </li>

              <li className="nav-item">
              <Link className="nav-link" to="/TicToe">
                TicToe
              </Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/count">
                Count
              </Link>
            </li>


            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;