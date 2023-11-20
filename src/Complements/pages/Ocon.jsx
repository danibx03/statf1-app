import React from 'react';
import './Ocon.css';
import { SearchBar } from './SearchBar';
import ocon from '../Assets/Photos/ocon.png';

function Ocon(){
  return (
    <div className='backgroundO'>
      <div className='databox'> 
        <SearchBar driverChoice = "ocon"></SearchBar>
      </div>
      <div className='imgword-container'>
        <img src={ocon} alt="Ocon-Half-Body" className='img-container' />
        <span className='imgtext'>
          <span>Esteban Ocon</span>
          <br></br>
          <span>Alpine Driver</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Ocon;