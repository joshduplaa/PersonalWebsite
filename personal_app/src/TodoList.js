import React from "react";
import Todo from "./Todo.js";

export default function TodoList({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}

{
  /*COMMENTS*/
  /*key prop is there for js to dynamically change components in array*/
}
