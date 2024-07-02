import React, { ReactNode, createContext, useReducer } from "react";
//import { Todo } from "../models/models";
import { initialState, todoReducer } from "../reducers/todoReducer";
import { Actions, State } from "../reducers/types";

export type TodoContextProps = {
  state: State;
  dispatch: React.Dispatch<Actions>;
};

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
