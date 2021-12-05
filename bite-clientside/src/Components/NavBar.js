import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
      <NavLink to="/">
        <img
          src="https://spoonacular.com/application/frontend/images/food-api/ontology2.svg"
          alt="logo"
          id="logo"
        />
      </NavLink>
  );
};

export default NavBar;
