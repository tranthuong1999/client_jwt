import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedData from "../../hooks/useProtect";

const HomePage = () => {
    const navigate = useNavigate();
    const { message } = useProtectedData();

    useEffect(() => {
        if (!message) {
            navigate("/login");
        }
    }, [message, navigate]);
    return (
        <h1>
            Home page
        </h1>
    )
};

export default HomePage;
