import { useEffect, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/komponents/Header";
import Content from "./assets/komponents/Content";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_Value":
      return action.payload;
    default:
      state;
  }
};

function App() {
  const [product , dispachtedProduct] = useReducer(productReducer , [])

  useEffect(() => {
    const neu =fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json)
      .then((pro) => console.log(pro));
    }, [product]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
