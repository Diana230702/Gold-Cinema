import React from "react";
import AdminPage from "../pages/AdminPages/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductList from "../components/products/ProductList";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Auth/Register/Register";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "*", element: <NotFoundPage />, id: 2 },
    { link: "/admin", element: <AdminPage />, id: 3 },
    { link: "/productList", element: <ProductList />, id: 4 },
    { link: "/register", element: <Register />, id: 5 },
  ];
  return (
    <div>
      <>
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} key={item.id} />
          ))}
        </Routes>
      </>
    </div>
  );
};

export default MainRoutes;
