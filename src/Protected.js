import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Protected = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const { data } = await axios.get("https://server-jwt-6p2v.onrender.com/protected", { withCredentials: true });
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

    return <>
        {message}
        <button onClick={handleLogout}>Logout</button>
    </>;
};

export default Protected;
