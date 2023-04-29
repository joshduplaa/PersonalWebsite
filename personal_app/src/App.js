//useRef hook allows us to reference elements in html or input
import React, { useEffect, useState, useRef } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4"; //allows us to create random IDS

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  //effect below loads our todos if page is reloaded
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos); //puts todos from local storage on page if there.
    }
    setTodos();
  });
  //anytime todos changes, it is saved to local storage using useEffect hook
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)); // passes todos as strings into JSON file in local storage
  }, [todos]);

  //argument is eventlistener
  function handleAddTodo(e) {
    const name = todoNameRef.current.value; //sets current value when click is listened to
    if (name === "") return; //stops if the value is null
    console.log(name);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
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
