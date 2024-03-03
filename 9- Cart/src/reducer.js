const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "ADDQUA":
      const newq = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.que };
        }
        return item
      });
      console.log(newq)
      return {
        ...state,
        cart: newq,
        total: 0,
        amount : 0
      };
  }
};
export default reducer;
