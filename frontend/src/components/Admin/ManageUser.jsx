import React, { useState, useEffect } from 'react';

const ManageUser = () => {
    const [users, setUsers] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/user/getall');
        if (res.status === 200) {
            const data = await res.json();
            setUsers(data);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const deleteUser = async (id) => {
        const res = await fetch(`http://localhost:3000/user/delete/${id}`, {
            method: 'DELETE',
        });
        if (res.status === 200) {
            fetchUserData();
        }
    };

    const displayUsers = () => {
        return users.map((user) => (
            <tr key={user._id} className="text-white">
                <td>{user.name}</td>
                <td>{user.email}</td>
                 <td>{user.password}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
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
            <div className="bg-success text-white">
                <div className="container-10 py-5" style={{ backgroundColor: '#94e2d5',color: 'white' }}>
                    <h1 style={{color: 'white' }}> Manage Users</h1>
                </div>
            </div>

            <div className="container-10 mt-5" style={{ backgroundColor: '#94e2d5',color: 'white' }}>
                <table className="table">
                    <thead>
                        <tr className=" text-white">
                            <th>Name</th>
                            <th>Email</th>           
                            <th>Password</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{displayUsers()}</tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
