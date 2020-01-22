import { useState, useEffect } from 'react';

const UseLocalStorage = (key, defaultValue) => {
  const [state, updateState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    }
    catch (e) {
      val = defaultValue;
    }
    return val
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, updateState];
}

export default UseLocalStorage;