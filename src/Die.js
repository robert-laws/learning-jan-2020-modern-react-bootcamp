import React from 'react';

const Die = ({ dieRoll }) => {
  return (
    <div className="Die">
      <i className={`fas fa-dice-${dieRoll}`}></i>
    </div>
  )
}

export default Die;