import React from 'react';
import './Perez.css';
import { SearchBar } from './SearchBar';
import perez from '../Assets/Photos/perez.png';
import Navbar from './Navbar';

function Perez(){
  return (
    <>
      <Navbar/>
      <div className='backgroundPe'>
        <div className='databoxPe'> 
          <SearchBar driverChoice = "perez"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={perez} alt="Perez-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Checo Perez</span>
            <br></br>
            <span>Red Bull Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Perez;