import React, { useState } from "react";
import ProductCard from "../../products/ProductCard";
import "../Filter/Filter.css";
const Filter = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("всe");

  const categories = [
    "все",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) =>
    selectedCategory === "все" ? true : product.category === selectedCategory
  );

  return (
    <div className="filter__page">
      <span className="choose__category">Выберите категорию:</span>
      {categories.map(
        (category) => (
          console.log(category),
          (
            <button
              className="category__btn"
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                fontWeight: selectedCategory === category ? "bold" : "normal",
                backgroundColor:
                  selectedCategory === category ? "red" : "black",
                border: selectedCategory === category ? "black" : "black ",
                color: selectedCategory === category ? "white" : "white ",
              }}
            >
              {category}
            </button>
          )
        )
      )}
      {filteredProducts.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Filter;
{
  /* <CardProduct item={item} key={item.id} /> */
}
