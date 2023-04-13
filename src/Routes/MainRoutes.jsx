import React from "react";
import AdminPage from "../pages/AdminPages/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductList from "../components/products/ProductList";
import { Route, Routes } from "react-router-dom";
import FormOrder from "../components/FormOrder/FormOrder";
import Auth from "../components/Auth/Auth";
import Register from "../components/Auth/Register/Register";
import CartPage from "../pages/CartPage/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "*", element: <NotFoundPage />, id: 2 },
    { link: "/admin", element: <AdminPage />, id: 3 },
    { link: "/products", element: <ProductList />, id: 4 },
    { link: "/formOrder", element: <FormOrder />, id: 5 },
    { link: "/register", element: <Register />, id: 7 },
    { link: "/cart", element: <CartPage />, id: 8 },
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
