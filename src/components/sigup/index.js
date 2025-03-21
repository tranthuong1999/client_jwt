import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { encryptPassword } from "../../utils/encryption.js"
import "./style.scss";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

    const handleSignup = async (e) => {
        e.preventDefault();
        const encryptedPassword = encryptPassword(password);
        try {
            await axios.post(`${BASE_URL}/signup`, { email, password: encryptedPassword }, { withCredentials: true });
            navigate("/protected");
        } catch (err) {
            alert("Error signing up");
        }
    };

    return (
        <div className="register_page">
            <h2 className="title_login">Signup</h2>
            <form onSubmit={handleSignup} className="form_register">
                <div>
                    <input className="field" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <input className="field" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="btn_register">
                    <button type="submit">Signup</button>
                </div>
            </form>
        </div>
        // <div>
        //     <h2>Signup</h2>
        //     <form onSubmit={handleSignup}>
        //         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        //         <button type="submit">Signup</button>
        //     </form>
        // </div>
    );
};

export default Signup;
