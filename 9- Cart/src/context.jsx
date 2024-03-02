import { createContext, useReducer } from "react";
import { useContext } from "react";
import cartItems from "./data";
import reducer from "./reducer"


const CartContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const UseCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, UseCartContext };
