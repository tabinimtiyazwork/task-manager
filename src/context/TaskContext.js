import React, { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on initialization
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever they are updated
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const generateUniqueId = () => {
    return uuidv4();
  };

  const addTask = (task) => {
    const newTask = { ...task, id: generateUniqueId() };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
