import React from 'react';
import './Piastri.css';
import { SearchBar } from './SearchBar';
import piastri from '../Assets/Photos/piastri.png';
import Navbar from './Navbar';

function Piastri(){
  return (
    <>
      <Navbar/>
      <div className='backgroundPi'>
        <div className='databoxPi'> 
          <SearchBar driverChoice = "piastri"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={piastri} alt="piastri-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Oscar Piastri</span>
            <br></br>
            <span>Mclaren Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Piastri;