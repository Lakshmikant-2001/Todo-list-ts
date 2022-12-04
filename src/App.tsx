import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import { Todo } from "./appTypes";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodo = (todo: string) => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length,
        name: todo,
        isCompleted: false,
      },
    ]);
  };
  const deleteTodo = (todoId: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };
  const completeTodo = (todoId: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoId) return { ...todo, isCompleted: true };
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <main className="px-3 py-5">
        <TodoForm addTodo={addTodo} />
        <TodoContainer
          todoList={todoList}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </main>
    </div>
  );
}

export default App;
