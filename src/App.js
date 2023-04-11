import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import AuthContex from "./contexts/AuthContexProvaider";
import AuthContexProvaider from "./contexts/AuthContexProvaider";

const App = () => {
  return (
    <div>
      <AuthContexProvaider>
        <Navbar />
        <MainRoutes />
      </AuthContexProvaider>
    </div>
  );
};

export default App;
