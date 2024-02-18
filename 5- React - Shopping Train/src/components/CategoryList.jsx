import React, { useEffect, useState } from "react";

export default function CategoryList({setSelectCategory}) {
  const [categories, setCategory] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  const renderContent = () => {
    if (categories.length === 0) {
      return <span className="container">loading ...</span>
    }else{
      return(
        <ul className="flex flex-wrap gap-6">
          <li className="font-semibold cursor-pointer" onClick={(e)=> setSelectCategory("")} >All Product</li>
          {categories.map((category) => {
            return (
              <li className="font-semibold cursor-pointer" key={category} onClick={(e)=> setSelectCategory(e.target.innerText)}>
                {category}
              </li>
            );
          })}
        </ul>
      )};
  }
    return (
      <div className="container pl-5 bg-white h-32 flex items-center rounded-3xl relative -top-16">
          {renderContent()}
        </div>

      );
    
  };
