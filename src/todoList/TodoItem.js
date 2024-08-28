import React from "react";
import "./TodoItem.css";

export default function TodoItem({ task, toggleCompleted, deleteTask }) {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <div className="todo-item">
      <label class="checkbox-container">
        {task.text}
        <input type="checkbox" />
        <span
          class="checkmark"
          checked={task.completed}
          onChange={handleChange}
        />
      </label>
      <button
        className="delete-task-button"
        onClick={() => deleteTask(task.id)}
      >
        X
      </button>
    </div>
  );
}
