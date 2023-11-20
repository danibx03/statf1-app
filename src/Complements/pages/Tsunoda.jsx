import React from 'react';
import './Tsunoda.css';
import { SearchBar } from './SearchBar';
import tsunoda from '../Assets/Photos/tsunoda.png';
import Navbar from './Navbar';

function Tsunoda(){
  return (
    <>
      <Navbar/>
      <div className='backgroundt'>
        <div className='databoxt'> 
          <SearchBar driverChoice = "tsunoda"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={tsunoda} alt="Tsunoda-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Yuki Tsunoda</span>
            <br></br>
            <span>Alpha Tauri Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Tsunoda;