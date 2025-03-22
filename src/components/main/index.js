import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProtectedData from "../../hooks/useProtect";

const Main = () => {
    return (
        <h2 style={{ display: "flex", justifyContent: 'center' }}>
            HELLO JWT
        </h2>
    )
};

export default Main;
