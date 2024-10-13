"use client";

import { useState } from "react";

const TodoItem = () => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "react 공부",
    done: false,
  });

  // js spread 문법
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const handleClick = () => {
    setTodo({ ...todo, done: !todo.done });
  };

  return (
    <div>
      <h1 onClick={handleClick}>{todo.title}</h1>
      <h2>{todo.done ? "완료" : "미완료"}</h2>
    </div>
  );
};

export default TodoItem;
