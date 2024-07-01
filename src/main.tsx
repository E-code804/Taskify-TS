import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TodoProvider } from "./context/TodoContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
