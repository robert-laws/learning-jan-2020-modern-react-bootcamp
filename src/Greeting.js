import React from 'react';

const Greeting = ({ name, number, arrivedOnTime }) => {
  console.log(arrivedOnTime);

  return (
    <div>
      <h3>Hello {name}, your number is {number}. You have arrived: {arrivedOnTime.toString()}</h3>
    </div>
  )
}

export default Greeting;