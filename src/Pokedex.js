import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = props => {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      {
        props.pokemon.map(p => (
          <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))
      }
    </div>
  )
}

Pokedex.defaultProps = {
  pokemon: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  ]
}

export default Pokedex;