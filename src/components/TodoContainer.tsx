import React from "react";
import { CONSTANTS } from "../constants";
import { Todo } from "../appTypes";

const constants = CONSTANTS.TodoContainer;

interface TodoContainerProps {
  todoList: Todo[];
  deleteTodo: (todoId: number) => void;
  completeTodo: (todoId: number) => void;
}

interface TodoBoxProps {
  todo: Todo;
  deleteTodo: (todoId: number) => void;
  completeTodo: (todoId: number) => void;
}

function TodoContainer({ todoList, deleteTodo, completeTodo }: TodoContainerProps) {
  return (
    <div className="m-4 d-flex flex-column align-items-center">
      {todoList.length !== 0 ? (
        todoList.map((todo, index) => (
          <TodoBox
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))
      ) : (
        <p className="text-secondary">{constants.NoTodoText}</p>
      )}
    </div>
  );
}

function TodoBox({ todo, deleteTodo, completeTodo }: TodoBoxProps) {
  return (
    <div className="bg-light border w-50 p-2 my-1 d-flex justify-content-between">
      <p className="mb-0">{todo.name}</p>
      <div>
        <button
          className="btn btn-primary btn-sm text-white mx-1 py-0"
          onClick={() => {
            completeTodo(todo.id);
          }}
          disabled={todo.isCompleted}
        >
          {constants.CompleteBtnLabel}
        </button>
        <button
          className="btn btn-primary btn-sm text-white mx-1 py-0"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          {constants.DeleteBtnLabel}
        </button>
      </div>
    </div>
  );
}

export default TodoContainer;
