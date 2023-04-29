//useRef hook allows us to reference elements in html or input
import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  //argument is eventlistener
  function handleAddTodo(e) {
    const name = todoNameRef.current.value; //sets current value when click is listened to
    if (name === "") return; //stops if the value is null
    console.log(name);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    });
    todoNameRef.current.value = null; // makes input field blank after submitting
  }

  return (
    //fragment component
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add to do</button>
      <button>Clear </button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
