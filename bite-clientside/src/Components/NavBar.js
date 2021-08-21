import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">
        <img
          src="https://spoonacular.com/application/frontend/images/food-api/ontology2.svg"
          alt="recipe"
          id="recipeIcon"
        />
      </NavLink>
    </div>
  );
};

export default NavBar;
