import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import SideBar from "../SideBar/SideBar";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productList_wrapper">
      <SideBar />
      <div className="productList-films">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
