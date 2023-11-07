import React from 'react';
import './Proyectos.css'; // Importa el archivo CSS
import proyecto1Image from './img/bw.jpeg'; // Importa la imagen del proyecto 1
import proyecto2Image from './img/casa.jpg'; // Importa la imagen del proyecto 1
import proyecto3Image from './img/reeve.jpg'; // Importa la imagen del proyecto 1
import proyecto4Image from './img/lapida.jpg'; // Importa la imagen del proyecto 1
import proyecto5Image from './img/robot.jpg'; // Importa la imagen del proyecto 1
import proyecto6Image from './img/cofre.jpg'; // Importa la imagen del proyecto 1

function Proyectos() {
  return (
    <div className="Proyectos-container">
      <h1>Projects</h1>

      <div className="proyectos-list">
        <div className="proyecto">
          <img src={proyecto1Image} alt="Imagen del Proyecto 1" />
          <h2>B&W</h2>
          <p>The Alpha version of my videogame</p>
          <a href="https://misho15.itch.io/bw">Go to project</a>
        </div>

        <div className="proyecto">
          <img src={proyecto2Image} alt="Imagen del Proyecto 2" />
          <h2>Haunted House</h2>
          <p>A small environment of a Haunted House.</p>
          <a href="https://skfb.ly/oMYrI">Go to project</a>
        </div>

        <div className="proyecto">
          <img src={proyecto3Image} alt="Imagen del Proyecto 3" />
          <h2>Reeve</h2>
          <p>The 3D model of the main character in B&W.</p>
          <a href="https://skfb.ly/oMYrv">Go to project</a>
        </div>
      </div>
      <div className="proyectos-list2">
        <div className="proyecto">
          <img src={proyecto4Image} alt="Imagen del Proyecto 1" />
          <h2>Grave</h2>
          <p>A simple 3D model of a Grave.</p>
          <a href="https://skfb.ly/oMY8x">Go to project</a>
        </div>

        <div className="proyecto">
          <img src={proyecto5Image} alt="Imagen del Proyecto 2" />
          <h2>Robot</h2>
          <p>A 3D model of a robot with tentacles.</p>
          <a href="https://skfb.ly/oN7GK">Go to project</a>
        </div>

        <div className="proyecto">
          <img src={proyecto6Image} alt="Imagen del Proyecto 3" />
          <h2>Chest</h2>
          <p>A 3D model of a magic chest.</p>
          <a href="https://skfb.ly/oN7GP">Go to project</a>
        </div>
      </div>

    </div>
  );
}

export default Proyectos;
