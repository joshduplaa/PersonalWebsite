//useRef hook allows us to reference elements in html or input
import React, { useEffect, useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid"; //allows us to create random IDS

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  //effect below loads our todos if page is reloaded
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []); //called once because of empty [] dependencies
  //anytime todos changes, it is saved to local storage using useEffect hook
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  //toggle the complete checkbox function
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

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

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    //fragment component
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add to do</button>
      <button onClick={handleClearTodos}>Clear </button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
