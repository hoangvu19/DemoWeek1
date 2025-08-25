import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="logo">MyPortfolio</h2>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;