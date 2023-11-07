//Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa el archivo CSS

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre-mi">About me</Link>
        </li>
        <li className="nav-item">
          <Link to="/proyectos">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
