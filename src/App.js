import React from 'react';
import './App.scss';

function App() {
  const name = 'Hal';

  function sayHello(name) {
    return `Hello ${name}`;
  }

  function getNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const getNum = getNumber();

  return (
    <div className="App">
      <p>Learn React, {sayHello(name)}</p>
      <h2>Your number is... {getNum}</h2>
      <h3>
        {getNum === 7 ? 'Lucky' : 'Unlucky...'}
      </h3>
    </div>
  );
}

export default App;
