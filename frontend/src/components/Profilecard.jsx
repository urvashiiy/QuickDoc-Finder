import React from 'react'
import { Link } from 'react-router-dom'

const Profilecard = () => {
    return (
  <div className='body-c'>
            <div className="containerPro">
                <div className="main-body">
                    {/* Breadcrumb */}
                    <nav aria-label="breadcrumb" className="main-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/Home">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="javascript:void(0)">Doctor</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Doctor Profile
                            </li>
                        </ol>
                    </nav>
                    {/* /Breadcrumb */}
                   <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="cardPro">
                                <div className="card-bodyPro">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            alt="Admin"
                                            className="rounded-circle"
                                            width={150}
                                        />
                                        <div className="mt-3">
                                            <h4>John Doe</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">
                                                Bay Area, San Francisco, CA
                                            </p>
                                            <button className="btn btn-primary mr-4">Book Apointment</button>
                                            <button className="btn btn-outline-primary">Message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="cardPro mb-3" style={{ height: '96%' }}>
                                <div className="card-bodyPro" >
                                    <div className="row" >
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">Kenneth Valdez</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">(239) 816-9029</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">(320) 380-4539</div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Bay Area, San Francisco, CA
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <a className="btn btn-info" target="__blank" href="">
                                                        Edit
                                                    </a>
                                                    <div class="social-icons d-flex">
                                                        <a href="https://www.facebook.com/userprofile" class="social-icon" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                                        <a href="https://twitter.com/userprofile" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
                                                        <a href="https://www.instagram.com/userprofile" class="social-icon" target="_blank"><i class="fab fa-instagram"></i></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default Profilecard