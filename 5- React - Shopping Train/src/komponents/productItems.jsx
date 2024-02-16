import React from "react";

export default function ProductItems({ products }) {
  return (
    <div className="productItems">
      {products.map((item) => {
        return (
          <div key={item.id} className="product">
            <img src="" />
            <h5>{item.title}</h5>
            <div className="info">
              <p>price</p>
              <span>13$</span>
            </div>
            <button>addToCard</button>
          </div>
        );
      })}
    </div>
  );
}
