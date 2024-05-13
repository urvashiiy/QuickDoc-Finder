import React, { useState, useEffect } from 'react';

const ManageDoctor = () => {
    const [doctors, setDoctors] = useState([]);

    const fetchDoctorData = async () => {
        const res = await fetch('http://localhost:3000/doctor/getall');
        if (res.status === 200) {
            const data = await res.json();
            setDoctors(data);
        }
    };

    useEffect(() => {
        fetchDoctorData();
    }, []);

    const deleteDoctor = async (id) => {
        const res = await fetch(`http://localhost:3000/doctor/delete/${id}`, {
            method: 'DELETE',
        });
        if (res.status === 200) {
            fetchDoctorData();
        }
    };

    const displayDoctors = () => {
        return doctors.map((doctor) => (
            <tr key={doctor._id}>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.contact}</td>
                <td>{doctor.desc}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => deleteDoctor(doctor._id)}>
                        Delete
                    </button>
                </td>
                <td>
                    <button className="btn btn-danger">Update</button>
                </td>
            </tr>
        ));
    };

    return (
        <div>
            <div
             className="bg-danger text-white">
                <div className="container-10 py-5" style={{ backgroundColor: '#94e2d5',color: 'white' }}>
                    <h1 className=" text-white">Manage Doctors</h1>
                </div>
            </div>

            <div className="container-10 mt-5"  style={{ backgroundColor: '#94e2d5',color: 'white' }}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Contact</th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{displayDoctors()}</tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctor;
