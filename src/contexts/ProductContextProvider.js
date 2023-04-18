import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import React, { createContext, useContext, useReducer, useState } from 'react';
const API = 'http://35.198.103.37';

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 16),
      };
    case 'GET_ONE_PRODUCT':
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
}
const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // function moreRepeatFunction() {
  //   const tokens = JSON.parse(localStorage.getItem("token"));
  //   const Authorization = `Bearer ${tokens}`;

  //   const config = {
  //     headers: {
  //       Authorization,
  //     },
  //   };
  //   return config;
  // }
  // ! get request //

  const getProducts = async () => {
    try {
      const tokens = localStorage.getItem('token');
      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/products/${window.location.search}`, config);
      dispatch({ type: 'GET_PRODUCTS', payload: res.data });
      console.log(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // ! get request //

  // ! create request //
  const createProduct = async (product) => {
    try {
      const tokens = localStorage.getItem('token');

      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/products/`, product, config);
      navigate('productList');
    } catch (error) {
      console.log(error);
    }
  };
  // ! create request //

  // ! delete //

  const deleteProduct = async (id) => {
    try {
      const tokens = localStorage.getItem('token');

      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // ! delete //

  // !edit //

  const editProduct = async (id, editedProduct) => {
    try {
      const tokens = localStorage.getItem('token');

      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.patch(`${API}/products/${id}/`, editedProduct, config);
      getProducts();
      navigate('/productList');
    } catch (error) {
      console.log(error);
    }
  };

  // !edit //

  // ! getOneProduct//

  const getOneProduct = async (id) => {
    try {
      const tokens = localStorage.getItem('token');

      const Authorization = `Bearer ${tokens}`;

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/products/${id}/`, config);
      dispatch({ type: 'GET_ONE_PRODUCT', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  // ! oneProduct//

  //! LikeProduct
  const likeProduct = async (body) => {
    try {
      const tokens = localStorage.getItem('token');
      const Authorization = `Bearer ${tokens}`;
      console.log(Authorization);

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/likes/`, body, config);
      // dispatch({ type: 'GET_PRODUCTS', payload: res.data });
      console.log(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //! EndLikeProduct
  //! CommentProduct
  const CommentProduct = async (body) => {
    try {
      const tokens = localStorage.getItem('token');
      const Authorization = `Bearer ${tokens}`;
      console.log(Authorization);

      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/comments/`, body, config);
      // dispatch({ type: 'GET_PRODUCTS', payload: res.data });
      console.log(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  //! EndCommentProduct
  // * Search
  const liveSearch = async () => {
    const res = await axios.get(`${API}/products/${window.location.search}`);
  };
  // ! search

  // // *Pagination
  // const PaginationCount = async () => {
  //   const res = await axios.get(`${API}/products/`);
  //   let count = res.data.count / 16.Math.;
  //   console.log(count);
  //   return count;
  // };

  // const PaginationLimit = () => {
  //   let countPages = PaginationCount();
  //   console.log(countPages);
  // };
  // PaginationLimit();
  const values = {
    createProduct,
    deleteProduct,
    products: state.products,
    getProducts,
    deleteProduct,
    editProduct,
    oneProduct: state.oneProduct,
    getOneProduct,
    pages: state.pages,
    liveSearch,
    pages: state.pages,
    likeProduct,
    CommentProduct,
  };

  return <productContext.Provider value={values}>{children}</productContext.Provider>;
};

export default ProductContextProvider;
