import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer";
import { Todo } from "./appTypes";

function App() {
  const LocalTodos = localStorage.getItem("todoList");
  const initalState: Todo[] = (typeof (LocalTodos) === 'string') ?
    JSON.parse(LocalTodos) : [];

  const [todoList, setTodoList] = useState<Todo[]>(initalState);
  const [filterOption, setFilterOption] = useState("1");
  const [filteredTodoList, setFilteredTodoList] = useState<Todo[]>(todoList);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    switch (filterOption) {
      case "2":
        setFilteredTodoList(todoList.filter((todo) => todo.isCompleted === false));
        break;
      case "3":
        setFilteredTodoList(todoList.filter((todo) => todo.isCompleted === true));
        break;
      default: setFilteredTodoList(todoList);
    }
  }, [todoList, filterOption]);

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

  const changeFilter = (option: string) => {
    setFilterOption(option);
  };

  return (
    <div className="App">
      <Header />
      <main className="px-3 py-5">
        <TodoForm
          addTodo={addTodo}
          changeFilter={changeFilter}
        />
        <TodoContainer
          todoList={filteredTodoList}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </main>
    </div>
  );
}

export default App;
