import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState(iniTodos);

  return (
    <div>
      <Header></Header>
      <Input setTodos={setTodos}></Input>
      <TodoList isWork={true} setTodos={setTodos} todos={todos}></TodoList>
      <TodoList isWork={false} setTodos={setTodos} todos={todos}></TodoList>
    </div>
  );
};

const iniTodos = [
  {
    id: uuidv4(),
    title: "안녕",
    text: "헬로~",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "qkdl",
    text: "bye~",
    isDone: true,
  },
];

export default App;
