import React, { useState } from 'react';
import TodoCard from './TodoCard';
import TodoForm from './Todoform';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const updateTodo = (id, field, value) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, [field]: value } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filteredTodos = filter === 'all'
    ? todos
    : todos.filter(todo => todo.status === filter);

  return (
    <div className='container'>
        <h2>My Todos</h2>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoCard
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
