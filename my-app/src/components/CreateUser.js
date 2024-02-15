import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [org, setOrg] = useState()
    const [talent, setTalent] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/create', { name, email, age, org, talent })
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
             <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div classname="mb-2">
                        <label htmlFor= "">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div classname="mb-2">
                        <label htmlFor= "">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div classname="mb-2">
                        <label htmlFor= "">Age</label>
                        <input
                            type="text"
                            placeholder="Enter Age"
                            className="form-control"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div classname="mb-2">
                        <label htmlFor= "">Organization</label>
                        <input
                            type="text"
                            placeholder="Enter Organization"
                            className="form-control"
                            onChange={(e) => setOrg(e.target.value)}
                        />
                    </div>

                    <div classname="mb-2">
                        <label htmlFor= "">Talent</label>
                        <input
                            type="text"
                            placeholder="Enter Talent"
                            className="form-control"
                            onChange={(e) => setTalent(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>
             </div>
        </div>
    )
}

export default CreateUser;