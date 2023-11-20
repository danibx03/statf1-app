import React from 'react';
import './Albon.css';
import { SearchBar } from './SearchBar';
import albon from '../Assets/Photos/albon.png';
import Navbar from './Navbar';

function Albon(){
  return (
    <>
      <Navbar/>
      <div className='backgroundal'>
        <div className='databoxal'> 
          <SearchBar driverChoice = "albon"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={albon} alt="Albon-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Alex Albon</span>
            <br></br>
            <span>Williams Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Albon;