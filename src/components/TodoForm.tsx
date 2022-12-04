import { useState } from "react";
import { CONSTANTS } from "../constants";

interface Props {
  addTodo: (todo: string) => void;
}

function TodoForm({ addTodo }: Props) {
  const constants = CONSTANTS.TodoForm;
  const [todo, setTodo] = useState("");

  const handleInpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          value={todo}
          placeholder={constants.InputPlaceholder}
          onChange={handleInpChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-sm text-white px-3"
        >
          {constants.SubmitBtnLabel}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
