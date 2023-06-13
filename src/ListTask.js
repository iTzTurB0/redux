import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';


const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleToggle = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const handleEdit = (id, description) => {
    const newDescription = prompt('Enter new task description', description);
    if (newDescription !== null && newDescription.trim() !== '') {
      dispatch({ type: 'EDIT_TASK', payload: { id, description: newDescription } });
    }
  };

  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onToggle={() => handleToggle(task.id)}
          onEdit={() => handleEdit(task.id, task.description)}
        />
      ))}
    </ul>
  );
};

export default ListTask;
