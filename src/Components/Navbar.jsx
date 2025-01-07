import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Navbar = ({ theme, changeTheme }) => {
  return (
    <nav
      className={
        theme
          ? "bg-[#0B0B29] px-8 py-3 flex items-center justify-between"
          : "bg-purple-500 px-8 py-3 flex items-center justify-between"
      }
    >
      <h1
        className={
          theme
            ? "text-purple-300 text-xl md:text-2xl font-semibold"
            : "text-purple-950 text-xl md:text-2xl font-semibold"
        }
      >
        Tailwind App
      </h1>
      <button
        onClick={() => changeTheme()}
        className="font-medium bg-purple-700 text-purple-100 px-2 md:px-4 py-1 md:py-2 rounded hover:bg-purple-800 duration-200"
      >
        {theme === true ? "Light Theme" : "Dark Theme"}
      </button>
    </nav>
  );
};

export default Navbar;
