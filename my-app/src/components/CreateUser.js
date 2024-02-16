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
        <div className="container">
            <div className="box1">
                <div className="b">
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
                            <label htmlFor= "">Skill/Talent</label>
                            <input
                                type="text"
                                placeholder="Enter Skill/Talent"
                                className="form-control"
                                onChange={(e) => setTalent(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-success submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;