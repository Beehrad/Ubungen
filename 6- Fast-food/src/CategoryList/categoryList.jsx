import React, { useEffect, useState } from "react";
import API from "../axios";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";

export default function CategoryList({ filterItems }) {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await API.get("/FoodCategory/categories");
      setCategories(response);
      setLoading(false);
    };
    fetchCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    return (
      <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
        <ul className="nav">
          <li className="nav-item" onClick={() => filterItems()}>
            <a href="#" className="nav-link">
              همه فست فودها
            </a>
          </li>
          {categories.map((category) => {
            return (
              <li
                className="nav-item"
                key={category.id}
                onClick={() => filterItems(category.id)}
              >
                <a className="nav-link" href="#">
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
        <SearchBar />
      </div>
    );
  };

  return (
    <nav className="container mt-n5">
      <div
        className="d-flex align-items-center bg-white rounded-3 py-4 shadow"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
}
