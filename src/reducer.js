const reducer = (state, action) => {

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'INCREASE_ITEM') {
    let newCart = state.cart.map(item => {
      if (item.id === action.payload) {
        return {
          ...item,
          amount: item.amount + 1
        }
      }
      return item
    })
    return {
      ...state, cart: newCart

    }
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