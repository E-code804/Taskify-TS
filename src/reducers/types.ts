export type Actions =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number }
  | { type: "edit"; payload: [number, string] }
  | { type: "done"; payload: number };
