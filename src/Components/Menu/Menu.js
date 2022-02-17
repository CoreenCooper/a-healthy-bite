import { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
// import Search from "../Search/Search";
import "../Menu/Menu.css";

const Menu = () => {
  // const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const changeColor = location.pathname === "/" ? "" : "color-change";

  return (
      <>
      <ul className={active ? "nav-menu nav-menu-active" : "nav-menu"}>
        <NavLink className={`${changeColor}`} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={`${changeColor}`} to="">
          <li>Recipes</li>
        </NavLink>
        <NavLink className={`${changeColor}`} to="/about">
          <li>About</li>
        </NavLink>
      </ul>

      <div
        className={
          active ? "nav-menu-collapsed-icon-active" : "nav-menu-collapsed-icon"
        }
        onClick={() => setActive(!active)}>
        <i className="fas fa-bars"></i>
      </div>

      <div
        className={
          active ? "nav-menu-close-icon" : "nav-menu-close-icon-active"
        }
        onClick={() => setActive(!active)}
      >
        X
      </div>
      </>
  );
};



export default Menu;
