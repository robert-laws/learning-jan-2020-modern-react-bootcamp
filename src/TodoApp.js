import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Wash the car', completed: true },
    { id: 3, task: 'Empty trash cans in house', completed: false }
  ];

  const [todos, updateTodos] = useState(initialTodos);
  
  const addTodo = newTodoText => {
    updateTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  }

  return (    
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#FAFAFA'
      }}
      elevation={0}>
      <AppBar color='primary' position='static' style={{height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOs with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={12} sm={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp;