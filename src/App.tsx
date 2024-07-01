import { useState } from "react";

import { addTodo } from "./actions/todoActions";
import { useTodos } from "./hooks/useTodos";

import InputField from "./components/InputField";
import TodoList from "./components/TodoComponents/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const { dispatch } = useTodos();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList />
    </div>
  );
};

export default App;
