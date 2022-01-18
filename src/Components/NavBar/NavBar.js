import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import "./NavBar.css";

const NavBar = ({ category, setSearchResults, searchResults }) => {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/recipes/${input}`);
  };

  const fetchSearchResults = async (input) => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=0b323f1b126a44ce859b1e08df8a4bd6&number=1&query=${input}`
      );
      console.log(res.data);
      // setSearchResults(res.data.results);
    } catch (error) {
      return error;
    }
  };

  const handleInput = (e, input) => {
    setInput(e.target.value);
    fetchSearchResults(input);
  };

  // useEffect(() => {
  //   fetchSearchResults();
  // }, [searchResults]);

  return (
    <nav className="nav-bar">
      <NavLink to="/" className="logo">
        <h1 className="logo-title">A Healthy Bite</h1>
        <h5 className="Subheading">Healthy food for every mood</h5>
      </NavLink>
      <form onSubmit={handleSubmit} className="nav-search-form">
        <label htmlFor="nav-input"></label>
        <input
          onChange={handleInput}
          name="nav-input"
          type="text"
          placeholder="Search Recipes Here"
          size="30"
          value={input}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <ul className={
          active
            ? "nav-menu nav-menu-active"
            : "nav-menu"
        }>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/recipes">
          <li>Recipes</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
      </ul>
      <div
        className="nav-bar-collapsed-icon"
        onClick={() => setActive(!active)}
      >
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default NavBar;
