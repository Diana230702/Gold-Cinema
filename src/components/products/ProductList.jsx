import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import SideBar from "../SideBar/SideBar";
import Filter from "../SideBar/Filter/Filter";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  console.log(localStorage.getItem("token"));

  useEffect(() => {
    getProducts();
  }, []);

  return <SideBar products={products} />;
};

export default ProductList;
