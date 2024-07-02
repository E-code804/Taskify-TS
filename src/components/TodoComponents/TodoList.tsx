import { Droppable } from "react-beautiful-dnd";
import { useTodos } from "../../hooks/useTodos";
import { Todo } from "../../models/models";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const { state } = useTodos();

  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {state.activeTodos.map((t: Todo, idx: number) => (
              <SingleTodo key={t.id} index={idx} todo={t} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {state.completedTodos.map((t: Todo, idx: number) => (
              <SingleTodo key={t.id} index={idx} todo={t} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
