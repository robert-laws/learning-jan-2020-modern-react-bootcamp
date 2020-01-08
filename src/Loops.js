import React from 'react';

const Loops = ({ name = 'Ned', hobbies }) => {
  
  return (
    <div>
      <h4>Hello {name}!</h4>
      <ul>
        {hobbies.map(hobby => {
          return <li>{hobby}</li>
        })}
      </ul>
    </div>
  )
}

// Loops.defaultProps = {
//   name: 'Hal'
// }

export default Loops;