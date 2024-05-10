import React from 'react'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';

const DoctorLogin = () => {

  const DoctorLoginForm = useFormik({
    initialValues: {

      email: '',
      password: '',

    },
    onSubmit: async (values, action) => {
      ;
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
        navigate('/')
      } else {
        enqueueSnackbar('Incorrect Password or Username', {
          variant: 'error', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        })
      }


      validationSchema: myschema
    }
  });
  return (
    <>
      <div className='loginbody'>
        <div className="containerLog">
          <div className="row">
            <div className="col-lg-3 col-md-2" />
            <div className="col-lg-6 col-md-8 login-box">
              <div className="col-lg-12 login-key">
                <i className="fa fa-user-md" aria-hidden="true" />
              </div>
              <div className="col-lg-12 login-title">DOCTOR PANEL</div>
              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <form onSubmit={DoctorLoginForm.handleSubmit}>
                    <div className="form-groupDL">
                      <label className="form-control-label">Email:</label>
                      <input type="email" className="form-control"
                        id="email" placeholder="Email"
                        onChange={DoctorLoginForm.handleChange}
                        value={DoctorLoginForm.values.email}
                      />

                    </div>
                    <div className="form-groupDL">
                      <label className="form-control-label">PASSWORD</label>
                      <input type="password" className="form-control" i=""
                        id="password" placeholder="Password"
                        onChange={DoctorLoginForm.handleChange}
                        value={DoctorLoginForm.values.password}
                      />
                    </div>
                    <div className="col-lg-12 loginbttm">
                      <div className="col-lg-6 login-btm login-text">
                        {/* Error Message */}
                      </div>
                      <div className="col-lg-6 login-btm login-buttone">
                        <button type="submit" className="btn btn-outline-primary">
                          LOGIN
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default DoctorLogin