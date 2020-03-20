import React, { useContext } from 'react'
import axios from 'axios'

import SmurfContext from '../context/SmurfContext'

export const SmurfForm = () => {
  const { newSmurf, setNewSmurf, initialSmurf, setTrigger } = useContext(SmurfContext);

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = e => {
    e.preventDefault()
    
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      console.log('pong', res)
      setTrigger(res.data.length)
    })
    .catch(err => console.log(err))

    setNewSmurf(initialSmurf)
  }

  return (
    <form autoComplete="off" id="formy" onSubmit={submitForm}>
      <section className="input-group">
        <label htmlFor="name">Name</label><br />
        <input onChange={handleChanges} id="name" name="name" type="text" value={newSmurf.name}/>
      </section>
      
      <section className="input-group">
        <label htmlFor="age">Age</label><br />
        <input onChange={handleChanges} id="age" name="age" type="range" min="1" max="150" className="slider" value={newSmurf.age}/>
        <p>{newSmurf.age}</p>
      </section>

      <section className="input-group">
        <label htmlFor="height">Height</label><br />
        <input onChange={handleChanges} id="height" name="height" type="range" min="1" max="200" className="slider" value={newSmurf.height}/>
        <p>{newSmurf.height}</p>
      </section>

      <button className="smurf-button" type="submit">Add Smurf</button>
    </form>
  )
}

export default SmurfForm
