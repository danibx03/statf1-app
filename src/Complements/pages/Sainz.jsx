import React from 'react';
import './Sainz.css';
import { SearchBar } from './SearchBar';
import sainz from '../Assets/Photos/sainz.png';
import Navbar from './Navbar';

function Sainz(){
  return (
    <>
      <Navbar/>
      <div className='backgroundsai'>
        <div className='databox'> 
          <SearchBar driverChoice = "sainz"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={sainz} alt="Sainz-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Carlos Sainz</span>
            <br></br>
            <span>Ferrari Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Sainz;