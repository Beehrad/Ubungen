import { useEffect, useReducer, useState } from "react";
import Header from "./components/Header/Header";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";
import { useProductContext } from "./productContext";

function App() {
  // const [products, setProduct] = useState([]);
  const { state, dispatch } = useProductContext();
  const [filterItems, setFilterItems] = useState(state.data);
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    const fetchBe = async () => {
      const lists = await fetch("https://fakestoreapi.com/products");
      const res = await lists.json();
      dispatch({ type: "NEW_STATE", payload: res });
      setFilterItems(res);
    };
    fetchBe();
  }, []);

  useEffect(() => {
    if (selectCategory !== "") {
      setFilterItems([]);
      state.data.filter((item) => {
        if (item.category === selectCategory) {
          setFilterItems((items) => [...items, item]);
        }
      });
    } else {
      setFilterItems(state.data);
    }
  }, [selectCategory]);

  const renderContent = () => {
    if (filterItems.length === 0 || state.data.length === 0) {
      return <p className="container">Loading...</p>;
    }
    return <ProductList products={filterItems} />;
  };

  return (
    <div className="bg-slate-100">
      <Header />
      <CategoryList setSelectCategory={setSelectCategory} />
      {renderContent()}
    </div>
  );
}

export default App;
