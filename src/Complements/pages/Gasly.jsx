import React from 'react';
import './Gasly.css';
import { SearchBar } from './SearchBar';
import gasly from '../Assets/Photos/gasly.png';
import Navbar from './Navbar';

function Gasly(){
  return (
    <>
      <Navbar/>
      <div className='backgroundGa'>
        <div className='databoxGa'> 
          <SearchBar driverChoice = "gasly"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={gasly} alt="Gasly-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Pierre Gasly</span>
            <br></br>
            <span>Alpine Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Gasly;