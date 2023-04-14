import axios from "axios";
import { useNavigate } from "react-router-dom";

import React, { createContext, useContext, useReducer, useState } from "react";
const API = " http://35.198.103.37";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload.results };

    default:
      return state;
  }
}
const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function moreRepeatFunction() {
    const tokens = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${tokens}`;

    const config = {
      headers: {
        Authorization,
      },
    };
    return config;
  }
  // ! get request //

  const getProducts = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/products/`, config);
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  // ! get request //

  // ! create request //
  const createProduct = async (product) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/products/`, product, config);
      navigate("productList");
    } catch (error) {
      console.log(error);
    }
  };
  // ! create request //

  // ! delete //

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  // ! delete //

  // !edit //
  async function saveEditProduct(id) {
    await axios.patch(`${API}/${id}`);
    getProducts();
  }
  // !edit //
  const values = {
    createProduct,
    deleteProduct,
    products: state.products,
    getProducts,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
