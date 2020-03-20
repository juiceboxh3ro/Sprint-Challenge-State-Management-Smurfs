import React, { useContext } from 'react'
import axios from 'axios'

import SmurfContext from '../context/SmurfContext'

import papa from '../img/papa.png'

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
      <img id="papa" src={papa} alt="Papa's in the house"/>
      <section className="input-group">
        <label className="the-label" htmlFor="name"><span className="the-label">Name</span></label><br />
        <input onChange={handleChanges} autoFocus id="name" name="name" type="text" value={newSmurf.name}/>
      </section>
      
      <section className="input-group">
        <label htmlFor="age">Age</label><br />
        <input onChange={handleChanges} autoFocus id="age" name="age" type="text" value={newSmurf.age}/>
      </section>

      <section className="input-group">
        <label htmlFor="height">Height</label><br />
        <input onChange={handleChanges} autoFocus id="height" name="height" type="text" value={newSmurf.height}/>
      </section>

      <button className="smurf-button" type="submit">Add Smurf</button>
    </form>
  )
}

export default SmurfForm
