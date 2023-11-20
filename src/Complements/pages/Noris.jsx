import React from 'react';
import './Noris.css';
import { SearchBar } from './SearchBar';
import norris from '../Assets/Photos/norris.png';

function Norris(){
  return (
    <div className='backgroundN'>
      <div className='databox'> 
        <SearchBar driverChoice = "norris"></SearchBar>
      </div>
      <div className='imgword-container'>
        <img src={norris} alt="Norris-Half-Body" className='img-container' />
        <span className='imgtext'>
          <span>Lando Norris</span>
          <br></br>
          <span>Mclaren Driver</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Norris;