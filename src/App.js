import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import AuthContex from "./contexts/AuthContexProvaider";
import AuthContexProvaider from "./contexts/AuthContexProvaider";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <AuthContexProvaider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </AuthContexProvaider>
    </div>
  );
};

export default App;
