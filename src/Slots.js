import React from 'react';

const Slots = ({ s1, s2, s3 }) => {
  const win = (s1 === s2) && (s2 === s3);

  return (
    <div className='Slots'>
      <h3 className={win ? 'winner' : 'loser'}>
        {
          win ? 'You Win' : 'You Lose'
        }
      </h3>
      <p style={{ fontSize: '36px', lineHeight: 0.5 }}>{s1} {s2} {s3}</p>
    </div>
  )
}

export default Slots;