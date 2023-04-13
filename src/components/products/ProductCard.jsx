import React from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import "../products/Products.css";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  return (
    <div className="vvv">
      <div className="productCard_card">
        <img className="productCard_img" src={item.image} alt="" />
        <p className="productCard_p">{item.title}</p>
        <p>{item.year}</p>
        <p className="productCard_p">{item.price}</p>

        <button className="edit-btn">Edit</button>
        <button className="delete-btn" onClick={() => deleteProduct(item.id)}>
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
