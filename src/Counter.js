import React, { useState } from 'react';

const Counter = () => {
  const [count, updateCount] = useState(0)

  const addToCounter = () => {
    updateCount(count + 1)
  }

  return (
    <div className="Counter">
      <h1>
        Counter: {count}
      </h1>
      <p>
        <button onClick={addToCounter}>Add One</button>
      </p>
    </div>
  )
}

export default Counter;