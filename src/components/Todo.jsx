import React from "react";

const Todo = ({ todo, isWork, setTodos }) => {
  const delBtn = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const swiBtn = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div key={todo.id}>
      <h3>{todo.title}</h3>
      <h6>{todo.text}</h6>
      <button onClick={delBtn}>Del</button>
      <button onClick={swiBtn}>Switch</button>
    </div>
  );
};

export default Todo;
