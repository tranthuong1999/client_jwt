import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useProtectedData from "../../hooks/useProtect";

const LogoutPage = () => {
    const navigate = useNavigate();
    const { message, loading } = useProtectedData();
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

    useEffect(() => {
        if (!loading && message === null) {
            navigate("/login");
        }
    }, [message, loading, navigate]);

    const handleLogout = async () => {
        try {
            await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    if (loading) return <h1>Loading...</h1>;
    return <div className="protect_page">
        <h1> Đăng nhập thành công </h1>
        <div className="btn_logout">
            <button className="btn" onClick={handleLogout}>Logout</button>

        </div>
    </div>;
};

export default LogoutPage;
