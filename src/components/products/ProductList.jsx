import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import "../products/Products.css";
import { useProducts } from "../../contexts/ProductContextProvider";
import SideBar from "../SideBar/SideBar";
import Filter from "../SideBar/Filter/Filter";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productList_wrapper">
      <div className="productList-films">
        <SideBar products={products} />
      </div>
    </div>
  );
};

export default ProductList;

// {products.map((item) => (
// {/* <ProductCard key={item.id} item={item} /> */}
// ))}
