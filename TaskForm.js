import React, { useState } from "react";
import "./index.css";
export default function TaskForm({ onSubmit }) {
  const [task, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please add a task");
    }
    onSubmit({ task, time, reminder });
    setText("");
    setTime("");
    setReminder(false);
  };
  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-inputs">
          <label className="form-title">Task</label>
          <input
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-title">Time</label>
          <input
            type="text"
            placeholder="Add a time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-checkbox">
          <label className="form-title">Set Reminder</label>
          <input
            type="checkbox"
            name="reminder"
            id="reminder"
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Save Task" className="form-submit" />
      </form>
    </div>
  );
}
