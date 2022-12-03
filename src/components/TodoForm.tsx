import { useState } from "react";
import { constants } from "../constants";

interface Props {
  addTodo: (todo: string) => void;
}

function TodoForm({ addTodo }: Props) {
  const TodoFormConstants = constants.TodoForm;
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
          placeholder={TodoFormConstants.inputPlaceholder}
          onChange={handleInpChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-sm text-white px-3"
        >
          {TodoFormConstants.submitBtnLabel}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
