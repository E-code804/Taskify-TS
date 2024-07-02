import { Todo } from "../models/models";
import { Actions, State } from "./types";

export const initialState: State = {
  activeTodos: [],
  completedTodos: [],
};

// For efficiency, add param to deduce if active or completed
// once things are on the active/completed side, make sure they're uncrossed/crossed respectively.
export const todoReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "add": {
      const newTodo: Todo = { id: Date.now(), todo: action.payload, isDone: false };
      return { ...state, activeTodos: [...state.activeTodos, newTodo] };
    }
    case "remove":
      return {
        ...state,
        activeTodos: state.activeTodos.filter((todo) => todo.id !== action.payload),
        completedTodos: state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    case "edit": {
      const [id, edit] = action.payload;
      return {
        ...state,
        activeTodos: state.activeTodos.map((todo) =>
          todo.id === id ? { ...todo, todo: edit } : todo
        ),
        completedTodos: state.completedTodos.map((todo) =>
          todo.id === id ? { ...todo, todo: edit } : todo
        ),
      };
    }
    case "done": {
      const isActive = state.activeTodos.find((todo) => todo.id === action.payload);
      if (isActive) {
        const toggledTodo = { ...isActive, isDone: true };
        return {
          ...state,
          activeTodos: state.activeTodos.filter(
            (todo) => todo.id !== action.payload
          ),
          completedTodos: [...state.completedTodos, toggledTodo],
        };
      } else {
        const completedTodo = state.completedTodos.find(
          (todo) => todo.id === action.payload
        );
        if (completedTodo) {
          const toggledTodo = { ...completedTodo, isDone: false };
          return {
            ...state,
            completedTodos: state.completedTodos.filter(
              (todo) => todo.id !== action.payload
            ),
            activeTodos: [...state.activeTodos, toggledTodo],
          };
        }
      }
      return state;
    }

    case "drag":
      return {
        ...state,
        activeTodos: action.payload.actives,
        completedTodos: action.payload.completed,
      };
    default:
      return state;
  }
};
