import React from 'react';
import './Alonso.css';
import { SearchBar } from './SearchBar';
import alonso from '../Assets/Photos/alonso.png';
import Navbar from './Navbar';


function Alonso(){
  return (
    <>
    <Navbar/>
    <div className='backgrounda'>
      <div className='databoxa'> 
        <SearchBar driverChoice = "alonso"></SearchBar>
      </div>
      <div className='imgword-container'>
        <img src={alonso} alt="Alonso-Half-Body" className='img-container' />
        <span className='imgtext'>
          <span>Fernando Alonso</span>
          <br></br>
          <span>Aston Martin Driver</span>
          <br></br>
          <span>Two Time World Champion</span>
          <br></br>
        </span>
      </div>
    </div>
    </>
  )
}

export default Alonso;