// Handles the edit functionality and striking of a todo list item
import React from "react";
import { Todo } from "../../models/models";

interface Props {
  edit: boolean;
  editTodoItem: string;
  todo: Todo;
  setTodoEditItem: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const TodoText: React.FC<Props> = ({
  edit,
  editTodoItem,
  todo,
  setTodoEditItem,
  inputRef,
}) => {
  return (
    <>
      {edit ? (
        <input
          className="todos__single--text"
          ref={inputRef}
          value={editTodoItem}
          onChange={(e) => setTodoEditItem(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
    </>
  );
};

export default TodoText;
