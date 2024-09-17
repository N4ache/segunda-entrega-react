import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Tokyo</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/category/sushi">Sushi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/ramen">Ramen</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/bebidas">Bebidas</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;