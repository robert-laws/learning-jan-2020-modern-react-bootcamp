import React from 'react';
import Pokedex from './Pokedex';

const Pokegame = ({ pokemon }) => {
  let hand1 = [];
  let hand2 = [...pokemon]

  while(hand1.length < hand2.length) {
    let randIndex = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIndex, 1)[0];
    hand1.push(randPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

  return (
    <div className="Pokegame">
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  )
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  ]
}

export default Pokegame;