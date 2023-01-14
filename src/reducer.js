const reducer = (state, action) => {

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload }
  }
  return {
    ...state
  }
  throw new Error("requested action types don't exist")
}

export default reducer