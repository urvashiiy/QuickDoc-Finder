import React, {useState,useEffect} from 'react'

const DoctorListing = () => {
    const [doctors, setDoctors] = useState([])

    const fetchDoctors = async() =>{
        const res = await fetch('http://localhost:3000/doctors/getall')
        console.log(res.status)
        if(res.status === 200){
            const data = await res.json();
            console.log(data)
            setDoctors(data)
        }
    }
    useEffect(()=>{
        fetchDoctors()
    },[]);

    const displayDoctors = () =>{
        return doctors.map((item) => (
            <div className="container "> 
            <div className="col-md-4">
                <div className="card p-3 mb-5 bg-dark">
                    <h3 className='mt-3 text-light'>{item.ProductName}</h3>
                    <h3 className='mt-3 text-light'>{item.description}</h3>
                    <h3 className='mt-3 text-light'>{item.price}</h3>
                </div>
            </div>
            </div>
        ))
    }

  return (
    <div>
        <header className='bg-body-tertiary'>
        <div className='container py-5'>
            <p className='text-center fw-bold'>All Doctors</p>
            <input type="text" name="" id=""  placeholder='Search Doctor' className='form-control w-75 m-auto'/>
        </div>
        </header>
        <div className='conatiner mt-5'>
            <div className='row mt-5 p-5'>
                {displayDoctors()}
            </div>

        </div>
    </div>
  )
}
export default DoctorListing