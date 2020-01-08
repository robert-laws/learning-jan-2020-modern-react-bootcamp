import React from 'react';

import Hello from './Hello';
import Greeting from './Greeting';
import Slots from './Slots';
import Loops from './Loops';

import './App.scss';

function App() {
  return (
    <div>
      <Hello />
      <Greeting name='Jim' number={5} arrivedOnTime />
      <hr />
      <Slots s1="x" s2="x" s3="x" />
      <hr />
      <Loops name='Bob' hobbies={['golf', 'chess', 'swimming', 'painting', 'video games']} />
      <Loops hobbies={['walking', 'tv']} />
    </div>
  );
}

export default App;
