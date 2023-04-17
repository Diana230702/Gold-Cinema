import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import "../products/Products.css";
import { IconButton } from "@mui/material";
import { TurnedIn } from "@mui/icons-material";
import { useFavorite } from "../../contexts/FavoriteContextProvider";
import { useContext } from "react";

const ProductCard = ({ item }) => {
  const { postFavoriteProduct, deleteFavoriteProduct } = useFavorite();
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <div className="vvv">
      <div className="productCard_card">
        <img className="productCard_img" src={item.image} alt="" />
        <p className="productCard_p">{item.title}</p>
        <p>{item.year}</p>
        <p className="productCard_p">{item.price}</p>

        <button
          className="edit-btn"
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteProduct(item.id)}>
          Delete{" "}
        </button>
        <IconButton onClick={() => postFavoriteProduct(item)}>
          <TurnedIn sx={{ color: "white" }} />
        </IconButton>
        <button>
          <a href={item.film}>watch now</a>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
