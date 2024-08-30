import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#home">Tokyo</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#menu">Menú</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">Sobre Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contacto</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;



