import React from 'react';
import './Guanyu.css';
import { SearchBar } from './SearchBar';
import guanyu from '../Assets/Photos/guanyu.png';
import Navbar from './Navbar';

function Guanyu(){
  return (
    <>
      <Navbar/>
      <div className='backgroundGu'>
        <div className='databoxGu'> 
          <SearchBar driverChoice = "guanyu"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={guanyu} alt="Guanyu-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Zhou Guanyu</span>
            <br></br>
            <span>Alfa Romeo Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  );
};

export default Guanyu;