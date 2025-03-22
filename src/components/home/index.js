import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedData from "../../hooks/useProtect";

const HomePage = () => {
    const navigate = useNavigate();
    const { message, loading } = useProtectedData();

    useEffect(() => {
        if (!loading && message === null) {
            navigate("/login");
        }
    }, [message, loading, navigate]);

    if (loading) return <h1>Loading...</h1>;

    return (
        <h2 style={{ display: "flex", justifyContent: 'center' }}>
            Home page. Đăng nhập thành công
        </h2>
    );
};

export default HomePage;
