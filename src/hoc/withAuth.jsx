import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useAuth } from "../contexts/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { refreshToken, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      const intervalId = setInterval(() => {
        const token = localStorage.getItem('token')
        if(!token) return
        const exp = jwt_decode(token).exp;

        const expTime = exp * 1000;
        const currentTime = new Date().getTime();
        
        if (expTime >= currentTime && !!token) {
          refreshToken();
        } else {
          logOut();
          navigate("/auth");
        }
      }, 1000 * 60 * 0.1); 

      return () => clearInterval(intervalId);
    }, [refreshToken, logOut, navigate]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
