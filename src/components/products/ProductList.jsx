import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";
import { useProducts } from "../../contexts/ProductContextProvider";

import SideBar from "../SideBar/SideBar";
import Filter from "../SideBar/Filter/Filter";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products, pages } = useProducts();
  console.log(localStorage.getItem("token"));

  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  function getPagesCount() {
    let pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return <SideBar products={products} />;
};

export default ProductList;
