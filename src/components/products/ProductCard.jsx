import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import "../products/Products.css";
import { IconButton } from "@mui/material";
import { TurnedIn } from "@mui/icons-material";
import { useFavorite } from "../../contexts/FavoriteContextProvider";
import { useContext } from "react";
import { useAuth } from "../../contexts/auth/AuthProvider";
const ADMIN = "admin@gmail.com";

const ProductCard = ({ item }) => {
  const ADMIN = '{"user":"admin@gmail.com"}';
  const { postFavoriteProduct, deleteFavoriteProduct } = useFavorite();
  const userEmail = localStorage.getItem("user");
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  return (
    <div className="vvv">
      <div className="productCard_card">
        <img className="productCard_img" src={item.image} alt="" />
        <p className="productCard_p">{item.title}</p>
        <p>{item.year}</p>
        <p className="productCard_p">{item.price}</p>

        {userEmail === ADMIN ? (
          <>
            <button
              className="edit-btn"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteProduct(item.id)}
            >
              Delete{" "}
            </button>
          </>
        ) : null}
        <IconButton onClick={() => postFavoriteProduct(item)}>
          <TurnedIn sx={{ color: "white" }} />
        </IconButton>
        <button>
          <a href={item.film}>watch now</a>
        </button>
        <input
          value={comment}
          onChange={(ivent) => setComment(ivent.target.value)}
          placeholder="WriteyourPenis"
        ></input>
        {/* <button onClick={() => commentProduct({ body: comment, owner: user.id, product: item.id })}>
          send
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
