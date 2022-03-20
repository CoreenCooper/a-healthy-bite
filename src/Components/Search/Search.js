import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { searchPlaceholders } from "../../utils/data";
import axios from "axios";
import "./Search.css";

const Search = ({ setBulkRecipes, changeColor }) => {
  const [searchResults, setSearchResults] = useState([]);
  // const [bulkRecipes, setBulkRecipes] = useState([]);
  const [bulkRecipeIds, setBulkRecipeIds] = useState([]);
  const [input, setInput] = useState("");
  const location = useLocation();
  const history = useHistory();


  // Search for recipes by partial title to get id numbers to use in bulk recipe search
  const fetchRecipeIdsByName = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${input}&number=3`
      );
      // console.log("searchRecipes: ", res.data);
      setSearchResults(res.data);
    } catch (error) {
      return error;
    }
  };

  // Create an array of recipe ids to use in bulk recipes API call
  const getBulkRecipeIds = searchResults.map((recipe) => recipe.id);
  // console.log(getBulkRecipeIds);

  // Get bulk recipes by passing in an array of recipe ids
  // *** getBulkRecipeIds should be Numbers separated by commas
  // Tried: parseFloat, .join(), regex, passing in one recipe by keying into res.data[0][id]
  // is there away to iterate thriough the array of number and place a number separated by a comma to line 40?
  const fetchBulkRecipes = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=552152,39815,117165`
        // `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&ids=${getBulkRecipeIds}`
      );
      console.log("bulkRecipes: ", res.data);
      setBulkRecipes(res.data);
    } catch (error) {
      return error;
    }
  };

// &ids=552152,39815,117165
// &ids=${bulkRecipeIds[0]},${bulkRecipeIds[1]},${bulkRecipeIds}

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipeIdsByName();
    fetchBulkRecipes();
    history.push(`/recipes/${input}`);
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // autocomplete recipe search
  // https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${input}&number=1
  return (
    <form onSubmit={handleSubmit} className={`nav-search-form ${changeColor}`}>
      <label htmlFor="nav-input"></label>
      <input
        onChange={handleInput}
        name="nav-input"
        type="text"
        placeholder={
          searchPlaceholders[location.pathname] || "Search for a new recipe"
        }
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
