import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div><>

      <section className="content-home ">
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
          <Link to='/Location' className="btn btn-primary">Find a Doctor</Link>
          <div className="corner_bottom">
            <img src="bottomAngle.png"
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

      {/* About */}
      <div class="section-4 m-5 ">
        <div class="container-fluid p-2">
          <div class="row">
            <div class="col-md-6">
              <img src={"./src/assets/about.png"} alt="" />
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="section-tittle mb-40">
                <h2 className=' heading-1 mt-5'>About Us</h2>
              </div>
              <div className="about-captiomb-50">
                {/* Section Tittle */}

                <div className="section-tittle mb-35">
                  <h2 className=' para-1 mt-5 mb-5'>Create a healthy life you love!</h2>
                </div>
                <p className=" para-1 para-top mb-40">
                  Almost before we knew it, we had left the ground
                </p>
                <p className="para-1 para-bottom mb-30">
                  Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim
                  dolor, a pretium mi sem ut ipsum. Fusce fermentum. Pellentesque
                  libero tortor, tincidunt et.
                </p>
                <div className="icon-about">
                  <img src={"./src/assets/icon/about1.svg"} alt="" className=" mr-20" />
                  <img src={"./src/assets/icon/about2.svg"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Doct */}

      <div className="container-dico boyd">   
        <div className="row m-5">
        <h2 className='heading-2 mt-5 mb-5'>Our Doctors</h2>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3"> 
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src={"./src/assets/doctor3.jpg"}
                />
              </div>
              <div className="team-content">
                <h3 className="name">Michele Miller</h3>
                <h4 className="title">Orthopedic</h4>
              </div>
              <ul className="social-dico">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src={"./src/assets/Doctor1.jpg"}
                />
              </div>
              <div className="team-content">
                <h3 className="name">Patricia Knott</h3>
                <h4 className="title">Cardiologist</h4>
              </div>
              <ul className="social-dico">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src={"./src/assets/doctor6.jpg"}
                />
              </div>
              <div className="team-content">
                <h3 className="name">Justin Ramos</h3>
                <h4 className="title">Neurologist</h4>
              </div>
              <ul className="social-dico">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src={"./src/assets/doctor7.jpg"}
                />
              </div>
              <div className="team-content">
                <h3 className="name">Mary Huntley</h3>
                <h4 className="title">gynecologists</h4>
              </div>
              <ul className="social-dico">
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-facebook"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-twitter"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-google-plus"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/XdWJOQ/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* Our service */}

      <>
        <section className="depart-section">
          <section className="breadcrumb_part breadcrumb_bg">
            <div className="container-t">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb_iner">
                    <div className="breadcrumb_iner_item">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* breadcrumb start*/}
          {/* our depertment part start*/}
          <section className="our_depertment section_padding single_pepertment_page">
            <div className="container-t">
              <div className="row justify-content-center text-center">
                <div className="col-xl-12">
                  <div className="depertment_content">
                    <div className="row justify-content-center">
                      <div className="col-xl-8">
                        <h2 style={{ color: '#168548' }}> Our Facilities</h2>
                        <div className="row">
                          <div className="col-lg-6 col-sm-6">
                            <div className="single_our_depertment">
                              <span className="our_depertment_icon">
                                <img src={"./src/assets/icon/feature_2.svg"} alt="" />
                              </span>
                              <h4>Better Future</h4>
                              <p>
                                Darkness multiply rule Which from without life creature
                                blessed give moveth moveth seas make day which divided
                                our have.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6">
                            <div className="single_our_depertment">
                              <span className="our_depertment_icon">
                                <img src={"./src/assets/icon/feature_2.svg"} alt="" />
                              </span>
                              <h4>Better Future</h4>
                              <p>
                                Darkness multiply rule Which from without life creature
                                blessed give moveth moveth seas make day which divided
                                our have.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6">
                            <div className="single_our_depertment">
                              <span className="our_depertment_icon">
                                <img src={"./src/assets/icon/feature_2.svg"} alt="" />
                              </span>
                              <h4>Better Future</h4>
                              <p>
                                Darkness multiply rule Which from without life creature
                                blessed give moveth moveth seas make day which divided
                                our have.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6">
                            <div className="single_our_depertment">
                              <span className="our_depertment_icon">
                                <img src={"./src/assets/icon/feature_2.svg"} alt="" />
                              </span>
                              <h4>Better Future</h4>
                              <p>
                                Darkness multiply rule Which from without life creature
                                blessed give moveth moveth seas make day which divided
                                our have.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </>



      <>
        <footer className='bodyfoot'>
          <div className="background">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="50%"
              height="50%"
              viewBox="0 0 1400 900"
            >
              <defs>
                <path
                  id="wave"
                  fill="rgba(62, 206, 153, 0.6)"
                  d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                />
              </defs>
              <g>
                <use xlinkHref="#wave" opacity=".4">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="8s"
                    calcMode="spline"
                    values="270 230; -334 180; 270 230"
                    keyTimes="0; .5; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
                <use xlinkHref="#wave" opacity=".6">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="6s"
                    calcMode="spline"
                    values="-270 230;243 220;-270 230"
                    keyTimes="0; .6; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
                <use xlinkHref="#wave" opacty=".9">
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="4s"
                    calcMode="spline"
                    values="0 230;-140 200;0 230"
                    keyTimes="0; .4; 1"
                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                    repeatCount="indefinite"
                  />
                </use>
              </g>
            </svg>
          </div>
          <section className='sect-fot'>
            <ul className="socialsfo">
              <li>
                <a className="fa-brands fa-x-twitter" />
              </li>
              <li>
                <a className="fa-brands fa-facebook" />
              </li>
              <li>
                <a className="fa-brands fa-linkedin" />
              </li>
            </ul>
            <ul className="linksFo">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Skillset</a>
              </li>
              <li>
                <a>Hire</a>
              </li>
            </ul>
            <p className="legal">© 2024 All rights reserved</p>
          </section>
        </footer>

      </>
    </>
  

    </div>
  )
}

export default Home