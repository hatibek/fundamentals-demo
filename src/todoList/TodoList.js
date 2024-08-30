import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor Appointment", completed: true },
    { id: 2, text: "Meeting at school", completed: false },
  ]);

  const [text, setText] = useState("");

  function checkEmptyInput() {
    return text === "" ? true : false;
  }
  function addTask(text) {
    if (text === "") {
      document.getElementsByClassName("error-message")[0].innerText =
        "Task cannot be empty";
      return;
    }
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button className="add-button" onClick={() => addTask(text)}>
        ADD TASK
      </button>
      {checkEmptyInput() && (
        <div className="error-message">Please enter a task</div>
      )}
    </div>
  );
}
