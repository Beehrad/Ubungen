import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Header from "./komponents/Header";
import CategoryList from "./komponents/CategoryList";


function App() {
  return (
    <div>
      <Header />
      <CategoryList />
      {/* <Content /> */}
    </div>
  );
}

export default App;
