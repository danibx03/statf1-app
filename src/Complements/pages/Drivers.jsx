import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Drivers.css';
import Navbar from './Navbar';

function Drivers (){

    const driverTitles = [
        "Albon", "Alonso", "Bottas", "Gasly", "Guanyu", "Hamilton", "Hulkenburg", 
        "Leclerc", "Magnussen", "Verstappen", 
        "Perez", "Piastri", "Russell", "Sainz", "Sargeant", "Stroll","Tsunoda"  
    ];

    const buttons = driverTitles.map((driver, index) => (
        <Link to={`/${driver}`} key={index} className="button-design"> {driver}
        </Link>
    ));

    return (
        <>
        <Navbar />
        <div className='background'>
            <h1 className = 'hdesign'>2023 F1 DRIVER LINEUP</h1>
            <div className="button-layout">{buttons}</div>;
        </div>
        </>
        
    );
};

export default Drivers;
