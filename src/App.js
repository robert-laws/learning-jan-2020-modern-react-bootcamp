import React from 'react';

import Hello from './Hello';
import Greeting from './Greeting';
import Slots from './Slots';
import Loops from './Loops';

import fruits from './Foods';
import { choice, remove } from './Helpers';

import './App.scss';

function App() {
  const myChoice = choice(fruits);
  const remainingFruits = remove(fruits, myChoice);

  return (
    <div>
      <Hello />
      <Greeting name='Jim' number={5} arrivedOnTime />
      <hr />
      <Slots s1="x" s2="x" s3="y" />
      <hr />
      <Loops name='Bob' hobbies={['golf', 'chess', 'swimming', 'painting', 'video games']} />
      <Loops hobbies={['walking', 'tv']} />
      <hr />
      <p>I'd like one {myChoice}, please.</p>
      <p>Here you go: {myChoice}</p>
      <p>Delicious! May I have another?</p>
      <p>I'm sorry, we're all out. We have {
        remainingFruits.map(fruit => `${fruit}, `)  
      } left.</p>
    </div>
  );
}

export default App;
