import React from 'react';
import './Magnussen.css';
import { SearchBar } from './SearchBar';
import magnussen from '../Assets/Photos/magnussen.png';
import Navbar from './Navbar';


function Magnussen(){
  return (
    <>
      <Navbar/>
      <div className='backgroundMag'>
        <div className='databoxMag'> 
          <SearchBar driverChoice = "magnussen"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={magnussen} alt="Magnussen-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Kevin Magnussen</span>
            <br></br>
            <span>HAAS Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Magnussen;