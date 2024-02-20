import React from "react";
import _ from "lodash";

export default function Pagination({ pages, setPage, activpag }) {
  return (
    <nav className="flex justify-center mt-5 gap-10">
      <li className="">
        <a href="">Previus</a>
      </li>
      {_.times(pages, (index) => {
        return (
          <li
            key={`pagination-` + index}
            className={`page-item ${index + 1 === activpag ? "active" : ""}`}
            onClick={()=> setPage(index + 1)}
          >
            <a className="page-link" href="#">
              {index + 1}
            </a>
          </li>
        );
      })}
      <li className="">
        <a href="">Next</a>
      </li>
    </nav>
  );
}
