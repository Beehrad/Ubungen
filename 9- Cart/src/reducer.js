import Cart from "./Components/cart";
import  { sumAmount , sumTotal } from "./sumTotal";

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      const filteredCart = state.cart.filter((item) => item.id !== action.payload)
      return {
        ...state,
        cart: filteredCart,
        total : sumTotal(filteredCart),
        amount : sumAmount(filteredCart),
      };
    case "ADDQUA":
      const newq = state.cart.map((item) => {
        if (item.id === action.payload.id && action.payload.que >= 0 ) {
          return { ...item, quantity: action.payload.que};
        }
        return item
      });
      return {
        ...state,
        cart: newq,
        total: sumTotal(newq),
        amount : sumAmount(newq)
      };
  }
};
export default reducer;
