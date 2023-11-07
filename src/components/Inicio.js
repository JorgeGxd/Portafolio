import React from 'react';
import miFoto from './img/foto2.jpeg';
import './Inicio.css'; // Importa un archivo CSS para estilos específicos de Inicio

function Inicio() {
  return (
    <div className="inicio-container">
      <img src={miFoto} alt="Tu foto" className="profile-photo" />
      <h1>Jorge García</h1>
      <p>3D Artist & Game Developer</p>
    </div>
  );
}

export default Inicio;

