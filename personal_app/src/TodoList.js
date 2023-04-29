import React from "react";
import Todo from "./Todo.js";

export default function TodoList({ todos }) {
  return todos.map((todo) => {
    return <Todo key={todo} todo={todo} />;
    {
      /*key is there for js to dynamically change components in array*/
    }
  });
}
