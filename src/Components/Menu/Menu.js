import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Menu/Menu.css";

const Menu = ({ changeColor }) => {
  const [active, setActive] = useState(false);
  // const location = useLocation();

  // const changeColor = location.pathname === "/" ? "" : "color-change";
  const changeMenu = active
    ? "nav-menu-collapsed-icon-active"
    : "nav-menu-collapsed-icon";

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
        className={`${changeMenu} ${changeColor}`}
        onClick={() => setActive(!active)}
      >
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
