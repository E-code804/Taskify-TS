import { Todo } from "../models/models";
import { Actions } from "./types";

export const initialState: Todo[] = [];

export const todoReducer = (state: Todo[], action: Actions): Todo[] => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "edit": {
      const [id, edit] = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, todo: edit } : todo
      );
    }
    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};
