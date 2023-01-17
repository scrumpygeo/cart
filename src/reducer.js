const reducer = (state, action) => {

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload)
    }
  }
  return {
    ...state
  }
  // if at end of above you reach here:
  throw new Error("⚠️ Requested action types don't exist.")
}

export default reducer