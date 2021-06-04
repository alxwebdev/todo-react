import React from 'react';
import EditForm from './EditForm';

const Todo = ({
  title,
  description,
  removeTodo,
  id,
  isCompleted,
  toggleCompleted,
  toggleIsEdit,
  isEdit,
  editTodo,
}) => {
  return (
    <div className={`Todo ${isCompleted ? 'line-through' : ''}`}>
      <h2>{title}</h2>

      <p>{description}</p>

      {isEdit && <EditForm todoTitle={title} editTodo={editTodo} id={id} />}

      <button className='btn btn-tertiary' onClick={() => toggleCompleted(id)}>
        completed
      </button>
      <button className='btn btn-primary' onClick={() => toggleIsEdit(id)}>
        Edit
      </button>
      <button className='btn btn-secondary' onClick={() => removeTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
