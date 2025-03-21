import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.scss"

const Protected = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/protected`, { withCredentials: true });
                setMessage(data.message);
            } catch (err) {
                navigate("/login");
            }
        };
        fetchProtectedData();
    }, [navigate]);

    const handleLogout = async () => {
        await axios.post("https://server-jwt-6p2v.onrender.com/logout", {}, { withCredentials: true });
        navigate("/login");
    };

    return <div className="protect_page">
        <h1> Đăng nhập thành công </h1>
        <div className="btn_logout">
            <button className="btn" onClick={handleLogout}>Logout</button>

        </div>
    </div>;
};

export default Protected;
