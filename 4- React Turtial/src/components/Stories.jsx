import React from "react";

export default function Stories({ searchStories , removeStory}) {
  const removeBtn = (id)=>{
    removeStory(id)
  }
  return (
    <div>
      <ul>
        {searchStories.map((item) => {
          return(
          <li key={item.id}>
            {item.title}
          <button onClick={()=>removeBtn(item.id)}>remove</button>
          </li>)
           
        })}
      </ul>
    </div>
  );
}
