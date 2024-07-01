import { useState } from "react";
import { addTodo } from "./actions/todoActions";
import InputField from "./components/InputField";
import SingleTodo from "./components/TodoComponents/SingleTodo";
import { useTodos } from "./hooks/useTodos";
import { Todo } from "./models/models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const { state, dispatch } = useTodos();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Taskify</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <div className="todos">
        {state.map((t, idx) => (
          <SingleTodo key={idx} todo={t} todos={state} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
};

export default App;
