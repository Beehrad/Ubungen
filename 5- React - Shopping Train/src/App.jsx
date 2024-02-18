import { useEffect, useReducer, useState } from "react";
import Header from "./components/Header/Header";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProduct] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [filterItems,setFilterItems] = useState(products);
  
  useEffect(() => {
    const fetchBe = async()=>{
      const lists = await fetch("https://fakestoreapi.com/products");
      const res = await lists.json();
      setProduct(res);
      setFilterItems(res);
    }
    fetchBe();
  }, []);
  

  useEffect(()=>{
    if(selectCategory !== ""){
    setFilterItems([]);
    products.filter((item) => {
        if (item.category === selectCategory) {
          setFilterItems((items)=> [...items,item]);
        }
      });
    }else{
      setFilterItems(products)
    }
  },[selectCategory])
  

  const renderContent = () => {
    if (filterItems.length === 0 || products.length === 0 ) {
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
