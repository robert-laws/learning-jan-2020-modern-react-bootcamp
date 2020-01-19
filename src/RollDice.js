import React, { useState } from 'react';
import Die from './Die';

const RollDice = ({ sides }) => {
  const [rollOne, updateRollOne] = useState('one');
  const [rollTwo, updateRollTwo] = useState('one');

  const rollDie = () => {
    updateRollOne(getRandomNumber())
    updateRollTwo(getRandomNumber())
  }

  const getRandomNumber = () => {
    let number = Math.floor(Math.random() * 6);
    return sides[number];
  }

  return (
    <div className="RollDice">
      <h1>Roll Dice</h1>
      <div className="RollDice-dice">
        <Die dieRoll={rollOne} />
        <Die dieRoll={rollTwo} />
      </div>
      <div className="RollDice-button">
        <button onClick={rollDie}>Roll Dice</button>
      </div>
    </div>
  )
}

RollDice.defaultProps = {
  sides: ['one', 'two', 'three', 'four', 'five', 'six']
}

export default RollDice;