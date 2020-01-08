import React from 'react';

const Slots = ({ s1, s2, s3 }) => {
  return (
    <div>
      {
        (s1 === s2) && (s2 === s3) ? 'You Win' : 'You Lose'
      }
      <p>{s1} {s2} {s3}</p>
    </div>
  )
}

export default Slots;