import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { encryptPassword } from "./utils/encryption.js"



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const encryptedPassword = encryptPassword(password);
        try {
            await axios.post("https://server-jwt-6p2v.onrender.com/login", { email, password: encryptedPassword }, { withCredentials: true });
            navigate("/protected");
        } catch (err) {
            alert("Invalid credentials");
        }
    };
    console.log("checking env", process.env.REACT_APP_BASE_URL)
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
