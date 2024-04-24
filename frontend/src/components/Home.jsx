import React from 'react'

const Home = () => {
  return (
    <div><>
      <nav>
        <img
          src="hospital logo resize.png" alt="medifine_logo" className="logo"
        />
        <h1>QuickDoc-Finder</h1>
        <div className="menu">
          <ul className="navUl">
            <li>
              <a href="Home">Home</a>
            </li>
            <li>
              <a href="Login">Login</a>
            </li>
            <li>
              <a href="Contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="content">
        <div className="content_text">
          <img src="topAngle.png" alt="top_corner" className="green_corner" />
          <h2>
            Bringing Care Closer: Your Health, Our Priority, One Video Call at a
            Time
          </h2>
          <p>
            Meet your loved one at the tip of your finger with QuickDoc-Finder
            and assist them in their health recovery process by offering them
            wishes and warmth.
          </p>
          <button>Make Appointment</button>
          <div className="corner_bottom">
            <img  src="bottomAngle.png"
              alt="bottom_corner"
              class="orange_corner"
            />
            <img src="mouse.png" alt="mouse_logo" className="mouse" />
          </div>
        </div>
        <div className="content_img">
          <img src="greenBox.png" alt="green_circle" className="green_circle" />
          <img
            src="yellowBox.png"
            alt="yellow_circle"
            className="yellow_circle"
          />
          <img src="doctor.png" alt="doctor_img" className="doctor" />
        </div>
      </section>



<div className="about">
  <img className='about-img'src="About us.png" alt="about_img" />
</div>



      <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-5 footer">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      {/* Left */}
      {/* Right */}
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="foot">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © 2021 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>


    </>
    </div>
  )
}

export default Home