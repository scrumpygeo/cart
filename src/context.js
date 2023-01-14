import { useState, useContext, useReducer, useEffect } from 'react'
import cartItem from './data.js'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  totalCount: 0,
  totalValue: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={...state}>
      {childrend}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }