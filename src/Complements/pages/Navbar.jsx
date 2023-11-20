import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Drivers" className="nav-link">
          Driver Hub
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
