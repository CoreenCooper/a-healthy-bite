import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <h1 className="Heading-Title">A HEALTHY BITE</h1>
        <h5 className="Subheading">Healthy food for every mood.</h5>
      </div>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink  to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/recipes">
          <li>Recipes</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
