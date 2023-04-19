import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductContextProvider from './contexts/ProductContextProvider';
import MainRoutes from './Routes/MainRoutes';
import Footer from './components/Footer/Footer';
import FavoriteContextProvider from './contexts/FavoriteContextProvider';

const App = () => {
  return (
    <FavoriteContextProvider>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        {/* <Footer /> */}
      </ProductContextProvider>
    </FavoriteContextProvider>
  );
};

export default App;
