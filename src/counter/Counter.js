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
      <div>{count}</div>
      <button onClick={() => handleClick()}>Counter</button>
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  );
}
