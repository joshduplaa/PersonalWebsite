import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo 1", complete: false },
  ]);

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
