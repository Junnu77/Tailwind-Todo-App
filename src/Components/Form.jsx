import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../providers/TodoContext";

const Form = ({ theme }) => {
  const { addTodo, edit, updateTodo } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTodo = (e) => {
    e.preventDefault();
    edit.isEdit
      ? updateTodo({ id: edit.todo.id, title, description })
      : addTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleTodo(e)}
      className="flex items-center justify-center flex-col border-2 py-5 border-2 border-purple-200"
    >
      <input
        type="text"
        placeholder="Enter Title"
        className={
          theme
            ? "bg-purple-100 w-3/4 md:w-1/2 h-10 p-3 border-2 focus:outline-purple-500"
            : "w-3/4 md:w-1/2 h-10 p-3 border-2 focus:outline-purple-500"
        }
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={
          theme
            ? " bg-purple-100 my-5 w-3/4 md:w-1/2 h-32 p-3 border-2 focus:outline-purple-500"
            : "my-5 w-3/4 md:w-1/2 h-32 p-3 border-2 focus:outline-purple-500"
        }
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className="bg-purple-700 px-7 py-2 w-3/4 md:w-1/2 text-white hover:bg-purple-800 rounded duration-150">
        Submit
      </button>
    </form>
  );
};

export default Form;
