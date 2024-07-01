import { useTodos } from "../../hooks/useTodos";
import { Todo } from "../../models/models";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const { state } = useTodos();

  return (
    <div className="todos">
      {state.map((t: Todo, idx: number) => (
        <SingleTodo key={idx} todo={t} />
      ))}
    </div>
  );
};

export default TodoList;
