import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Recipes.css";
import BackButton from "../BackButton/BackButton";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { category } = useParams();

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
  // get random recipes by category and search term
  // `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&diet=${category}&query=${input}&sort=random`

  useEffect(() => {
    let todaysDate = getTodaysDate();
    const searchDateCategory = `searchDate_${category}`;
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
            process.env.REACT_APP_SPOONACULAR_API_KEY
          }&diet=${category}&instructionsRequired=true&sort=random&number=12`
        );
        console.log(res.data.results)
        setRecipes(res.data.results);
        // sessionStorage.setItem(category, JSON.stringify(res.data.results));
        // sessionStorage.setItem(searchDateCategory, todaysDate);
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
      <BackButton />
      <h2 className="recipes-main-heading">
        {category[0].toUpperCase() + category.slice(1)} Dishes
      </h2>
      <ul className="recipes-list">
        {recipes.map((recipe) => {
          return (
            <li className="recipes-list-items" key={recipe.id}>
              <Link
                className="recipes-link"
                to={`/recipes/${category}/${recipe.id}`}
              >
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
