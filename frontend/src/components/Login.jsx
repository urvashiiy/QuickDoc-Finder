import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'



const LoginSchema = Yup.object().shape({
    email:Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
    password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must at least 6 charachters')
    .max(15, 'Password must at most 15 charachters')
})

const Login = () => {
    const LoginForm = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        //step 5. Valdidation schema
        onSubmit: async(values, action) =>{
            console.log(values);
            const res = await fetch('http://localhost:3000/user/authenticate',{
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
            enqueueSnackbar('Login Successfull',{variant: 'success'})
        } else{
            enqueueSnackbar('Login Failed',{variant: 'error'})
        }
        },
        validationSchema: LoginSchema
    })
  return (
    <div>
    <section className="vh-100">
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-sm-6 text-black">
                    <div className="px-5 ms-xl-4">
                        <i
                            className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                            style={{ color: "#709085" }}
                        />
                        <span className="h1 fw-bold mb-0">Welcome </span>
                    </div>
                    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-4 pt-4 pt-xl-0 mt-xl-n4">
                        <form style={{ width: "23rem" }}>
                            <h3 className="fw-normal mb-3 pb-3 fs-1" style={{ letterSpacing: 1,fontFamily:"-moz-initial" }}>
                                LOGIN
                            </h3>
                            <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form2Example18">
                                    Email address
                                </label>
                                <span style={{color:'red', fontSize:'10', marginLeft:10}}>{LoginForm.touched.email && LoginForm.errors.email}</span>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg" onChange={LoginForm.handleChange}
                                    value={LoginForm.values.email}/>
                            </div>
                            <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form2Example28">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password" className="form-control form-control-lg" onChange={LoginForm.handleChange}
                                    value={LoginForm.values.password} />
                            </div>
                            <div className="pt-1 mb-3">
                                <button className="btn btn-info btn-lg btn-block" type="submit">
                                    Login
                                </button>
                            </div>
                            <p className="small mb-5 pb-lg-2">
                                <a className="text-muted" href="#!">
                                    Forgot password?
                                </a>
                            </p>
                            <p>
                                Don't have an account?{" "}
                                <a href="signup" className="link-info">
                                    Register here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img
                        src="https://media.istockphoto.com/id/1373659740/photo/shot-of-a-young-doctor-sharing-information-from-his-digital-tablet-with-an-older-patient.jpg?s=612x612&w=0&k=20&c=xi-5BceyNKDF919oSK3GheekuIGTJ5Jl3ccWopz47LE="
                        alt="Login image"
                        className="w-10 vh-98 mt-5"
                        style={{ objectFit: "cover", objectPosition: "left" }}
                    />
                </div>
            </div>
        </div>
    </section>

        </div>
  )
}

export default Login