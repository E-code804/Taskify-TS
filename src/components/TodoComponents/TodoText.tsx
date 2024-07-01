// Handles the edit functionality and striking of a todo list item
import React from "react";
import { Todo } from "../../models/models";

interface Props {
  edit: boolean;
  editTodo: string;
  todo: Todo;
  setTodoEdit: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const TodoText: React.FC<Props> = ({ edit, editTodo, todo, setTodoEdit, inputRef }) => {
  return (
    <>
      {edit ? (
        <input
          className="todos__single--text"
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setTodoEdit(e.target.value)}
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
