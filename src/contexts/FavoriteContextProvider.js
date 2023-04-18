import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "./ProductContextProvider";

//! -------------- API -----------------

const API = "http://35.198.103.37";

//! -------------- API -----------------

export const favoriteContext = createContext();
export const useFavorite = () => useContext(favoriteContext);

const INIT_STATE = {
  favoriteProducts: [],
  oneFavoriteProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "POST_FAVORITE_PRODUCTS":
      return { ...state, favoriteProducts: action.payload.results };

    case "DELETE_FAVORITE_PRODUCT":
      return { ...state, oneFavoriteProduct: action.payload };

    default:
      return state;
  }
}

const FavoriteContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! --------------- toggle favorite products -----------

  const toggleFavoriteProduct = async (product) => {
    try {
      const tokens = localStorage.getItem("token");
      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const existingFavorite = await axios.get(
        `${API}/favorite/?product=${product.id}`,
        config
      );

      if (existingFavorite.data.length > 0) {
        await axios.delete(
          `${API}/favorite/${existingFavorite.data[0].id}/`,
          config
        );
      } else {
        await axios.post(`${API}/favorite/`, { product: product.id }, config);
      }

      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };
  //! --------------- post favorite products -----------

  const postFavoriteProduct = async (product) => {
    try {
      const tokens = localStorage.getItem("token");
      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/favorite/`, { product: product.id }, config);
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  //! --------------- delete favorite products -----------

  const deleteFavoriteProducts = async (product) => {
    try {
      const tokens = localStorage.getItem("token");
      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}/favorite/${product}`, config);
      dispatch({ type: "DELETE_FAVORITE_PRODUCT", payload: res.data });
      console.log(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //!---------------------- get one fav product ----------------

  const values = {
    toggleFavoriteProduct,
    postFavoriteProduct,
    deleteFavoriteProducts,
  };

  return (
    <favoriteContext.Provider value={values}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
