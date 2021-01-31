import React from "react";
import Button from "./Button";
import "./index.css";
export default function Header({ onClick, showAdd }) {
  return (
    <div className="header">
      <h1 className="title">Task Tracker</h1>
      <Button
        onClick={onClick}
        text={showAdd ? "Close" : "Add"}
        color="green"
      />
    </div>
  );
}
