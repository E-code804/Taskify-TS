import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { addTodo, dragTodo } from "./actions/todoActions";
import { useTodos } from "./hooks/useTodos";

import InputField from "./components/InputField";
import TodoList from "./components/TodoComponents/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const { state, dispatch } = useTodos();

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      dispatch(addTodo(todo));
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // Check if no destination
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    const active = Array.from(state.activeTodos);
    const complete = Array.from(state.completedTodos);

    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    dispatch(dragTodo(active, complete));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1 className="heading">Taskify</h1>

        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList />
      </div>
    </DragDropContext>
  );
};

export default App;
