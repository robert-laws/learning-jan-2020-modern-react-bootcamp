
import { useState } from 'react';
import uuid from 'uuid/v4';

export default initialTodos => {
  const [todos, updateTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: newTodoText => {
      updateTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    editTodo: (todoId, updatedTask) => {
      const updatedTodos = todos.map(todo => (
        todo.id === todoId ? { ...todo, task: updatedTask } : todo
      ))
      updateTodos(updatedTodos);
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      updateTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => (
        todo.id === todoId ? {...todo, completed: !todo.completed } : todo  
      ))
      updateTodos(updatedTodos);
    }
  }
}