import React, { useEffect, useState } from "react";
import API from "../axios";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await API.get("/FoodCategory/categories");
      setCategories(response);
    };
    fetchCategories();
  }, []);

  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 py-4 shadow"
        style={{ height: "80px" }}
      >
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              همه فست فودها
            </a>
          </li>
          {
            categories.map((category)=>{
               return <li className="nav-item" key={category.id}>
                <a className="nav-link" href="#">
                  {category.name}
                </a>
              </li>
            })
          }
        </ul>
      </div>
    </nav>
  );
}
