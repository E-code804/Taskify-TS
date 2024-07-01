import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./models/models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t, idx) => (
        <li key={idx}>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
