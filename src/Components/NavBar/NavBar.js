import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import axios from "axios";
import "./NavBar.css";

const NavBar = ({ category }) => {
  // const [input, setInput] = useState("");
  // const [recipeView, setRecipeView] = useState("");
  const [active, setActive] = useState(false);
  const location = useLocation();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   history.push(`/recipes/${input}`);
  // };

  // const fetchSearchResults = async (input) => {
  //   try {
  //     const res = await axios.get(
  //       `https://api.spoonacular.com/recipes/autocomplete?apiKey=0b323f1b126a44ce859b1e08df8a4bd6&number=1&query=${input}`
  //     );
      // console.log(res.data);
      // setSearchResults(res.data.results);
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // const handleInput = (e, input) => {
  //   setInput(e.target.value);
  //   // fetchSearchResults(input);
  // };



  return (
    <nav className="nav-bar">
      <NavLink to="/" className={`logo ${location.pathname === "/" ? "" : "color-change"}`}>
        <h1 className="logo-title color-change">A Healthy Bite</h1>
        <h5 className="Subheading">Healthy food for every mood</h5>
      </NavLink>
      <form className={`nav-search-form ${location.pathname === "/" ? "" : "color-change"}`}>
        <label htmlFor="nav-input"></label>
        <input
          // onChange={handleInput}
          // name="nav-input"
          type="text"
          placeholder="Search Recipes Here"
          size="30"
          // value={input}
        />
        <button type="submit">
          <i className={`fas fa-search ${location.pathname === "/" ? "" : "color-change"}`}></i>
        </button>
      </form>

      <ul className={
          active
            ? "nav-menu nav-menu-active"
            : "nav-menu"
        }>
        <NavLink className={`${location.pathname === "/" ? "" : "color-change"}`} to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className={`${location.pathname === "/" ? "" : "color-change"}`} to="">
          <li>Recipes</li>
        </NavLink>
        <NavLink className={`${location.pathname === "/" ? "" : "color-change"}`} to="/about">
          <li>About</li>
        </NavLink>
      </ul>
      <div
         className={
          active
            ? "nav-bar-collapsed-icon-active"
            : "nav-bar-collapsed-icon"
        }
        onClick={() => setActive(!active)}
      >
        <i className="fas fa-bars"></i>
      </div>
      <div
         className={
          active
            ? "nav-bar-collapsed-icon nav-bar-collapsed-icon-x"
            : "nav-bar-collapsed-icon-active"
        }
        onClick={() => setActive(!active)}
      >
        X
      </div>
    </nav>
  );
};

export default NavBar;
