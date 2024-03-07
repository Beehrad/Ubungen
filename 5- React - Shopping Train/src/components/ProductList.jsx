import React, { useEffect, useState } from "react";
import { useCartContext } from "../cartContext/cartContext";

export default function ProductList({ products }) {
  const { cart, dispatch } = useCartContext();
  const itemExist = (id) => {
    return cart.some((kart) => kart.id === id);
  };

  return (
    <div className="container">
      <h2>{cart?.length}</h2>
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
              <button
                onClick={() => dispatch({ type: "ADDTOCARD", payload: item })}
                disabled={itemExist(item.id)}
                className={
                  itemExist(item.id)
                    ? "bg-red-200 text-green-900 mt-10 w-full py-4 px-10 rounded-[8px] transition-all"
                    : "bg-green-200 text-green-900 mt-10 w-full py-4 px-10 rounded-[8px] hover:bg-green-900 hover:text-green-200 transition-all"
                }
              >
                addToCard
              </button>
              {cart.map((kart) => {
                if (kart.id === item.id) {
                  return (
                    <div
                      key={kart.id}
                      className="flex justify-around gap-4 mt-4 items-center"
                    >
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: kart.id })
                        }
                        className="bg-blue-400 font-bold rounded-xl p-2 pt-6"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "MINUS_QUANTITY", payload: kart.id })
                        }
                        className="bg-red-400 font-bold text-4xl rounded-xl p-2 "
                      >
                        -
                      </button>
                      <span>{kart.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch({ type: "PLUS_QUANTITY", payload: kart.id })
                        }
                        className="bg-green-400 font-bold text-4xl rounded-xl p-2"
                      >
                        +
                      </button>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
