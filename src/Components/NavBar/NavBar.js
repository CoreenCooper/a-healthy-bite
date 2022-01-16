import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="logo">
        <h1 className="logo-title">A Healthy Bite</h1>
        <h5 className="Subheading">Healthy food for every mood</h5>
      </NavLink>
      <form className="nav-search-form">
        <label htmlFor="nav-input"></label>
        <input
          name="nav-input"
          type="text"
          placeholder="Search Recipes Here"
          size="30"
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <ul className="nav-menu collapsed-nav-menu">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
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
