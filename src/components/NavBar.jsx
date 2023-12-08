import React from 'react';
import '../assets/styles/App.css'; // Asegúrate de ajustar la ruta al archivo NavBar.css

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list-horizontal">
        <li>
          <a href="/" className="nav-item">
            PAGINA PRINCIPAL
          </a>
        </li>
        <li>
          <a href="/categorias" className="nav-item">
            CATEGORIAS
          </a>
        </li>
        <li>
          <a href="/dispositivos" className="nav-item">
            DISPOSITIVOS
          </a>
        </li>
        <li>
          <a href="/empresas" className="nav-item">
            EMPRESAS DE VIDEOJUEGOS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
