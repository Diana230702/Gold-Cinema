import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import SideBar from "../SideBar/SideBar";
import Filter from "../SideBar/Filter/Filter";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  console.log(localStorage.getItem("token"));
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return <SideBar products={products} />;
};

export default ProductList;
