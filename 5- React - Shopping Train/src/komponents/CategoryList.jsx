import React, { useEffect, useState } from "react";

export default function CategoryList() {
  const [categories, setCategory] = useState("");
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  console.log(categories);

  const renderContent = () => {
    if (categories.length === 0) {
      return <span>loading ...</span>;
    } else {
      return (
        <ul>
          <li>All Product</li>
          {categories.map((category) => {
            return (
              <li className="nav-item" key={category.id}>
                {category.name}
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return <div className="category">{renderContent()}</div>;
}
