import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data.js'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  // loading will be used later when connecting to api; here we are using local data  
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // don't need async await as local file but use anyway as aide memoire
  const fetchData = () => {
    dispatch({ type: "DISPLAY_ITEMS", payload: cartItems })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <AppContext.Provider value={{ ...state, clearCart }}>
      {children}
    </AppContext.Provider >
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }