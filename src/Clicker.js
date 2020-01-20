import React, { useState, useEffect } from 'react';

const Clicker = () => {
  const [count, updateCount] = useState(0);

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => updateCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Clicker;