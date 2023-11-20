import React from 'react';
import './Sargeant.css';
import { SearchBar } from './SearchBar';
import sargeant from '../Assets/Photos/sargeant.png';
import Navbar from './Navbar';

function Sargeant(){
  return (
    <>
      <Navbar/>
      <div className='backgroundsarg'>
        <div className='databoxsarg'> 
          <SearchBar driverChoice = "sargeant"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={sargeant} alt="Sargeant-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Logan Sargeant</span>
            <br></br>
            <span>Williams Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Sargeant;