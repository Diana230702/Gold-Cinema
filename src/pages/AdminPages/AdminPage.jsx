import React from "react";
import AddProduct from "../../components/products/AddProduct";
import {
  productContext,
  useProducts,
} from "../../contexts/ProductContextProvider";
import "../AdminPages/AdminPage.css";

const AdminPage = () => {
  return (
    <div>
      <AddProduct />
    </div>
  );
};

export default AdminPage;
