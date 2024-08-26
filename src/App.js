import "./App.css";
import React from "react";
import TodoList from "./todoList/TodoList";
import Counter from "./counter/Counter";
import Calculator from "./calculator/Calculator";
import RestAPI from "./rest/RestAPI";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/rest-api" element={<RestAPI />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
