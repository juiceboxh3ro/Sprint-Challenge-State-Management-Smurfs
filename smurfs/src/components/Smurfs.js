import React, { useContext } from 'react'

import SmurfContext from '../context/SmurfContext'

const Smurfs = () => {
  const { smurf } = useContext(SmurfContext);

  return (
    <div className="smurf-card">
      {smurf.map(i => (
        <div key={i.id} className="card">
          <h2>{i.name}</h2>
          {i.age > 1 ? (<p>{i.age} years old</p>) : <p>{i.age} year old</p>}
          <p>{i.height}cm</p>
        </div>
      ))}
    </div>
  )
}

export default Smurfs;