import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
    </div>
  );
};

export default App;
