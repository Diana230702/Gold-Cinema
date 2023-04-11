import React from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";

const ProductList = () => {
  return (
    <div className="productList_wrapper">
      <ProductCard />
    </div>
  );
};

export default ProductList;
