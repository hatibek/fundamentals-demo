import "./App.css";
import React from "react";
import TodoList from "./todoList/TodoList";
import Counter from "./counter/Counter";
import Calculator from "./calculator/Calculator";
import RestAPI from "./rest/RestAPI";

function App() {
  return (
    <div className="App">
      <div className="main-grid-container">
        <div className="grid-item">
          <TodoList />
        </div>
        <div className="grid-item">
          <Counter />
        </div>
        <div className="grid-item">
          <Calculator />
        </div>
      </div>
      <div className="grid-item">
        <RestAPI />
      </div>
    </div>
  );
}

export default App;
