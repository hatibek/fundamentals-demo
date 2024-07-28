import React from "react";

export default function TodoItem({ task, toggleCompleted, deleteTask }) {
  function handleChange() {
    toggleCompleted(task.id);
  }
  return (
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      {task.text}
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
