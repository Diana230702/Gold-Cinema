import axios from "axios";
import { useNavigate } from "react-router-dom";

import React, { createContext, useContext, useReducer, useState } from "react";
const API = " http:/35.198.103.37";

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
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access}`;

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
      moreRepeatFunction();
    } catch (error) {}
    const { data } = await axios.get(`${API}`);
    dispatch({ type: "GET_PRODUCTS", payload: data });
  };

  // ! get request //

  // ! create request //
  const addProduct = async (product) => {
    await axios.post(API, product);
    getProducts();
    console.log(product);
  };
  // ! create request //

  // ! delete //

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  // ! delete //

  const values = {
    getProducts,
    addProduct,
    deleteProduct,
  };

  // !edit //
  async function saveEditProduct(id) {
    await axios.patch(`${API}/${id}`);
    getProducts();
  }
  // !edit //

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
