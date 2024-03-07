import React, { useEffect } from "react";
import { useCartContext } from "../cartContext/cartContext";


export default function AddTocard({item}) {
    const { cart, dispatch } = useCartContext();
    const itemExist = (id) => {
      const mil = cart.some((kart) => kart.id === id );
      return mil
    };

    useEffect()
  return (
    <div>
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
                      className="flex justify-start gap-4 mt-4 items-center"
                    >
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: kart.id })
                        }
                        className="bg-blue-400 font-bold rounded-xl  p-2 pt-6"
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
}
