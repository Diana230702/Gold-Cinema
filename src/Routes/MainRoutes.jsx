import React from "react";
import AdminPage from "../pages/AdminPages/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductList from "../components/products/ProductList";
import { Route, Routes } from "react-router-dom";
import FormOrder from "../components/FormOrder/FormOrder";

import AuthPage from "../pages/AuthPage/AuthPage";
import CartPage from "../pages/CartPage/CartPage";
import EditProduct from "../components/products/EditProduct";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "*", element: <NotFoundPage />, id: 2 },
    { link: "/admin", element: <AdminPage />, id: 3 },
    { link: "/productList", element: <ProductList />, id: 4 },
    { link: "/formOrder", element: <FormOrder />, id: 5 },
    { link: "/auth", element: <AuthPage />, id: 7 },
    { link: "/forgotPassword", element: <ForgotPasswordPage />, id: 9 },
    { link: "/resetPassword", element: <ResetPasswordPage />, id: 10 },
    { link: "/cart", element: <CartPage />, id: 8 },
    { link: "/edit/:id", element: <EditProduct />, id: 8 },
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
