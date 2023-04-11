import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);
export const API = "http://34.173.115.25/api/v1";

const AuthContexProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (formData) => {
    // * сюда нужно поставить загрузку
    try {
      const resulst = await axios.post(`${API}/account/register`, formData);
    } catch (error) {
      console.log(error);
      setError(Object.values(error.response.data).flat()[0]);
    }
  };

  let values = { handleRegister };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContexProvaider;
