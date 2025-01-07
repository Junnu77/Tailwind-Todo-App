import React, { useContext } from "react";
import Card from "./Card";
import TodoContext from "../context/TodoContext";

const CardContainer = ({ theme }) => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="my-3 grid grid-cols-1 md:grid-cols-4 gap-4">
      {todos.map((todo) => {
        return <Card todo={todo} key={todo.id} theme={theme} />;
      })}
    </div>
  );
};

export default CardContainer;
