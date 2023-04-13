import React, {useContext, useReducer} from 'react';
import { AuthContext } from "./AuthContext";
import axios from "axios";
import {implementErrorWithAction, implementSuccessWithAction} from "../../helpers/implementAction"
import { useApp } from '../app/AppProvider';

const API_URL = 'http://34.173.115.25/api/v1'

const LOGIN = 'account/login'
const REGISTER = 'account/register'
const REFRESH = 'account/token/refresh'
const IS_AUTH = 'IS_AUTH'
const LIKES_CHANGE = 'LIKES_CHANGE'
const SET_USER_LIKES = 'SET_USER_LIKES'
const REQUEST_ERROR = 'REQUEST_ERROR'


const TOKEN_FIELD = 'token'
const TOKEN_REFRESH_FIELD = 'refresh'
const USER_FIELD = 'user'


const initialState = {
  user: {},
  pending: false,
  error: {},
  isAuth: !!localStorage.getItem('token'),
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload
      }
    }
    case REQUEST_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    case IS_AUTH: {
      return {
        ...state,
        isAuth: action.payload
      }
    }
    case SET_USER_LIKES: {
      return {
        ...state,
        likes: action.payload
      }
    }
    case LIKES_CHANGE: {
      return {
        ...state,
        likes: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const { localStorageSetItem, localStorageRemoveAll, localStorageGetItemByKey } = useApp()
  const [userState, dispatch] = useReducer(reducer, initialState)

  const refreshToken = async () => {
    try {
      const refreshToken = localStorageGetItemByKey('refresh')

      const { data } = await axios.post(`${API_URL}/${REFRESH}/`, { refresh: refreshToken })

      localStorageSetItem(TOKEN_FIELD, data.access)
    } catch (error) {
      implementErrorWithAction(dispatch, REQUEST_ERROR, error)
    }
  }

  const registerRequest = async (newUser, onSuccess) => {
    try {
      const { data } = await axios.post(`${API_URL}/${REGISTER}/`, newUser)

      console.log(data)

      onSuccess()
    } catch (error) {
      implementErrorWithAction(dispatch, REQUEST_ERROR, error)
    }
  }

  const loginRequest = async (userCredentials, onSuccess) => {
    try {
      const { data } = await axios.post(`${API_URL}/${LOGIN}/`, userCredentials)
      implementSuccessWithAction(dispatch, LOGIN, data.user)

      localStorageSetItem(TOKEN_FIELD, data.access)
      localStorageSetItem(TOKEN_REFRESH_FIELD, data.refresh)
      localStorageSetItem(USER_FIELD, JSON.stringify({ user: userCredentials.email }))

      implementSuccessWithAction(dispatch, IS_AUTH, true)
      onSuccess()
    } catch (error) {
      implementErrorWithAction(dispatch, REQUEST_ERROR, error)
    }
  }

  const logOut = () => {
    localStorageRemoveAll()
    implementSuccessWithAction(dispatch, IS_AUTH, false)
  }

  const defaultValue = {
    registerRequest,
    loginRequest,
    logOut,
    refreshToken,
    user: userState.user,
    isAuth: userState.isAuth,
    userLoading: userState.pending,
  }

  return (
    <AuthContext.Provider value={defaultValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;