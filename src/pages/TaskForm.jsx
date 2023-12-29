// TaskForm.js

import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import "../styles/taskForm.css";

export const TaskForm = () => {
  const { addTask } = useTaskContext();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: "", description: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!task.title.trim() || !task.description.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    // Clear any previous error
    setError("");

    // Proceed with adding the task
    addTask(task);
    console.log("A task? Wild! Task submitted:", task);
    setTask({ title: "", description: "" });
    navigate("/");
  };

  return (
    <div className="task-form-container">
      <h2 className="task-form-header">Ready for a New Adventure?</h2>
      <p>Great! Fill the details of your daring task below:</p>
      <form onSubmit={handleSubmit}>
        <label className="task-form-label">
          Task Title (make it epic):
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            className="task-form-input"
            placeholder="Conquer the World in 7 Days"
          />
        </label>
        <label className="task-form-label">
          Task Description (add a touch of drama):
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            className="task-form-textarea"
            placeholder="In a world where laundry monsters roam, you are the hero tasked with vanquishing the sock-stealing beasts."
          ></textarea>
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="task-form-button">
          Add to the Quest Log
        </button>
      </form>
    </div>
  );
};
