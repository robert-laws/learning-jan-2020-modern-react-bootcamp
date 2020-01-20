import React from 'react';

const Die = ({ dieRoll, rolling }) => {
  return (
    <div className={`Die ${rolling ? 'wobbling' : ''}`}>
      <i className={`fas fa-dice-${dieRoll}`}></i>
    </div>
  )
}

export default Die;