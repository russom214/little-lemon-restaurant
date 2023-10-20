import React from 'react'
import Logo from "../images/Logo .svg";

const Nav = () => {
  return (
    <nav>
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>

      {/* Hamburger bar for Mobile Device  */}
      <div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation items */}
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;