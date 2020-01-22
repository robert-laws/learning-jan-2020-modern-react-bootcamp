import React from 'react';

import useInputState from './hooks/useInputState';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('');

  const submitTodo = event => {
    event.preventDefault();
    addTodo(value);
    reset();
  }

  return (
    <>
      <Paper style={{margin: '1rem 0', padding: '0 1rem'}} elevation={4}>
        <form onSubmit={submitTodo}>
          <TextField value={value} onChange={handleChange} margin="normal" label="Add New Todo" fullWidth />
        </form>
      </Paper>
    </>
  )
}

export default TodoForm;