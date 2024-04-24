import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
  .required('name is required')
  .min(3,'Name must be 3 charachters')
  .max(15,'Name must be 15 charachters'),
  email:Yup.string()
  .required('Email is required')
  .email('Email is invalid'),
  password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must at least 6 charachters')
  .max(15, 'Password must at most 15 charachters')
})

const SignUp = () => {
  // step 1. formik initialization
  const signUpFrom = useFormik({
      initialValues:{
          name:'',
          email:'',
          password:''
      },
      //step 5. Valdidation schema
      onSubmit: async(values,action) =>{
        console.log(values);
        const res = await fetch('http://localhost:3000/user/add',{
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
  
      validationSchema: SignUpSchema
  })

  return (
    <div><>
    <div className="container">
      <br />{" "}
      <p className="text-center">
        Emergency Need to get doctor?  {" "}
        <a href="#"> QuickDoc Finder</a>
      </p>
      
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
          <h4 className="card-title mt-3 text-center">Create Account</h4>
          <p className="text-center">Get started with your free account</p>
          <p>
            <a href="" className="btn btn-blocks btn-twitter">
              {" "}
              <i className="fab fa-google" /> &nbsp; Login via Google
            </a> 
            <a href="" className="btn btn-blocks btn-facebook">
              {" "}
              <i className="fab fa-facebook-f" /> &nbsp; Login via facebook
            </a>
          </p>
          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>
          <form onSubmit={signUpFrom.handleSubmit}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>
              </div>
              <span style={{color:'red', fontSize:'10', marginLeft:10}}>{signUpFrom.touched.name && signUpFrom.errors.name}</span>
              <input
                name=""className="form-control" id='name' placeholder="Full name"type="text"
                onChange={signUpFrom.handleChange}
                    value={signUpFrom.values.name} 
              /> 
            </div>{" "}
            {/* form-group// */}
            <div className="form-group input-group"> <div className="input-group-prepend"> <span className="input-group-text">
                  {" "}
                  <i className="fa fa-envelope" />{" "}
                </span>
              </div>
              <span style={{color:'red', fontSize:'10', marginLeft:10}}>{signUpFrom.touched.email && signUpFrom.errors.email}</span>
              <input name="email" className="form-control" id='email' placeholder="Email address"type="email"
               onChange={signUpFrom.handleChange}
               value={signUpFrom.values.email}
              />
            </div>{" "}
            {/* form-group// */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-phone" />{" "}
                </span>
              </div>
              
              <input
                name=""
                className="form-control"placeholder="Phone number"type="text"
              />
            </div>{" "}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock" />{" "}
                </span>
              </div>
              <span style={{color:'red', fontSize:'10', marginLeft:10}}>{signUpFrom.touched.password && signUpFrom.errors.password}</span>
              <input
                className="form-control"id='password' placeholder="Create password" type="password"
                onChange={signUpFrom.handleChange}
                value={signUpFrom.values.password}
              />
            </div>{" "}
            {/* form-group// */}
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock" />{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Repeat password"
                type="password"
              />
            </div>{" "}
            {/* form-group// */}
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                {" "}
                Create Account
              </button>
            </div>{" "}
            {/* form-group// */}
            <p className="text-center">
              Have an account? <a href="">Log In</a>{" "}
            </p>
          </form>
        </article>
      </div>{" "}
      {/* card.// */}
    </div>
    {/*container end.//*/}
    <br />
    <br />
    <article className="bg-secondary mb-3">
      <div className="card-body text-center">
        <h3 className="text-white mt-3">QucikDoc Finder</h3>
        <p className="h5 text-white">
          Here we provide doctor <br /> for Your critical condition anytime,anywhere
        </p>{" "}
        <br />
        <p>
          <a
            className="btn btn-warning"
            target="_blank"
            href=""
          >
            {" "}
            QuickDoc Finder.com
            <i className="fa fa-window-restore " />
          </a>
        </p>
      </div>
      <br />
      <br />
    </article>
  </>
  </div>
  )
}

export default SignUp