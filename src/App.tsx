import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";

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
        <TodoContainer todoList={todoList} />
      </main>
    </div>
  );
}

export default App;
