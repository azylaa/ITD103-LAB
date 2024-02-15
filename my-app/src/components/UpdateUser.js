import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [org, setOrg] = useState("");
    const [talent, setTalent] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/get/" + id);
                console.log(response);
                setName(response.data.name);
                setEmail(response.data.email);
                setAge(response.data.age);
                setOrg(response.data.org);
                setTalent(response.data.talent);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/update/' + id, { name, email, age, org, talent })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input
                            type="text"
                            placeholder="Enter Age"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Organization</label>
                        <input
                            type="text"
                            placeholder="Enter Organization"
                            className="form-control"
                            value={org}
                            onChange={(e) => setOrg(e.target.value)}
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Talent</label>
                        <input
                            type="text"
                            placeholder="Enter Talent"
                            className="form-control"
                            value={talent}
                            onChange={(e) => setTalent(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
