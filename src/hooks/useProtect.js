import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useProtectedData = () => {
    const [message, setMessage] = useState("");
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true; // Prevents state update if unmounted

        const fetchProtectedData = async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/protected`, { withCredentials: true });
                if (isMounted) setMessage(data.message);
            } catch (err) {
                if (isMounted) navigate("/login");
            }
        };

        fetchProtectedData();

        return () => { isMounted = false }; // Cleanup on unmount
    }, [BASE_URL, navigate]);

    return { message, setMessage };
};

export default useProtectedData;
