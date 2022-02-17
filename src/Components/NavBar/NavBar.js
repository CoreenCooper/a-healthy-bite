import { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";
import "./NavBar.css";

const NavBar = () => {
  // const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const location = useLocation();
  const history = useHistory();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push(`/recipes/${input}`);
  //   setInput("")
  // };

  // const handleInput = (e) => {
  //   setInput(e.target.value);
  // };

  const changeColor = location.pathname === "/" ? "" : "color-change";

  return (
    <nav className="nav-bar">
      <NavLink to="/" className={`logo ${changeColor}`}>
        <h1 className="logo-title color-change">A Healthy Bite</h1>
        <h5 className="Subheading">Healthy food for every mood</h5>
      </NavLink>
      {/* <form onSubmit={handleSubmit} className={`nav-search-form ${changeColor}`}>
        <label htmlFor="nav-input"></label>
        <input
          onChange={handleInput}
          name="nav-input"
          type="text"
          placeholder="Search by Ingredient"
          size="30"
          value={input}
        />
        <button type="submit">
          <i className={`fas fa-search ${changeColor}`}></i>
        </button>
      </form> */}
      <Search />
      <Menu />
      {/* <ul className={active ? "nav-menu nav-menu-active" : "nav-menu"}>
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
      </div> */}

      {/* {active ? (
        <>
          <div onClick={() => setActive(!active)}>X</div>
          <div onClick={() => setActive(!active)}>
            <i className="fas fa-bars"></i>
          </div>
        </>
      ) : (
        <ul className={active ? "nav-menu nav-menu-active" : "nav-menu"}>
        <NavLink
          className={`${location.pathname === "/" ? "" : "color-change"}`}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={`${location.pathname === "/" ? "" : "color-change"}`}
          to=""
        >
          <li>Recipes</li>
        </NavLink>
        <NavLink
          className={`${location.pathname === "/" ? "" : "color-change"}`}
          to="/about"
        >
          <li>About</li>
        </NavLink>
      </ul>
      )} */}
    </nav>
  );
};

export default NavBar;
