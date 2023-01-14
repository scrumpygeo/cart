import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data.js'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
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

  return (
    <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider >
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }