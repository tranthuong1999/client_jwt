import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { encryptPassword } from "./utils/encryption.js"


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const encryptedPassword = encryptPassword(password);
        try {
            await axios.post("https://server-jwt-6p2v.onrender.com/signup", { email, password: encryptedPassword }, { withCredentials: true });
            navigate("/protected");
        } catch (err) {
            alert("Error signing up");
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
