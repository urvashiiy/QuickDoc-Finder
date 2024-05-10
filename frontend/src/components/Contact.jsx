import React from 'react'
import {useFormik} from 'formik'

import { enqueueSnackbar } from 'notistack'



const Contact = () => {

  const contactFrom = useFormik({
    initialValues:{
        name:'',
        email:'',
        message:''
    },
    onSubmit: async(values,action) =>{
      console.log(values);
      const res = await fetch('http://localhost:3000/contact/add',{
          method: 'POST',
          body: JSON.stringify(values),
          headers : {
              'Content-Type': 'application/json'
          }
      });
      console.log(res.status)
        action.resetForm()

        if (res.status)
        action.resetForm()
    if (res.status === 200){
        enqueueSnackbar(' Successfull',{variant: 'success'})
    } else{
        enqueueSnackbar('Failed',{variant: 'error'})
    }
    },
  })

  return (
    <div className='*'> 
    <div className="contact-container">
    <div className="contact-inner-container">
      <div className="contact-info-container">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-description">
          We're open for any suggestion or just to have a chat.
        </p>
        <div className="line" />
        <div className="contact-details">
          <h3>
            <i className="fa fa-map-maker" /> Address
          </h3>
          <p>198 Balistreri Extension Apt. 678, New Jersey, USA-328135</p>
        </div>
        <hr />
        <div className="contact-details">
          <h3>
            <i className="fa fa-envelope" /> Email
          </h3>
          <p>contactus@mail.com</p>
        </div>
        <hr />
        <div className="contact-details">
          <h3>
            <i className="fa fa-phone" /> Lets Talk
          </h3>
          <p>+91 9876543210</p>
        </div>
        <hr />
        <div className="social-link-container">
          <i className="fa fa-instagram" />
          <i className="fa fa-facebook" />
          <i className="fa fa-twitter" />
          <i className="fa fa-linkedin" />
        </div>
      </div>
      <div className="contact-form">
        <form className="formUs" onSubmit={contactFrom.handleSubmit}>
          <div className="form-groupC">
            <input
              type="text"
              name="name"
              className="input-fieldC form-input"
              placeholder="Name"
              onChange={contactFrom.handleChange}
              value={contactFrom.values.name}
            />
          </div>
          <div className="form-groupC">
            <input
              type="email"
              name="email"
              className="input-fieldC form-input"
              placeholder="Email"
              onChange={contactFrom.handleChange}
              value={contactFrom.values.email}
            />
          </div>
          <div className="form-groupC">
            <textarea
              name="message"
              rows={5}
              className="input-fieldC form-input"
              placeholder="Message"
              defaultValue={""}
              onChange={contactFrom.handleChange}
              value={contactFrom.values.message}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="input-fieldC submit-btn"
              defaultValue="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Contact