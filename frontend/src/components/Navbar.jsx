import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> <nav>
    <img
      src="hospital logo resize.png" alt="medifine_logo" className="logo"
    />
    <h1>QuickDoc-Finder</h1>
    <div className="menu">
      <ul className="navUl">
        <li className="nav-item">
          <Link className="nav" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav" aria-current="page" to="/SecLS">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav" aria-current="page" to="/SecLS">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav" aria-current="page" to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
    

  </nav>
  </div>
  )
}

export default Navbar