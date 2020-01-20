import React, { useState } from 'react';
import Die from './Die';

const RollDice = ({ sides }) => {
  const [rollOne, updateRollOne] = useState('one');
  const [rollTwo, updateRollTwo] = useState('one');
  const [isRolling, updateIsRolling] = useState(false);

  const rollDie = () => {
    updateIsRolling(true);
    updateRollOne(getRandomNumber())
    updateRollTwo(getRandomNumber())

    // wait 1 second and set isRolling to false
    setTimeout(() => {
      updateIsRolling(false)
    }, 1000);
  }

  const getRandomNumber = () => {
    let number = Math.floor(Math.random() * 6);
    return sides[number];
  }

  return (
    <div className="RollDice">
      <h1>Roll Dice</h1>
      <div className="RollDice-dice">
        <Die dieRoll={rollOne} rolling={isRolling} />
        <Die dieRoll={rollTwo} rolling={isRolling} />
      </div>
      <div className="RollDice-button">
        <button onClick={rollDie} disabled={isRolling}>
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    </div>
  )
}

RollDice.defaultProps = {
  sides: ['one', 'two', 'three', 'four', 'five', 'six']
}

export default RollDice;