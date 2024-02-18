import React from "react";

export default function ProductList({ products }) {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-5">
        {products.map((item) => {
          return (
            <div key={`${item.id}-${item.price}`} className="bg-white rounded-[20px] p-8 flex flex-col justify-center items-center">
              <img className="w-auto h-[250px] object-cover mb-10" src={item.image} />
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-row justify-between gap-10 w-full px-10 mt-10">
                <span>Price:</span>
                <b>{item.price}$</b>
              </div>
              <button className="bg-green-200 text-green-900 mt-10 w-full py-4 px-10 rounded-[8px] hover:bg-green-900 hover:text-green-200 transition-all">addToCard</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
