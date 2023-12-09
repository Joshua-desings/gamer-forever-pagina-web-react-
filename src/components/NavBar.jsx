import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/App.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list-horizontal">
        <li>
          <Link to="/" className="nav-item">
            PAGINA PRINCIPAL
          </Link>
        </li>
        <li>
          <Link to="/categorias" className="nav-item">
            CATEGORIAS
          </Link>
        </li>
        <li>
          <Link to="/dispositivos" className="nav-item">
            DISPOSITIVOS
          </Link>
        </li>
        <li>
          <Link to="/empresas" className="nav-item">
            EMPRESAS DE VIDEOJUEGOS
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
