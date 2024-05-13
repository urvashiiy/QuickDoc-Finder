import React from 'react'

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
          <button className='bton'> Explore Location</button>
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
      <div class="section-4">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-md-5">
              <img src="section-4.jpg" alt="section-4" width="113%" height="100%" />
            </div>
            <div class="col-md-7">
              <h3 class="heading-1">About Us</h3>
              <hr class="h-line-1" />
              <br />
              <p class="para-1">We are a team of professional, energetic individuals with talented designers and experienced managers
                available to guide our clients through the flawless and timely execution of any web design project.
                Since day one, we have been delivering creative and unique websites to our clients worldwide.</p>
              <div class="d-flex flex-row">
                <div class="col-md-6">
                  <div class="d-flex flex-row">
                    <i class="fas fa-pencil-ruler fa-2x m-2"></i>
                    <div class="d-flex flex-column">
                      <h4 class="m-2">Bootstrap Framework</h4>
                      <p class="m-2">The Future is based on Bootstrap Framework, which makes it a nice template for any purpose.</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="d-flex flex-row">
                    <i class="far fa-edit fa-2x m-2"></i>
                    <div class="d-flex flex-column">
                      <h4 class="m-2">Clean & Crispy Design</h4>
                      <p class="m-2">The Future is crafted by top industry leaders with love, care and customer needs in mind.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Our Doct */}
      <div className='y'>
      <h2 className="text-center fw-bold mt-5" style={{ fontFamily: "serif" , color:'#2ae07c' }}> Our Doctor's </h2>

        <div className='body'>
          <div className="card-doc">
            
            <div className="img-bx">
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg2OC1zYXNpLTA2LmpwZw.jpg" alt="img" />
            </div>
            <div className="contentDoc">
              <div className="detail-doc">
                <h2>
                  Emilia Roy
                  <br />
                  <span>Cardilogist</span>
                </h2>
                <ul className="sco">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-doc">
            <div className="img-bx">
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg2OC1zYXNpLTA2LmpwZw.jpg" alt="img" />
            </div>
            <div className="contentDoc">
              <div className="detail-doc">
                <h2>
                  Emilia Roy
                  <br />
                  <span>Nuerologist</span>
                </h2>
                <ul className="sco">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-doc">
            <div className="img-bx">
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg2OC1zYXNpLTA2LmpwZw.jpg" alt="img" />
            </div>
            <div className="contentDoc">
              <div className="detail-doc">
                <h2>
                  Emilia Roy
                  <br />
                  <span>Dentist</span>
                </h2>
                <ul className="sco">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
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
                        <h2 style={{ color: '#129e95' }}>Our Department</h2>
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


      < >

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Animation 1</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/section1/Style.css" />
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
              viewBox="0 0 1600 900"
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