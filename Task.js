import React from "react";
import { FaTimes } from "react-icons/fa";
import "./index.css";
export default function Task({ tasks, onDelete, onDoubleClick }) {
  return (
    <div
      className={`btn ${tasks.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onDoubleClick(tasks.id)}
    >
      <div className="task-info">
        <div className="task-name">{tasks.task}</div>
        <div className="task-time">{tasks.time}</div>
      </div>
      <FaTimes className="icon" onClick={() => onDelete(tasks.id)} />
    </div>
  );
}
