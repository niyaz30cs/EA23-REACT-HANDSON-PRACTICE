import React, { useState } from "react";
import "./HamBerger.css"; // We'll create this CSS file in the next step

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
        <div className="icon-bar"></div>
      </div>
      <ul className={`menu-items ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
