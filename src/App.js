import "./App.css";
import React from "react";
import TodoList from "./todoList/TodoList";
import Counter from "./counter/Counter";
import Calculator from "./calculator/Calculator";
import RestAPI from "./rest/RestAPI";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/todo-list">Todo List</NavLink>
            </li>
            <li>
              <NavLink to="/counter">Counter</NavLink>
            </li>
            <li>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="main-grid-container">
        <Routes>
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<Calculator />} />
        </Routes>
      </div>
      <div className="grid-item">
        <RestAPI />
      </div>
    </div>
  );
}

export default App;
