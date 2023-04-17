import React, { useEffect, useState } from "react";
import "../CartPage/CartPage.css";
import { useFavorite } from "../../contexts/FavoriteContextProvider";
import ProductCard from "../../components/products/ProductCard";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const CartPage = () => {
  const { getOneProduct, oneProduct } = useProducts();

  const [isFavorite, setFavorite] = useState(oneProduct?.is_favorite);

  useEffect(() => {
    getOneProduct();
  }, []);
  console.log(oneProduct);

  const navigate = useNavigate();

  const {} = useFavorite();
  console.log(localStorage.getItem("token"));

  // return (
  // <div className="favorite-wrapper">
  //   {favoriteProducts?.map((item) => {
  //     <ProductCard key={item.id} item={item} />;
  //   })}
  // </div>
  // )
};

export default CartPage;
