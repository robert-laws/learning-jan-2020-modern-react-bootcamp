import React from 'react';
import useToggle from './hooks/useToggle';

const Toggler = () => {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeart, toggleIsHeart] = useToggle(false);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? ':D' : ':('}</h1>
      <h1 onClick={toggleIsHeart}>{isHeart ? '<3' : '</3'}</h1>
    </div>
  )
}

export default Toggler;