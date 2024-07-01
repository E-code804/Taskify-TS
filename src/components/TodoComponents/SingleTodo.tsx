import React, { useEffect, useRef, useState } from "react";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { deleteTodo, doneTodo, editTodo } from "../../actions/todoActions";
import { useTodos } from "../../hooks/useTodos";
import { Todo } from "../../models/models";

import TodoText from "./TodoText";

interface Props {
  todo: Todo;
}

const SingleTodo: React.FC<Props> = ({ todo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false); // Displaying of the editing input
  const [editTodoItem, setTodoEditItem] = useState<string>(todo.todo); // Value of the new edit.
  const { dispatch } = useTodos();

  const displayEdit = () => {
    if (!todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    dispatch(editTodo(id, editTodoItem));
    setEdit(false);
  };

  // Whenever edit changes, fire and focus
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  // When the todo changes upon delete, update the edit value
  useEffect(() => {
    setTodoEditItem(todo.todo);
  }, [todo]);

  return (
    <form
      className="todos__single"
      onSubmit={(e) => {
        handleEdit(e, todo.id);
      }}
    >
      <TodoText
        edit={edit}
        editTodoItem={editTodoItem}
        setTodoEditItem={setTodoEditItem}
        todo={todo}
        inputRef={inputRef}
      />

      <div>
        <span className="icon" onClick={() => displayEdit()}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => dispatch(deleteTodo(todo.id))}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => dispatch(doneTodo(todo.id))}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
