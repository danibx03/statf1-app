import React from 'react';
import './Hamilton.css';
import { SearchBar } from './SearchBar';
import hamilton from '../Assets/Photos/hamilton.png';
import Navbar from './Navbar';

function Hamilton(){
  return (
    <>
      <Navbar/>
      <div className='backgroundHam'>
        <div className='databoxHam'> 
          <SearchBar driverChoice = "hamilton"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={hamilton} alt="Hamilton-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Lewis Hamilton</span>
            <br></br>
            <span>Mercedes AMG Driver</span>
            <br></br>
            <span>Seven Time World Champion</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Hamilton;