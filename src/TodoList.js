import React from 'react';
import Todo from './Todo';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const TodoList = ({todos}) => {
  return (
    <section className='TodoList'>
      <Paper elevation={4}>
        <List>
          {todos.map((todo, index, arr) => (
            <>
              <Todo key={todo.id} task={todo.task} completed={todo.completed} />          
              {
                (index !== arr.length - 1 ? <Divider /> : '')
              }
            </>
          ))}
        </List>
      </Paper>
    </section>
  )
}

export default TodoList;