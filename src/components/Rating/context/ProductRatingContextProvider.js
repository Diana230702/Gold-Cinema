import React, { Children, createContext, useContext } from "react";
export const RatingContext = createContext();
export const useRating = useContext(RatingContext);

const ProductRatingContextProvider = ({ children }) => {
  const values = {};
  return (
    <RatingContext.Provider value={values}>{children}</RatingContext.Provider>
  );
};

export default ProductRatingContextProvider;
