import { useContext } from "react";
import { createContext, useReducer } from "react";
import ProductReducer from "./productReducer";

const ProductsContext = createContext();

const initialState = {
  loading: true,
  data: [],
};

const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductContext = ()=> {
  return useContext(ProductsContext);
};

export { ProductProvider , useProductContext};
