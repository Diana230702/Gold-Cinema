import React, { createContext } from "react";
export const ratingContext = createContext();
export const useRating = () => useContext(createContext);

const API = "http://35.198.103.37";
const GET_RAITING = `/products/{id}/ratings/`;
const RatingContextProvider = (children) => {
  const values = {};
  return <ratingContext.Provider>{children}</ratingContext.Provider>;
};

export default RatingContextProvider;
