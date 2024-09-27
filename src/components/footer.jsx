// Footer.jsx
import React from 'react';
import '../assets/styles/App.css';
import Logo from '../assets/images/logo_gamer_forever.png';
import NameLogo from '../assets/images/name_gamer_forever.png';
import logodisc from '../assets/images/discordlogo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icon">
          <div className="logo-container">
            <img src={Logo} alt="Logo de la página" className="logo" />
            <img src={NameLogo} alt="Nombre de la página" className="name-logo" />
          </div>
          <div className="footer-info">
          <p>Tenemos un catálogo exhaustivo de juegos, desde clásicos atemporales hasta las últimas novedades, junto con reseñas, calificaciones para gamers</p>
        </div>
        </div>
        <div className="footer-links">
        <h2>Links de acceso</h2>
          <ul>
            <li><a href="#">Juegos</a></li>
            <li><a href="#">Categorías</a></li>
            <li><a href="#">Dispositivos</a></li>
            <li><a href="#">Empresas de videojuegos</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h2>Redes sociales</h2>
          <img src={logodisc} alt="discord icono" className="discord-icono" />
          <i className="fa-icon fa fa-twitter"></i>
          <i className="fa-icon fa fa-instagram"></i>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright">
        <p>&copy; Copyright © 2023 GamesForever - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
