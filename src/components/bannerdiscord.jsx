// DiscordBanner.jsx
import React from 'react';
import '../assets/styles/App.css';

const DiscordBanner = () => {
  return (
    <div className="discord-banner">
      <div className="content-container">
        <h2>UNETE A NUESTRA <span>COMUNIDAD</span></h2>
        <p>
          Una comunidad de Discord que está siendo creada y mantenida por jugadores para jugadores.
          Todos son bienvenidos a unirse, sin importar el juego que juegues; estamos aquí para divertirnos.
        </p>
        <a href="https://discord.com/invite/WwXkCGHjBx" target="_blank" rel="noopener noreferrer">
          Unete a Discord
        </a>
      </div>
    </div>
  );
};

export default DiscordBanner;
