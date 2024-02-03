import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import useLocalHook from "./hooks/useLocalHook";

const Search = ({setSearchTerm , searchTerm})=>{
  function milad(event){
    setSearchTerm(event.target.value)
  }

    return(
      <div>
        <label htmlFor="search">Search</label>
        <input onChange={milad} type="text" id="search" value={searchTerm}/>
      </div>
    )
};


export default Search;