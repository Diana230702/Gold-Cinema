import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  console.log(localStorage.getItem("token"));

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
    </div>
  );
};

export default ProductList;
