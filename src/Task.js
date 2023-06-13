import React from 'react';

const Task = ({ task, onToggle, onEdit }) => {
  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={onToggle} />
      <span>{task.description}</span>
      <button onClick={onEdit}>Edit</button>
    </li>
  );
};

export default Task;
