"use client";

interface ITodoItem {
  todo: ITodo;
  handleClick: (id: number) => void;
}

export interface ITodo {
  id: number;
  title: string;
  isDone: boolean;
}

const TodoItem = ({ todo, handleClick }: ITodoItem) => {
  return (
    <div>
      <h1 onClick={() => handleClick(todo.id)}>{todo.title}</h1>
      <h2>{todo.isDone ? "완료" : "미완료"}</h2>
    </div>
  );
};

export default TodoItem;
