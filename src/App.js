import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/sigup";
import LogoutPage from "./components/Logout";
import Main from "./components/main";
import HomePage from "./components/home";
import NotFoundPage from "./components/notfound";
import Cookies from "js-cookie";


const isAuthenticated = () => {
  return !!document.cookie.split("; ").find(row => row.startsWith("token")); // Check if token exists
};
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/logout" element={<ProtectedRoute><LogoutPage /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
