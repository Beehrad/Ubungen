import React, { useEffect, useState } from "react";
import { useCartContext } from "../cartContext/cartContext";
import AddTocard from "./AddTocard";

export default function ProductList({ products }) {


  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-5">
        {products.map((item) => {
          return (
            <div
              key={`${item.id}-${item.price}`}
              className="bg-white rounded-[20px] p-8 flex flex-col justify-center items-center"
            >
              <img
                className="w-auto h-[250px] object-cover mb-10"
                src={item.image}
              />
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-row justify-between gap-10 w-full px-10 mt-10">
                <span>Price:</span>
                <b>{item.price}$</b>
              </div> 
              <AddTocard item={item}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
