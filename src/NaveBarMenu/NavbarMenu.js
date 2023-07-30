import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Routes, Route } from "react-router-dom";
import "./NavbarMenu.css";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Hollywood from "./Hollywood";
import Technology from "./Technology";
import Fitness from "./Fitness";
import Food from "./Food";

function NavbarMenu() {
  // console.log("hello");
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar2">
        {/* <div>Niyaz</div> */}
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                // exact
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/bollwood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/hollywood"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hollywood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/technology"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/fitness"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Fitness
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/food"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Food
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ?"fas fa-times" : "fas fa-bars"}></i> */}
            {click ?<FaTimes />:<FaBars />}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollwood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
      </Routes>
    </>
  );
}

export default NavbarMenu;
