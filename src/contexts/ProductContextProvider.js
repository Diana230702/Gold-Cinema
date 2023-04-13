import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
const API = " http://localhost:8000/products";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
}
const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    year: "",
    country: "",
    director: "",
  });

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

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getProducts = async () => {
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
    product,
    products: state.products,
    setProduct,
    deleteProduct,
    useProducts,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
