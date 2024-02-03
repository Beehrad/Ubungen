import React, { useEffect, useState } from "react";
import Search from "./components/search";
import Stories from "./components/Stories";
import Name from "./components/Name";
import useLocalHook from "./components/hooks/useLocalHook";

const App = () => {
  const [name, setName] = useState("Behrad");
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search") || "");

  const [story, setStory] = useState([
    {
      id: 1,
      title: "car",
      city: "bandar",
    },
    {
      id: 2,
      title: "maschin",
      city: "tehran",
    },
    {
      id: 3,
      title: "wohnung",
      city: "ahvaz",
    },
    {
      id: 4,
      title: "motor",
      city: "booshehr",
    },
  ]);
  useEffect(()=>{
    localStorage.setItem("search" , searchTerm)
  },[searchTerm])

  const searchStories = story.filter((item) => {
    if (item.title.includes(searchTerm)) {
      return item;
    }
  });

  return (
    <div>
      <h1>Hello {name}</h1>
      <Name setName={setName} />
      <Search setSearchTerm={setSearchTerm}  searchTerm={searchTerm}/>
      <Stories searchStories={searchStories} />
    </div>
  );
};
export default App;
