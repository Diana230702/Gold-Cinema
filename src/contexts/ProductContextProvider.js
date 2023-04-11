import React from "react";
const API = "http://34.173.115.25/api/v1";

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
  const values = {};
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
