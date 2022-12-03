import React from "react";

interface Props {
  todoList: string[];
}

function TodoContainer({ todoList }: Props) {
  return (
    <div className="m-4">
      {todoList.map((todo) => (
        <div className="bg-light border w-50 p-2 mx-auto my-1">{todo}</div>
      ))}
    </div>
  );
}

export default TodoContainer;
