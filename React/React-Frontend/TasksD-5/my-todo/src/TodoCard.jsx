import React from 'react';

const TodoCard = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div className="todo-card">
      <h3>{todo.taskName}</h3>
      <p>{todo.description}</p>
      <select value={todo.status} onChange={(e) => updateTodo(todo.id, 'status', e.target.value)}>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;
