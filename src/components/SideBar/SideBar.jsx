import React, { useState } from "react";

import Search from "./Search/Search";
import { useProducts } from "../../contexts/ProductContextProvider";
import Filter from "./Filter/Filter";
const SideBar = ({ products }) => {
  const {} = useProducts();
  //   console.log(search_start_form);
  return (
    <div className="side_bar_style">
      <Search />
      <Filter products={products} />
    </div>
  );
};

export default SideBar;
