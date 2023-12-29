// TaskList.js

import React from "react";
import { useTaskContext } from "../context/TaskContext";
import noTask from "../assets/no-task.png";
import "../styles/listStyles.css";

export const TaskList = () => {
  const { tasks, removeTask } = useTaskContext();

  const handleRemoveTask = (taskId) => {
    removeTask(taskId);
  };

  return (
    <div className="task-list-container">
      <h2 className="task-list-header">Welcome to the Realm of Wild Tasks!</h2>
      <div>
        <ul>
          {tasks.length === 0 ? (
            <div className="no-tasks-container">
              <p className="no-tasks-message">
                Ready for a new adventure? Craft one now and let the journey
                unfold.
              </p>
              <div className="no-tasks-image-container">
                <img
                  src={noTask}
                  alt="No Tasks To Show"
                  className="no-tasks-image"
                />
                <p>
                  Unfortunately!
                  <br />
                  No tasks found
                </p>
              </div>
            </div>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="task-item">
                <div>
                  <strong className="task-title">{task.title}</strong>
                  <p className="task-description">{task.description}</p>
                </div>
                <button
                  onClick={() => handleRemoveTask(task.id)}
                  className="remove-task-btn"
                >
                  Remove Task
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
