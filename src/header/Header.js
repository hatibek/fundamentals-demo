import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
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
            <li>
              <NavLink to="/rest-api">Rest API</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
