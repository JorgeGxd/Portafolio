import React from 'react';
import './SobreMi.css';
import foto1 from './img/unity.png';
import foto2 from './img/3dsmax.png';
import foto3 from './img/substance.png';

function SobreMi() {
  return (
    <div>
      <div className="SobreMi-container">
        <h1>Welcome Choom!</h1>
        <p>My name is Jorge García. I'm a newbie trying to become the apogee of Videogame Design. With a passion for videogames which motivated me to create my own worlds and stories. I started the career of systems engineering in 2020, and I've been learning how to create videogames for 2 years. </p>

        {/* Nueva sección "Habilidades y Experiencia" */}
        <div className="HabilidadesExperiencia">
          <h2>Skills and Experience</h2>
          <p>I'm just getting started in the amazing world of videogame design, and I really enjoy designing levels, modeling and texturing 3D characters and props, and implementing them in Unity building some scenes. In a little project I'm working on, I made a Third Person Shooter character including Locomotion, Aiming, Shooting, Health and picking up weapons. In this project I also worked with AI enemies using Nav Mesh Agent, which include their Healthbar, Ragdoll and Locomotion. </p>
        </div>
      </div>

      {/* Mueve el div "Software" fuera de la SobreMi-container */}
      <div className="Software">
  <div className="software-container">
    <div className="imagen-descripcion">
      <img src={foto1} alt="Descripción de la imagen 1" />
      <h3>Unity</h3>
      <p>Environment building and characters configuration</p>
    </div>
    
    <div className="imagen-descripcion">
      <img src={foto2} alt="Descripción de la imagen 2" />
      <h3>3ds Max</h3>
      <p>Modelling for exporting out for game engines</p>
    </div>

    <div className="imagen-descripcion">
      <img src={foto3} alt="Descripción de la imagen 3" />
      <h3>Substance Painter</h3>
      <p>Apply textures, materials, and masks or UV mapping onto 3D assets</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default SobreMi;

