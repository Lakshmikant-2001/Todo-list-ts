import { useState } from "react";

interface Props {
  addTodo: (todo: string) => void;
}

export default function TodoForm({ addTodo }: Props) {
  const [todo, setTodo] = useState("");
  const handleInpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
  };

  return (
    <form action="" className="text-center" onSubmit={handleFormSubmit}>
      <input type="text" value={todo} onChange={handleInpChange} />
      <button type="submit">add</button>
    </form>
  );
}
