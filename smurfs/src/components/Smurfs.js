import React, { useContext } from 'react'
import axios from 'axios'

import SmurfContext from '../context/SmurfContext'

const Smurfs = () => {
  const { smurf, initialSmurf, setNewSmurf, setTrigger } = useContext(SmurfContext);

  const killSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log('pong', res)
      setTrigger(res.data.length)
    })
    .catch(err => console.log(err))

    setNewSmurf(initialSmurf)
  }

  return (
    <div className="smurf-deck">
      {smurf.map(i => (
        <div key={i.id} className="card">
          <h2>{i.name}</h2>
          {i.age > 1 ? (<p>{i.age} years old</p>) : <p>{i.age} year old</p>}
          <p>{i.height}cm</p>
          <button id="smurf-kill" className="smurf-button" onClick={() => killSmurf(i.id)}></button>
        </div>
      ))}
    </div>
  )
}

export default Smurfs;