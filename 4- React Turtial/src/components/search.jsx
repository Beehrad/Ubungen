import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import useLocalHook from "./hooks/useLocalHook";

const Search = ({id, label ,value , setSearchTerm , type="text"})=>{
  function milad(event){
    setSearchTerm(event.target.value)
  }

    return(
      <div>
        <label htmlFor={id}>{label}</label>
        <input onChange={milad} type={type} id={id} value={value}/>
      </div>
    )
};


export default Search;