import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const View = () => {
    const { id } = useParams();
    const [doctors, setDoctors] = useState({});

    useEffect(() => {
        const fetchDoctors = async () => {
            const res = await fetch("http://localhost:3000/doctor/getbyid/" + id);
            console.log(res.status);
            if (res.status === 200) {
                res.json().then(data => {
                    console.log(data);
                    setDoctors(data);
                }).catch(error => {
                    console.error("Error parsing JSON:", error);
                });
            } else {
                console.error("Error fetching doctor:", res.statusText);
            }
        };

        fetchDoctors();
    }, [id]);


    return (
   
        <div>
            
            <>
  <section className="py-5">
    <div className="container-dict">
      <div className="row gx-5">
        <aside className="col-lg-6">
          <div className="border rounded-4 mb-3 d-flex justify-content-center">
            <a
              data-fslightbox="mygalley"
              className="rounded-4"
              target="_blank"
              data-type="image"
              
            >
              <img
                style={{ maxWidth: "80%", maxHeight: "80vh", margin: "auto" }}
                className="rounded-4 fit"
                src={`http://localhost:3000/${doctors.image}`}
              />
            </a>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a
              data-fslightbox="mygalley"
              className="border mx-1 rounded-2"
              target="_blank"
              data-type="image"
        
            >
              <img
                width={60}
                height={60}
                className="rounded-2"
                src={`http://localhost:3000/${doctors.cer1}`}
              />
            </a>
            <a
              data-fslightbox="mygalley"
              className="border mx-1 rounded-2"
              target="_blank"
              data-type="image"
              href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp"
            >
              <img
                width={60}
                height={60}
                className="rounded-2"
                src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big2.webp"
              />
            </a>
            <a
              data-fslightbox="mygalley"
              className="border mx-1 rounded-2"
              target="_blank"
              data-type="image"
              href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp"
            >
              <img
                width={60}
                height={60}
                className="rounded-2"
                src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big3.webp"
              />
            </a>
            <a
              data-fslightbox="mygalley"
              className="border mx-1 rounded-2"
              target="_blank"
              data-type="image"
              href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp"
            >
              <img
                width={60}
                height={60}
                className="rounded-2"
                src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big4.webp"
              />
            </a>
            <a
              data-fslightbox="mygalley"
              className="border mx-1 rounded-2"
              target="_blank"
              data-type="image"
              href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp"
            >
              <img
                width={60}
                height={60}
                className="rounded-2"
                src="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp"
              />
            </a>
          </div>
          {/* thumbs-wrap.// */}
          {/* gallery-wrap .end// */}
        </aside>
        <main className="col-lg-6">
          <div className="ps-lg-3">
            <h4 className="title text-dark">
            Name: {doctors.name}
            </h4>
            <div className="d-flex flex-row my-3">
              <div className="text-warning mb-1 me-2">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fas fa-star-half-alt" />
                <span className="ms-1">4.5</span>
              </div>
              <span className="text-muted">
                <i className="fas fa-doctor fa-sm mx-1" />
                Speciality: {doctors.speciality}
              </span>
              
            </div>
            <div className="mb-3">
              <span className="h5">Email: {doctors.email}</span>
      
            </div>
            <p>
            Description: {doctors.desc}
            </p>
            <hr />
            <div className="row mb-4">
              <div className="col-md-4 col-6">
                <label className="mb-2">Size</label>
                <select
                  className="form-select border border-secondary"
                  style={{ height: 35 }}
                >
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              {/* col.// */}
              
              
            </div>
            <a href="#" className="btn btn-warning shadow-0">
              {" "}
              BOOK YOUR{" "}
            </a>
          
            <a
              href="#"
              className="btn btn-light border border-secondary py-2 icon-hover px-3"
            >
              {" "}
              <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
            </a>
          </div>
        </main>
      </div>
    </div>
  </section>
  {/* content */}
  
</>

       
        </div>
       




    )

}


export default View;
