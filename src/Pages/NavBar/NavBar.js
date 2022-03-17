// import { useState } from "react";
import { NavLink } from "react-router-dom";
import Search from "../../Components/Search/Search";
import Menu from "../../Components/Menu/Menu";
import "./NavBar.css";

const NavBar = ({ setDishes, changeColor }) => {
  // const location = useLocation();

  // const changeColor = location.pathname === "/" ? "" : "color-change";

  return (
    <nav className="nav-bar">
      <NavLink to="/" className={`logo ${changeColor}`}>
        <h1 className="logo-title color-change">A Healthy Bite</h1>
        <h5 className="Subheading">Healthy food for every mood</h5>
      </NavLink>
      <Search setDishes={setDishes} changeColor={changeColor} />
      <Menu changeColor={changeColor} />
    </nav>
  );
};

export default NavBar;
