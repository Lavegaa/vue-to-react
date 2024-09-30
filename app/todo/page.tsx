"use client";

import TodoItem from "@/components/TodoItem";
import { ITodo } from "@/components/TodoItem/TodoItem";
import { useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, title: "Todo 1", isDone: false },
    { id: 2, title: "Todo 2", isDone: false },
    { id: 3, title: "Todo 3", isDone: false },
  ]);

  const handleClick = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} handleClick={handleClick} />
      ))}
    </div>
  );
}
