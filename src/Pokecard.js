import React from 'react';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const Pokecard = (props) => {
  let imgSrc = `${POKE_API}/${props.id}.png`;

  return (
    <div className="Pokecard">
      <h1>{props.name}</h1>
      <img src={imgSrc} alt={props.name} />
      <div>Type: {props.type}</div>
      <div>Experience: {props.exp}</div>
    </div>
  )
}

export default Pokecard;