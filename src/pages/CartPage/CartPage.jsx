import React, { useEffect, useState } from "react";
import "../CartPage/CartPage.css";
import { useFavorite } from "../../contexts/FavoriteContextProvider";
import ProductCard from "../../components/products/ProductCard";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const CartPage = () => {
  const navigate = useNavigate();
  const { getProducts, products } = useProducts();

  const [isFavorite, setFavorite] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  // function getFavorites() {
  //   const favorite = products?.filter((item) => item.is_favorite ? () : ());
  //   console.log(favorite);
  // }
  // getFavorites();
  // console.log(products);
  return (
    <div className="favorite-wrapper">
      {products.map((item) => {
        return item.is_favorite ? (
          <ProductCard key={item.id} item={item} />
        ) : null;
      })}
    </div>
  );
};

export default CartPage;
