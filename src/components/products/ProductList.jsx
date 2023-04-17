import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import PaginationList from "./PaginationList";

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
  }, []);

  return (
    <div className="productList_wrapper">
      <div className="productList-films">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <PaginationList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getPagesCount={getPagesCount}
      />
    </div>
  );
};

export default ProductList;
