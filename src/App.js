import "./App.css";
import React from "react";
import TodoList from "./todoList/TodoList";
import Counter from "./counter/Counter";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <TodoList />
        </div>
        <div className="grid-item">
          <Counter />
        </div>
        <div className="grid-item">C</div>
        <div className="grid-item">D</div>
        <div className="grid-item">E</div>
        <div className="grid-item">F</div>
        <div className="grid-item">G</div>
      </div>
    </div>
  );
}

export default App;
