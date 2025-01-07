import React, { useContext } from "react";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import TodoContext from "../context/TodoContext";
const Card = ({ todo, theme }) => {
  const { deleteTodo, editTodo } = useContext(TodoContext);
  return (
    <div
      className={
        theme
          ? "bg-purple-200 p-5 rounded border shadow-md relative mt-1"
          : "p-5 rounded border shadow-md relative mt-1"
      }
    >
      <h1 className="text-xl font-semibold text-purple-900 my-1">
        {todo.title}
      </h1>
      <p className="text-sm font-normal text-purple-700">{todo.description}</p>

      <div className="flex space-x-5 absolute top-3 right-7">
        <button
          onClick={() => editTodo(todo)}
          className="text-yellow-500 text-lg"
        >
          <FaRegEdit />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600 text-lg"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Card;
