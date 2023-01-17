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
  const increaseItem = (id) => {
    dispatch({ type: 'INCREASE_ITEM', payload: id })
  }
  const decreaseItem = (id) => {
    dispatch({ type: 'DECREASE_ITEM', payload: id })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem, increaseItem, decreaseItem }}>
      {children}
    </AppContext.Provider >
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }