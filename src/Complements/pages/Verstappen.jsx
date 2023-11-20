import React from 'react';
import './Verstappen.css';
import { SearchBar } from './SearchBar';
import maxphoto from '../Assets/Photos/maxphoto.png';
import Navbar from './Navbar';

function MaxDriverStat(){
  return (
    <>
      <Navbar/>
      <div className='backgroundM'>
        <div className='databoxV'> 
          <SearchBar driverChoice = "max_verstappen"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={maxphoto} alt="Max-Verstappen-Photo-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Max Verstappen</span>
            <br></br>
            <span>Red Bull Driver</span>
            <br></br>
            <span>Three Time World Champion</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default MaxDriverStat;