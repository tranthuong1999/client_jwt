import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedData from "../../hooks/useProtect";

const HomePage = () => {
    const navigate = useNavigate();
    const { message } = useProtectedData();

    useEffect(() => {
        if (message === null) {
            navigate("/login");
        }
    }, [message, navigate]);

    if (message === null) return <h1>Loading...</h1>;

    return (
        <h1>Home page. Đăng nhập thành công</h1>
    );
};

export default HomePage;
