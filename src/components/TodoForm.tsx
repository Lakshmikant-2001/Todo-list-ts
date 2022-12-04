import { useState } from "react";
import { CONSTANTS } from "../constants";

interface Props {
  addTodo: (todo: string) => void;
  changeFilter: (option: string) => void;
}

function TodoForm({ addTodo, changeFilter }: Props) {
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

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeFilter(e.target.value);
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <div className="input-group mx-auto w-50">
        <input
          type="text"
          className="form-control w-50"
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
        <select className="form-select mx-2" onChange={handleFilterChange}>
          <option value="1">{constants.Filter.Option1}</option>
          <option value="2">{constants.Filter.Option2}</option>
          <option value="3">{constants.Filter.Option3}</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;
