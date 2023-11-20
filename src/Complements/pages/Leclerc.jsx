import React from 'react';
import './Leclerc.css';
import { SearchBar } from './SearchBar';
import leclerc from '../Assets/Photos/leclerc.png';
import Navbar from './Navbar';

function Leclerc(){
  return (
    <>
      <Navbar/>
      <div className='backgroundlec'>
        <div className='databoxle'> 
          <SearchBar driverChoice = "leclerc"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={leclerc} alt="Leclerc-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Charles Leclerc</span>
            <br></br>
            <span>Ferrari Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
    
  )
}

export default Leclerc;