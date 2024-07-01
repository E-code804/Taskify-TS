import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { deleteTodo } from "../../actions/todoActions";
import { useTodos } from "../../hooks/useTodos";
import { Todo } from "../../models/models";
//import TodoText from "./TodoText";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false); // Displaying of the editing input
  const [editTodo, setTodoEdit] = useState<string>(todo.todo); // Value of the new edit.
  const { state, dispatch } = useTodos();

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const displayEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    // td is current todo element of the todos parameter
    setTodos(
      todos.map((td) => (td.id === id ? { ...td, todo: editTodo } : td))
    );
    setEdit(false);
  };

  // Whenever edit changes, fire and focus
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos__single"
      onSubmit={(e) => {
        handleEdit(e, todo.id);
      }}
    >
      {/* <TodoText edit={edit} editTodo={editTodo} setTodoEdit={setTodoEdit} todo={todo} inputRef={inputRef} /> */}
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

      <div>
        <span className="icon" onClick={() => displayEdit()}>
          <AiFillEdit />
        </span>
        {/* <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span> */}
        <span className="icon" onClick={() => dispatch(deleteTodo(todo.id))}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
