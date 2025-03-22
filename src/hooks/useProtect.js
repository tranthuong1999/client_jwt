import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useProtectedData = () => {
    const [message, setMessage] = useState("");
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/protected`, { withCredentials: true });
                // if (isMounted)
                setMessage(data.message);
            } catch (err) {
                setMessage(null);
                navigate("/login");
            }
        };
        fetchProtectedData();
    }, [BASE_URL, navigate]);
    return { message, setMessage };
};

export default useProtectedData;
