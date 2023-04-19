import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import SideBar from "../SideBar/SideBar";
import Filter from "../SideBar/Filter/Filter";
import { useSearchParams } from "react-router-dom";
import PaginationList from "../Pagination/Pagination";
import "../products/Products.css";
const ProductList = () => {
  const { getProducts, products, pages } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function getPagesCount() {
    let pageCountArr = [];
    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product_list">
      <SideBar products={products} />
      <PaginationList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getPagesCount={getPagesCount}
      />
    </div>
  );
};

export default ProductList;
