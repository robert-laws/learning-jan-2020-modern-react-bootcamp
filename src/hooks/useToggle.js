import { useState } from 'react';

const useToggle = (initialValue = false) => {
  // call useState, 'reserve piece of state'
  const [state, updateState] = useState(initialValue);

  const toggle = () => {
    updateState(!state);
  }
  
  // return a piece of state and a function to toggle it
  return [state, toggle];
}

export default useToggle;
