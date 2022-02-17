import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Search.css";

const Search = ({ searchResults }) => {
  const [input, setInput] = useState("");
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/recipes/${input}`);
    setInput("")
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const changeColor = location.pathname === "/" ? "" : "color-change";
  
  const goBack = () => {
    history.goBack();
  };

  // https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${input}&number=1
  return (
    <form onSubmit={handleSubmit} className={`nav-search-form ${changeColor}`}>
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
    </form>
  );
};

export default Search;
