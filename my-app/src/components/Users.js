import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Users() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Filter the data based on search query if search query is not empty
        console.log("Search query:", searchQuery);
        if (searchQuery.trim() !== '') {
            const filtered = data.filter(user =>
                Object.values(user).some(value =>
                    typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    typeof value === 'number' && value.toString().includes(searchQuery)
                )
            );
            console.log("Filtered data:", filtered);
            setFilteredData(filtered);
        } else {
            console.log("Search query is empty, displaying all data");
            setFilteredData(data); // If search query is empty, display all data
        }
    }, [searchQuery, data]);

    const fetchData = () => {
        axios.get('http://localhost:3001')
            .then(res => {
                console.log("Fetched data:", res.data);
                setData(res.data);
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
            .then(res => {
                console.log(res);
                fetchData();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="box">
                 <div className="title">
                 Student Organizations Talent and Skill Index
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link to="/create" className="btn btn-success btn-sm">
                        Add +
                    </Link>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="form-control w-25"
                    />
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Organization</th>
                            <th>Skill/Talent</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.org}</td>
                                    <td>{user.talent}</td>
                                    <td>
                                        <Link to={`update/${user._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
