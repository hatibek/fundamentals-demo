import "./Counter.css";
import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <div className="count">{count}</div>
      <div className="buttons">
        <button className="counter-button" onClick={() => handleClick()}>
          COUNT
        </button>
        <button className="reset-button" onClick={() => handleReset()}>
          RESET
        </button>
      </div>
    </div>
  );
}
