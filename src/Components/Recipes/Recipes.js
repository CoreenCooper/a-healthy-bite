import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { category } = useParams();

  // if (!!category) {
  //   debugger;
  //   console.log(category);
  // }

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const getTodaysDate = () => {
    const today = new Date().toJSON().split("T")[0];
    return today;
  };

  /**
   * @param {string} today
   * @param {string} savedDate
   * @returns boolean
   */
  const isDateDifferent = (today, savedDate) => {
    return today !== savedDate;
  };

  useEffect(() => {
    let todaysDate = getTodaysDate();
    const searchDateCategory = `searchDate_${category}`;
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
            process.env.REACT_APP_SPOONACULAR_API_KEY
          }&query=${category}&offset=${Math.floor(
            Math.random() * 300
          )}&number=12&nutrition=false`
        );
        setRecipes(res.data.results);
        sessionStorage.setItem(category, JSON.stringify(res.data.results));
        sessionStorage.setItem(searchDateCategory, todaysDate);
      } catch (error) {
        return error;
      }
    };

    if (sessionStorage[category] && sessionStorage[searchDateCategory]) {
      if (isDateDifferent(todaysDate, sessionStorage[searchDateCategory])) {
        fetchRecipes();
      } else {
        setRecipes(JSON.parse(sessionStorage[category]));
      }
    } else {
      fetchRecipes();
    }
  }, [category]);

  return (
    <main className="recipes-main">
      <button className="recipes-back-btn" onClick={goBack}>
        {"<"} Back
      </button>
      <h2 className="recipes-main-heading">{category} Dishes</h2>
      <ul className="recipes-list">
        {recipes.map((recipe) => {
          return (
            <li className="recipes-list-items" key={recipe.id}>
              <Link className="recipes-link" to={`/recipes/${recipe.id}`}>
                <img
                  className="recipes-list-image"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <p className="recipes-text">{recipe.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Recipes;
