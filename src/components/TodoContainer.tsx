import React from "react";
import { CONSTANTS } from "../constants";
import { Todo } from "../appTypes";

interface Props {
  todoList: Todo[];
  deleteTodo: (todoId: number) => void;
  completeTodo: (todoId: number) => void;
}

function TodoContainer({ todoList, deleteTodo, completeTodo }: Props) {
  const constants = CONSTANTS.TodoContainer;
  return (
    <div className="m-4">
      {todoList.map((todo, index) => (
        <div
          className="bg-light border w-50 p-2 mx-auto my-1 d-flex justify-content-between"
          key={index}
        >
          <p className="mb-0">{todo.name}</p>
          <div>
            <button
              className="btn btn-primary btn-sm text-white mx-2 py-0"
              onClick={() => {
                completeTodo(todo.id);
              }}
              disabled={todo.isCompleted}
            >
              {constants.CompleteBtnLabel}
            </button>
            <button
              className="btn btn-primary btn-sm text-white mx-2 py-0"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              {constants.DeleteBtnLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoContainer;
