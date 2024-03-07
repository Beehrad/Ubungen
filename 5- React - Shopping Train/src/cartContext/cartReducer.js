const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCARD":
      const product = { ...action.payload, quantity: 1 };
      const newState = [...state, product];
      return newState;
    case "MINUS_QUANTITY":
      return state.map((item) => {
        if (item.id === action.payload && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    case "PLUS_QUANTITY":
      return state.map((item) => {
        if (item.id === action.payload && item.quantity > 0) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload)
    default:
      return state;
  }
};

export default cartReducer;

[{}, {}];
