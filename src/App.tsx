import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const addTodo = (todo: string) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div className="App">
      <Header />
      <main className="px-3 py-5">
        <TodoForm addTodo={addTodo} />
      </main>
    </div>
  );
}

export default App;
