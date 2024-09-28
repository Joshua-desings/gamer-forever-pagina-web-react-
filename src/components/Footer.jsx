import React from 'react';
import '../assets/styles/App.css';
import Logo from '../assets/images/logo_gamer_forever.png';
import NameLogo from '../assets/images/name_gamer_forever.png';
import { FaInstagram, FaTwitch, FaFacebookF, FaDiscord, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <div className="footer-logo-section">
          <div className="footer-logo-container">
            <img src={Logo} alt="Logo de la página" className="footer-logo" />
            <img src={NameLogo} alt="Nombre de la página" className="footer-name-logo" />
          </div>
          <p className="footer-description">
            Tenemos un catálogo exhaustivo de juegos, desde clásicos atemporales hasta las últimas novedades, junto con reseñas y calificaciones para gamers.
          </p>
        </div>
        <div className="footer-links-section">
          <h2>LINKS DE ACCESO</h2>
          <ul className="footer-links-list">
            <li><a href="#">Juegos</a></li>
            <li><a href="#">Categorías</a></li>
            <li><a href="#">Dispositivos</a></li>
            <li><a href="#">Empresas de videojuegos</a></li>
          </ul>
        </div>
        <div className="footer-social-section">
          <h2>REDES SOCIALES</h2>
          <div className="footer-social-icons">
            <a href="https://discord.com" className="footer-icon-discord"><FaDiscord /></a>
            <a href="https://twitter.com" className="footer-icon-twitter"><FaXTwitter /></a>
            <a href="https://instagram.com" className="footer-icon-instagram"><FaInstagram /></a>
            <a href="https://facebook.com" className="footer-icon-facebook"><FaFacebookF /></a>
            <a href="https://youtube.com" className="footer-icon-youtube"><FaYoutube /></a>
            <a href="https://twitch.tv" className="footer-icon-twitch"><FaTwitch /></a>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright-section">
        <p>&copy; 2023 GamesForever - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
