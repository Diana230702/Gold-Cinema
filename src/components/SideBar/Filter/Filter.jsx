import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../../products/ProductCard";
import "../Filter/Filter.css";
import Search from "../Search/Search";

const Filter = ({ products }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.click();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("всe");

  const categories = [
    "все",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) =>
    selectedCategory === "все" ? true : product.category === selectedCategory
  );

  return (
    <div className="search_div">
      <Search />
      <div className="productList-films">
        <span className="choose__category">Выберите категорию:</span>
        {categories.map((category) => (
          <button
            ref={buttonRef}
            className="category__btn"
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              fontWeight: selectedCategory === category ? "bold" : "normal",
              backgroundColor: selectedCategory === category ? "red" : "black",
              border: selectedCategory === category ? "black" : "black ",
              color: selectedCategory === category ? "white" : "white ",
            }}
          >
            {category}
          </button>
        ))}
        <div className="filter__page">
          {filteredProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
{
}
