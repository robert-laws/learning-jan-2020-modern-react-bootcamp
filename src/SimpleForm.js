import React, { useState } from 'react';

const SimpleForm = () => {
  const [email, updateEmail] = useState('');
  const handleChange = e => {
    updateEmail(e.target.value)
  }

  return (
    <div>
      <h1>The value is... <br/>{email}</h1>
      <input type='text' value={email} onChange={handleChange} />
      <button onClick={() => updateEmail('')}>Reset</button>
    </div>
  )
}

export default SimpleForm;