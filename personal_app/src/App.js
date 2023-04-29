import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
function App() {
  const [todos, setTodos] = useState(["Todo 1", "todo 2"]);

  return (
    //fragment component
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add to do</button>
      <button>Clear </button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
