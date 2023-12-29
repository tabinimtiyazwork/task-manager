// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TaskForm } from "./pages/TaskForm";
import { TaskList } from "./pages/TaskList";
import Navbar from "./components/Navbar";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  return (
    <Router>
      <TaskProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<TaskList />}></Route>
            <Route path="/addTask" element={<TaskForm />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
}

export default App;
