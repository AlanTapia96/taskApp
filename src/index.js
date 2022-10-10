import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NotifContextProvider from "./components/context/NotifContext";
import { TaskContextProvider } from "./components/context/TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotifContextProvider>
      <TaskContextProvider>
        <App />
      </TaskContextProvider>
    </NotifContextProvider>
  </React.StrictMode>
);
