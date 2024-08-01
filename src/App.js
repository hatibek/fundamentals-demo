import "./App.css";
import React from "react";
import TodoList from "./todoList/TodoList";
import Counter from "./counter/Counter";
import Wrapper from "./calculator/Wrapper";
import Calculator from "./calculator/Calculator";

function App() {
  return (
    <div className="App">
      {/* <div className="main-grid-container">
        <div className="grid-item">
          <TodoList />
        </div>
        <div className="grid-item">
          <Counter />
        </div>
        <div className="grid-item">
          <Wrapper />
        </div>
        <div className="grid-item">D</div>
        <div className="grid-item">E</div>
        <div className="grid-item">F</div>
        <div className="grid-item">G</div>
      </div> */}
      <Calculator />
    </div>
  );
}

export default App;
