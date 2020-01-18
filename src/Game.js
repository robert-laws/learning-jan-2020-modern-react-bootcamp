import React, { useState } from 'react';

const Game = () => {
  const [score, updateScore] = useState(1);
  const [playerName, updatePlayerName] = useState('');

  const handleUpdateScore = event => {
    event.preventDefault();

    let randNum = Math.floor(Math.random() * 10) + 1;
    updateScore(randNum);
  }

  const handleUpdatePlayerName = event => {
    updatePlayerName(event.target.value);
  }

  return (
    <div className="Game">
      <h2>Number is: {score}</h2>
      {
        score === 7
        ? <h2>You Win!</h2>
        : <button onClick={handleUpdateScore}>Add Score by {playerName}</button>
      }
      <br />
      <input type="text" name="playerName" value={playerName} onChange={handleUpdatePlayerName} />
      <br />
    </div>
  )
}

export default Game;