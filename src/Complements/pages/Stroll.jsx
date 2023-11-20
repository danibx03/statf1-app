import React from 'react';
import './Stroll.css';
import { SearchBar } from './SearchBar';
import stroll from '../Assets/Photos/stroll.png';
import Navbar from './Navbar';

function Stroll(){
  return (
    <>
      <Navbar/>
      <div className='backgroundst'>
        <div className='databoxst'> 
          <SearchBar driverChoice = "stroll"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={stroll} alt="Stroll-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Lance Stroll</span>
            <br></br>
            <span>Aston Martin Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Stroll;