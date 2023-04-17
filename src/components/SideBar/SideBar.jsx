import React, { useState } from "react";

// import Search from "./Search/Search";
import { useProducts } from "../../contexts/ProductContextProvider";
import Filter from "./Filter/Filter";
const SideBar = ({ products }) => {
  const {} = useProducts();

  return <Filter products={products} />;
};

export default SideBar;
