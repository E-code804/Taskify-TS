import { Todo } from "../models/models";

export type State = {
  activeTodos: Todo[];
  completedTodos: Todo[];
};

export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "edit"; payload: [number, string] }
  | { type: "done"; payload: number }
  | { type: "drag"; payload: { actives: Todo[]; completed: Todo[] } };
