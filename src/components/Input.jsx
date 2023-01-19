import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      text,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });

    setText("");
    setTitle("");
  };

  // console.log(setTitle);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="제목을 입력하세요."
          value={title}
          onChange={titleChange}
        ></input>
        <input
          placeholder="내용을 입력하세요."
          value={text}
          onChange={textChange}
        ></input>
        <button>Click</button>
      </form>
    </div>
  );
};

export default Input;
