import React from 'react'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom'
import "../components/DocLogin.css"

const DoctorLogin = () => {

  const navigate = useNavigate();
  const DoctorLoginForm = useFormik({
    initialValues: {

      email: '',
      password: '',

    },
    onSubmit: async (values, action) => {
      console.log(values);


      const res = await fetch('http://localhost:3000/doctor/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {

        enqueueSnackbar('Login Successfully', {
          variant: 'success', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        });
          const data = await res.json();
          sessionStorage.setItem('doctor', JSON.stringify(data));
          navigate('/DoctorProfile')

       
      } else {
        enqueueSnackbar('Incorrect Password or Username', {
          variant: 'error', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        })
      }


    }
  });
  return (
    <>
      <div className="bodyDOCLO">
        
        <div className="container-me">

          <div className="screen-me">
            
            <div className="screen__content">
            <h2 className='tim'>Doctor Login</h2>
              <form className="login" onSubmit={DoctorLoginForm.handleSubmit}>
                <div className="login__field">
                  <i className="login__icon fas fa-user" />
                  <input
                    type="text"
                    className="login__input"
                    placeholder=" Email"
                    id="email"
                    onChange={DoctorLoginForm.handleChange}
                    value={DoctorLoginForm.values.email}
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock" />
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    id="password"
                    name="password" // Add name attribute here
                    onChange={DoctorLoginForm.handleChange}
                    value={DoctorLoginForm.values.password}
                  />
                </div>
                <button type='submit' className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button>
              </form>
              <div className="social-login">
                <h3>log in via</h3>
                <div className="social-icons">
                  <a href="#" className="social-login__icon fab fa-instagram" />
                  <a href="#" className="social-login__icon fab fa-facebook" />
                  <a href="#" className="social-login__icon fab fa-twitter" />
                </div>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4" />
              <span className="screen__background__shape screen__background__shape3" />
              <span className="screen__background__shape screen__background__shape2" />
              <span className="screen__background__shape screen__background__shape1" />
            </div>
          </div>
        </div>
      </div>

    </>



  )
}

export default DoctorLogin