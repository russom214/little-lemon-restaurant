import React, { useState } from "react";
import Logo from "../images/Logo .svg";

const Nav = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" />
      </a>

      {/* Hamburger bar for Mobile Device  */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
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
