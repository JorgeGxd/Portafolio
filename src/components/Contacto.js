import React from 'react';
import './Contacto.css'; // Importa el archivo CSS
import facebookLogo from './img/facebook.png'; // Importa el logo de Facebook
import twitterLogo from './img/twitter.png'; // Importa el logo de Twitter
import instagramLogo from './img/instagram.png'; // Importa el logo de Instagram
import arstationLogo from './img/artstation.png'; // Importa el logo de Instagram

function Contacto() {
  return (
    <div className="Contacto-container">
      <h1>Contact me!</h1>

      <div className="redes-sociales">
        <a href="https://www.facebook.com/jorgeleogg/?locale=es_LA" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://twitter.com/MishoMishin" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/noro._.mish/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a href="https://www.artstation.com/elmisho" target="_blank" rel="noopener noreferrer">
          <img src={arstationLogo} alt="Instagram" />
        </a>
      </div>
    </div>
  );
}

export default Contacto;

