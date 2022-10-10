import { useState, useEffect, createContext, useContext } from "react";
import { initialTasks } from "../const/constants";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    const taskStorage = JSON.parse(localStorage.getItem("tasks"));
    const totalStorage = JSON.parse(localStorage.getItem("totalTasks"));

    if (totalStorage > 0) {
      setTasks(taskStorage);
      setTotalTasks(totalStorage);
    }
  }, []);

  useEffect(() => {
    const taskStorage = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskStorage);
    localStorage.setItem("totalTasks", totalTasks);
  }, [tasks, totalTasks]);

  const addTask = (task) => {
    setTasks({ ...tasks, [task.progress]: [...tasks[task.progress], task] });
    setTotalTasks((prev) => prev + 1);
  };

  const deleteTask = (task) => {
    const deleted = tasks[task.progress].filter((t) => t.id !== task.id);
    setTasks((prev) => ({ ...prev, [task.progress]: deleted }));
    setTotalTasks((prev) => prev - 1);
  };

  const changeStatus = (task, newStatus) => {
    const deleted = tasks[task.progress].filter((t) => t.id !== task.id);
    const taskModifed = { ...task, progress: newStatus };
    setTasks((prev) => ({
      ...prev,
      [task.progress]: deleted,
      [newStatus]: [...tasks[newStatus], taskModifed],
    }));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        totalTasks,
        deleteTask,
        changeStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
