import React from "react";

export default function Button({ color, onClick, text }) {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: color, padding: `10px 10px` }}
        onClick={() => onClick()}
      >
        {text}
      </button>
    </div>
  );
}
