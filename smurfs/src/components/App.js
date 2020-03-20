import React, { useState, useEffect } from 'react'
import axios from 'axios'
// Components
import Smurfs from './Smurfs'
import SmurfForm from './SmurfForm';

// Context
import SmurfContext from '../context/SmurfContext';

export default function App () {
  const initialSmurf = {
    name: '',
    age: '0',
    height: '1'
  }

  const [smurf, setSmurf] = useState([]);
  const [newSmurf, setNewSmurf] = useState(initialSmurf);
  const [trigger, setTrigger] = useState(0);
  const myProps = {smurf, newSmurf, setNewSmurf, initialSmurf, setTrigger}

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('ping', res)
      setSmurf(res.data)
    })
    .catch(err => console.log(err))
  },[trigger])


  return (
    <div className="App">
      <SmurfContext.Provider value={myProps} >
        <SmurfForm />
        <Smurfs />
      </SmurfContext.Provider>
    </div>
  )
}