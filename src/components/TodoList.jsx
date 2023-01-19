import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, isWork }) => {
  return (
    <div>
      <h2>{isWork ? "진행중" : "완료함"}</h2>

      {todos
        .filter((item) => item.isDone === !isWork)
        .map((todo) => {
          return <Todo todo={todo} setTodos={setTodos}></Todo>;
        })}
    </div>
  );
};

export default TodoList;
