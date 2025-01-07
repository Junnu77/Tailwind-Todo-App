import { createContext, useState } from "react";

const TodoContext = createContext();

// provider
export const TodoProvider = ({ children }) => {
  const [edit, setEdit] = useState({ todo: {}, isEdit: false });

  const [todos, setTodos] = useState([]);

  const addTodo = ({ title, description }) => {
    setTodos([
      { id: crypto.randomUUID(), title: title, description: description },
      ...todos,
    ]);
  };

  const editTodo = (todo) => {
    setEdit({ todo: todo, isEdit: true });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setEdit({ todo: {}, isEdit: false });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        edit,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
