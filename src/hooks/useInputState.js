import { useState } from 'react';

export default initialVal => {
  const [value, updateValue] = useState(initialVal);

  const handleChange = event => {
    updateValue(event.target.value);
  }

  const reset = () => {
    updateValue('');
  }

  return [value, handleChange, reset];
}