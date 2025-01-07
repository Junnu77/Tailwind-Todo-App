import React, { useContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import CardContainer from "./Components/CardContainer";
import { TodoProvider } from "./context/TodoContext";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <TodoProvider>
      <div
        className={
          theme
            ? "bg-[#1f0533] relative min-h-screen pb-28"
            : "relative min-h-screen pb-28"
        }
      >
        <Navbar theme={theme} changeTheme={changeTheme} />
        <div className="container mx-auto px-4 my-4 drop-shadow-md">
          <Form theme={theme} />
          <CardContainer theme={theme} />
        </div>
        <Footer />
      </div>
    </TodoProvider>
  );
};

export default App;
