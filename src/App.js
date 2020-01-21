import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TodoApp from './TodoApp';

// styles
import './sass/App.scss';

function App() {
  return (
    <>
      <CssBaseline />
      <TodoApp />
    </>
  );
}

export default App;
