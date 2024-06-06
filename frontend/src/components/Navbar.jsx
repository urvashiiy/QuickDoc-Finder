import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navi navbar-expand-lg navbar-light ">
        <img
          src="hospital logo resize.png"
          alt="medifine_logo"
          className="logo"
        />
        <h1>QuickDoc-Finder</h1>
        <div className='menu'>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navUI">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/DoctorListing">DoctorListing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item dropdown dropright">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" href="#">User</Link></li>
                  <li><Link className="dropdown-item" href="#">Another action</Link></li>
                  <li>
                    <Link class="dropdown-item" href="#"> Submenu &raquo; </Link>
                    <ul class="dropdown-menu dropdown-submenu dropright ">
                      <li>
                        <Link class="dropdown-item" href="#">Submenu item 1</Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">Submenu item 2</Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">Submenu item 4</Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">Submenu item 5</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          
    </div>
          </div >
      </nav >
    </div >
  );
};

export default Navbar;
