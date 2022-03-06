import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import "./Search.css";

const Search = () => {
  // const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");
  const location = useLocation();
  const history = useHistory();

  // const fetchSearchResults = async () => {
  //   try {
  //     const res = await axios.get(
  //       `https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${input}&sort=random&number=1`
  //     );
  //     // console.log(res.data)
  //     debugger
  //     setRecipes(res.data.results);
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetchSearchResults();
  //   history.push(`/recipes/${input}`);
  //   setInput("");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/recipes/${input}`);
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const changeColor = location.pathname === "/" ? "" : "color-change";

  // autocomplete recipe search
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
