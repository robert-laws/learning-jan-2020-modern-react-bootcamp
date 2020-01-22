import React from 'react';
import Todo from './Todo';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length) {
    return (
    <section className='TodoList'>
      <Paper elevation={4}>
        <List>
          {todos.map((todo, index, arr) => (
            <article key={todo.id}>
              <Todo {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />          
              {
                (index !== arr.length - 1 && <Divider />)
              }
            </article>
          ))}
        </List>
      </Paper>
    </section>
  )}
  return null;
}

export default TodoList;