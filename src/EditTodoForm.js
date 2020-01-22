import React from 'react';

import useInputState from './hooks/useInputState';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    marginLeft: '1rem',
    width: '100%'
  }
})

const EditTodoForm = ({ id, task, editTodo, toggleEditForm }) => {
  const classes = useStyles();
  const [value, handleChange, reset] = useInputState(task)

  const submitEdit = event => {
    event.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditForm();
  }

  return (
    <form className={classes.root} onSubmit={submitEdit}>
      <TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
    </form>
  )
}

export default EditTodoForm;