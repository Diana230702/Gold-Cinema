import React, { useContext } from 'react';
import { AppContext } from "./AppContext";

export const useApp = () => useContext(AppContext)

const AppProvider = ({ children }) => {

  const localStorageSetItem = (key, value) => {
    localStorage.setItem(key, value)
  }

  const localStorageGetItemByKey = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  const localStorageRemoveItemByKey = (key) => {
    localStorage.removeItem(key)
  }

  const localStorageRemoveAll = () => {
    localStorage.clear()
  }

  const defaultValue = {
    localStorageSetItem,
    localStorageGetItemByKey,
    localStorageRemoveItemByKey,
    localStorageRemoveAll
  }

  return (
    <AppContext.Provider value={defaultValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;