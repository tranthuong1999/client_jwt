import { useEffect, useState } from "react";
import axios from "axios";

const useProtectedData = () => {
    const [message, setMessage] = useState(null); // Ensure null initial state
    const [loading, setLoading] = useState(true); // Track API loading state
    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const { data } = await axios.get(`${BASE_URL}/protected`, { withCredentials: true });
                setMessage(data.user);
            } catch (err) {
                setMessage(null);
            } finally {
                setLoading(false); // Stop loading after request completes
            }
        };
        fetchProtectedData();
    }, [BASE_URL]);

    return { message, loading };
};

export default useProtectedData;
