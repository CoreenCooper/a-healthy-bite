import React from "react";
import { NavLink } from "react-router-dom";

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
      {/* <NavLink to={`/recipes`}>
        <button>Back</button>
      </NavLink> */}
    </nav>
  );
};

export default NavBar;
