import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemon, exp, isWinner }) => {
  let title = isWinner ? 'Pokedex-winner' : 'Pokedex-loser';

  return (
    <div className="Pokedex">
      <div className="Pokedex-cards">
        {
          pokemon.map(p => (
            <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))
          }
      </div>
      <h2 className={title}>{isWinner ? 'Winner!' : 'Loser!'}</h2>
      <p>Total Experience: {exp}</p>
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