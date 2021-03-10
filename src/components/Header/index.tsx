import React from "react";

import "./styles.css"

import logo from '../../images/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__items left">
          <div className="nav__brand">
            <a href="#">
              <img src={logo}alt="logo" />
            </a>
          </div>
          {/* <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul> */}
        </div>

        {/* <div className="nav__items right">
          <ul>
            <li className="nav__login__button">
              <a href="#">Login</a>
            </li>
            <li className="nav__signup__button">
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
