import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Tasks from "./Tasks";
import About from "./About";
import "./index.css";
import TaskForm from "./TaskForm";
import Footer from "./Footer";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getTasks = async () => {
      const TaskfromSever = await fetchTasks();
      setTasks(TaskfromSever);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const onDoubleClick = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((e) => e.id !== id));
  };
  const Submit = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
  };
  return (
    <Router>
      <div className="app-task">
        <Header onClick={() => setOpen(!open)} showAdd={open} />
        {open ? <TaskForm onSubmit={Submit} onClick={open} /> : ""}

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={onDelete}
                  onDoubleClick={onDoubleClick}
                />
              ) : (
                "No task to show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/" component={Footer} />
      </div>
    </Router>
  );
}
