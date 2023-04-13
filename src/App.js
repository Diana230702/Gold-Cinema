import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./Routes/MainRoutes";
import AuthContex from "./contexts/AuthContexProvaider";
import AuthContexProvaider from "./contexts/AuthContexProvaider";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <AuthContexProvaider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </AuthContexProvaider>
    </div>
  );
};

export default App;
