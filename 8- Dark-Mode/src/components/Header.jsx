import React from "react";
import { useThemeContext } from "../Context";

export default function Header() {
  const {darkMode , setDarkMode} = useThemeContext();
  // const darkMode = theme.darkMode;

  const changeTheme = ()=>{
    setDarkMode(!darkMode);
  }
  return (
    <header
      className={`${
        darkMode ? "bg-slate-800 text-slate-200" : "bg-sky-100"
      } h-32 font-semibold`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <ul className=" flex justify-start items-center ml-12 gap-16 ">
          <li className="">
            <a href="">Home Page</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">Conatct</a>
          </li>
        </ul>
        <button
        onClick={changeTheme}
          className={`${
            darkMode
              ? "bg-slate-200 text-slate-800"
              : "bg-slate-800 text-slate-200"
          } p-4 rounded-[8px]  mr-12`}
        >
            {darkMode ? "LightMode" : "DarkMode"}
          
        </button>
      </div>
    </header>
  );
}
