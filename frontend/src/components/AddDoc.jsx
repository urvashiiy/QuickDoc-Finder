import React from 'react'
import {useFormik} from 'formik'
import { enqueueSnackbar } from 'notistack'


const AddDoc = () => {
    // step 1. formik initialization
    const AddDocForm = useFormik({
        initialValues:{
            fname:'',
            email:'',
            specialization:''
        },
        //step 5. Valdidation schema
        onSubmit: async(values,action) =>{
          console.log(values);
          const res = await fetch('http://localhost:3000/doctors/add',{
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
    <div>
      <div className="container-1 container-fluid p-5">
      
    <h1>Doctor Form</h1>
    <form onSubmit={AddDocForm.handleChange} method="post">
      <fieldset>
        <legend>Personal Information:</legend>
        <label htmlFor="fname">Full Name:</label>
        <input type="text" id="fname" required="" onChange={AddDocForm.handleChange}
                    value={AddDocForm.values.fname}  />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" required="">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="phone">Contact Number:</label>
        <input type="tel" id="phone" required=""  onChange={AddDocForm.handleChange}
                    value={AddDocForm.values.phone}/>
        <label htmlFor="email">Email Address: </label>
        <input type="email" id="email" required="" onChange={AddDocForm.handleChange}
                    value={AddDocForm.values.email} />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          required=""
          defaultValue={""}
        />
      </fieldset>
      <fieldset>
        <legend>Professional Information:</legend>
        <label htmlFor="degree">Medical Degree(s) Earned:</label>
        <input type="text" id="degree" name="degree" required="" />
        <label htmlFor="specialty">Specialty(ies):</label>
        <input type="text" id="specialty" name="specialty" required="" />
        <label htmlFor="license">Medical License Number:</label>
        <input type="text" id="license" name="license" required="" />
        <label htmlFor="experience">Years of Experience:</label>
        <input type="number" id="experience" name="experience" required="" />
        <label htmlFor="employment">Current Employment Status:</label>
        <input type="text" id="employment" name="employment" />
        <label htmlFor="institution">Current Institution/Hospital:</label>
        <input type="text" id="institution" name="institution" />
        <label htmlFor="password">Password</label>
        <input className="form-control"id='password' placeholder="Create password" type="password"
                onChange={AddDocForm.handleChange}
                value={AddDocForm.values.password}
              />
      </fieldset>
      
      <button type="submit">Submit</button>
    </form>
  </div>
  
  </div>
  )
}

export default AddDoc