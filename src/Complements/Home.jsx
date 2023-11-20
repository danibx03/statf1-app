import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <div className='homepage'>
        <Link to='/Home' className='name'> FORMULA 1 STATS  </Link> 
        <br></br>
        <Link to= '/Drivers' className ='driver'> Driver Page </Link>
        <br></br>
      </div>
    </>
  );
}

export default Home;