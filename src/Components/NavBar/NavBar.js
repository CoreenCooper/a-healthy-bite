import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
      {/* show logo without back button on home page */}
      <NavLink to="/">
        <img
          src="https://spoonacular.com/application/frontend/images/food-api/ontology2.svg"
          alt="logo"
          id="logo"
        />
      </NavLink>
      {/* <img
        className="hamburger-menu-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png"
        alt="hamburger menu"
        id="hamburger-menu"
      /> */}
    </nav>
  );
};

export default NavBar;
