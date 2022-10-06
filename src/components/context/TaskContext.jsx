import { useState, createContext } from "react";
import { cardProgress } from "../const/cardProgress";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [totalTasks, setTotalTasks] = useState(0);
  const [toDoTasks, setToDoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const createTask = (task) => {
    setTask(task);
  };

  const deleteTask = (task) => {
    if (cardProgress[task.progress].name === "toDo") {
      setToDoTasks(toDoTasks.filter((t) => t.id !== task.id));
    } else if (cardProgress[task.progress].name === "inProgress") {
      setInProgressTasks(inProgressTasks.filter((t) => t.id !== task.id));
    } else {
      setDoneTasks(doneTasks.filter((t) => t.id !== task.id));
    }
    setTotalTasks((prev) => prev - 1);
  };

  const changeStatus = (task, newStatus) => {
    deleteTask(task);
    task.progress = newStatus;
    setTask(task);
  };

  const setTask = (task) => {
    if (cardProgress[task.progress].name === "toDo") {
      setToDoTasks([...toDoTasks, task]);
    } else if (cardProgress[task.progress].name === "inProgress") {
      setInProgressTasks([...inProgressTasks, task]);
    } else {
      setDoneTasks([...doneTasks, task]);
    }
    setTotalTasks((prev) => prev + 1);
  };

  return (
    <TaskContext.Provider
      value={{
        totalTasks,
        createTask,
        deleteTask,
        changeStatus,
        toDoTasks,
        inProgressTasks,
        doneTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
