import React from 'react';
import './Russell.css';
import { SearchBar } from './SearchBar';
import russell from '../Assets/Photos/russell.png';
import Navbar from './Navbar';

function Russell(){
  return (
    <>
    <Navbar/>
    <div className='backgroundrus'>
      <div className='databoxrus'> 
        <SearchBar driverChoice = "russell"></SearchBar>
      </div>
      <div className='imgword-container'>
        <img src={russell} alt="Russell-Half-Body" className='img-container' />
        <span className='imgtext'>
          <span>George Russell</span>
          <br></br>
          <span>Mercedes AMG Driver</span>
          <br></br>
        </span>
      </div>
    </div>
    </>
  )
}

export default Russell;