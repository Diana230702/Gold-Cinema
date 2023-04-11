import React from "react";
import AdminPage from "../pages/AdminPages/AdminPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "*", element: <NotFoundPage />, id: 2 },
    { link: "/admin", element: <AdminPage />, id: 1 },
  ];
  return <div></div>;
};

export default MainRoutes;
