import React from 'react';
import './Hulkenburg.css';
import { SearchBar } from './SearchBar';
import hulkenburg from '../Assets/Photos/hulkenburg.png';
import Navbar from './Navbar';

function Hulkenberg(){
  return (
    <>
      <Navbar/>
      <div className='backgroundHu'>
        <div className='databoxHu'> 
          <SearchBar driverChoice = "hulkenberg"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={hulkenburg} alt="Hulkenberg-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Nico Hulkenberg</span>
            <br></br>
            <span>HAAS Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Hulkenberg;