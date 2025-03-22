import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { encryptPassword } from "../../utils/encryption.js"
import "./style.scss"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const encryptedPassword = encryptPassword(password);
        try {
            const data = await axios.post(`${BASE_URL}/login`, { email, password: encryptedPassword }, { withCredentials: true });
            console.log("Data login", data)
            if (data) {
                navigate("/home");
            } else {
                alert("Login failed: Not authenticated");
            }
        } catch (err) {
            alert("Invalid credentials");
        }
    };
    return (
        <div className="login_page">
            <h2 className="title_login">Login</h2>
            <form onSubmit={handleLogin} className="form_login">
                <div>
                    <input className="field" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <input className="field" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="btn_login">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
