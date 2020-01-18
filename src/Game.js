import React, { useState } from 'react';

const Game = () => {
  const [score, updateScore] = useState(0);
  const [playerName, updatePlayerName] = useState('');

  const handleUpdateScore = event => {
    event.preventDefault();

    let randNum = Math.floor(Math.random() * 10 + 1);
    console.log(randNum);

    updateScore(randNum);
  }

  const handleUpdatePlayerName = event => {
    updatePlayerName(event.target.value);
  }

  return (
    <div className="Game">
      <h2>Game</h2>
      <p>Number: {score}</p>
      <button onClick={handleUpdateScore} style={{ display: `${score === 7 ? 'none' : 'inline-block'}` }}>Add Score by {playerName}</button>
      <br />
      <input type="text" name="playerName" value={playerName} onChange={handleUpdatePlayerName} />
      <br />
    </div>
  )
}

export default Game;