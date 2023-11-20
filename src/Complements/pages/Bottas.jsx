import React from 'react';
import './Bottas.css';
import { SearchBar } from './SearchBar';
import bottas from '../Assets/Photos/bottas.png';
import Navbar from './Navbar';


function Bottas(){
  return (
    <>
      <Navbar/>
      <div className='backgroundb'>
        <div className='databoxb'> 
          <SearchBar driverChoice = "bottas"></SearchBar>
        </div>
        <div className='imgword-container'>
          <img src={bottas} alt="Bottas-Half-Body" className='img-container' />
          <span className='imgtext'>
            <span>Valterri Bottas</span>
            <br></br>
            <span>Alfa Romeo Driver</span>
            <br></br>
          </span>
        </div>
      </div>
    </>
  )
}

export default Bottas;