import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Header from "./komponents/Header";
import CategoryList from "./komponents/CategoryList";
import ProductItems from "./komponents/productItems";

function App() {
  const [products,setProduct] = useState([]);
  
  useEffect(()=>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((response)=> response.json())
    .then((data)=> setProduct(data))
  },[])
  
  const renderContent = ()=>{
    if(products.length ===0){
      return <h5 className="container">loading ...</h5>
    }else{
     return <ProductItems products={products} />
    }
  }
  
  return (
    <div>
      <Header />
      <CategoryList />
      {renderContent()}
    </div>
  );
}

export default App;
