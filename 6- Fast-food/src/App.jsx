import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";
import axios from "axios";
import API from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notfound from "./assets/images/404.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodsItems, setFastFoods] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await API.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false)
    setFastFoods(response)
  };

  const renderContent = ()=>{
    if(loading){
      return <Loading theme="dark" />
    }
    if (fastFoodsItems.length === 0){
      return(
        <>
        <div className="alert alert-warning text-center">
          برای کلیدواژه فوق هیچ آیتمی یافت نشد
        </div>
        <img className="mx-auto mt5 d-block" src={notfound}/>
        </>
      )
    }
    return <FastFoodList fastFoodsItems={fastFoodsItems} />
  }

  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = (categoryId)=>{
    fetchData(categoryId);
  }
  
  const searchItems = async(term) =>{
    setLoading(true);
    const response = await API.get(
      `FastFood/search/${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoods(response)
  }

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterItems={filterItems} >
          <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
