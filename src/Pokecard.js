import React from 'react';
// import Chart from 'react-google-charts';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
// const population_nyc = 10000000;
// const DATA_SOURCE = [
//   ['City', '2010 Population', '2000 Population'],
//   ['New York City, NY', 8175000, population_nyc],
//   ['Los Angeles, CA', 3792000, 3694000],
//   ['Chicago, IL', 2695000, 2896000],
//   ['Houston, TX', 2099000, 1953000],
//   ['Philadelphia, PA', 1526000, 1517000],
// ]

const Pokecard = (props) => {
  let imgSrc = `${POKE_API}/${props.id}.png`;

  return (
    <div className="Pokecard">
      <h1>{props.name}</h1>
      <img src={imgSrc} alt={props.name} />
      <div>Type: {props.type}</div>
      <div>Experience: {props.exp}</div>
      <hr />
      {/* <div style={{display: 'flex', maxWidth: 900}}>
        <Chart
          width={800}
          height={400}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={DATA_SOURCE}
          options={{
            title: 'Population of the Largest US Cities',
            chartArea: { width: '62%' },
            hAxis: {
              title: 'Total Population',
              minValue: 0
            },
            vAxis: {
              title: 'City'
            }
          }}
          legendToggle
          />
      </div> */}
    </div>
  )
}

export default Pokecard;