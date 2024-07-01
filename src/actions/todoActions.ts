// src/actions/todoActions.ts

import { Actions } from "../reducers/types";

export const addTodo = (todo: string): Actions => ({
  type: "add",
  payload: todo,
});

export const deleteTodo = (id: number): Actions => ({
  type: "remove",
  payload: id,
});

export const editTodo = (id: number, edit: string): Actions => ({
  type: "edit",
  payload: [id, edit],
});

export const doneTodo = (id: number): Actions => ({
  type: "done",
  payload: id,
});
