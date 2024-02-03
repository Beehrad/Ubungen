import React from "react";

export default function Stories({ searchStories }) {
  return (
    <div>
      <ul>
        {searchStories.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
