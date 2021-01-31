import React from "react";
import Task from "./Task";
import "./index.css";
export default function Tasks({ tasks, onDelete, onDoubleClick }) {
  return (
    <div className="tasks-form">
      {tasks.map((task) => {
        return (
          <Task
            tasks={task}
            key={task.id}
            onDelete={onDelete}
            onDoubleClick={onDoubleClick}
          />
        );
      })}
    </div>
  );
}
