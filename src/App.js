import React from 'react';
import Pokecard from './Pokecard';


// styles
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Pokecard id={4} name="Charmander" type="first" exp={62} />
    </div>
  );
}

export default App;
