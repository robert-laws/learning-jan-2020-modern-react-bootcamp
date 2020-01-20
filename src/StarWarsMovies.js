import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWarsMovies = () => {
  const [number, updateNumber] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      console.log(response.data.title)
    }
    fetchData();
  })

  return (
    <div>
      <h1>Pick a Movie</h1>
      <h4>You Chose: {number}</h4>
      <select value={number} onChange={e => updateNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  )
}

export default StarWarsMovies;