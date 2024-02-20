import React from "react";
import _ from "lodash";

export default function Pagination({ pages, setPage, activpag }) {
    const prevPage = (event) => {
    event.preventDefault();
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages;
      }
      return prevPage;
    });
  };
  const nextPage = (event) => {
    event.preventDefault();
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pages) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  return (
    <nav className="flex justify-center mt-5 gap-10">
      <li className="" onClick={prevPage}>
        <a href="">Previus</a>
      </li>
      {_.times(pages, (index) => {
        return (
          <li
            key={`pagination-` + index}
            className={`page-item ${index + 1 === activpag ? "active" : ""}`} 
            onClick={() => setPage(index + 1)}
          >
            <a className="page-link" href="#">
              {index + 1}
            </a>
          </li>
        );
      })}
      <li className="" onClick={nextPage}>
        <a href="">Next</a>
      </li>
    </nav>
  );
}
