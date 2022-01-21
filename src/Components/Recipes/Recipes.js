import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Recipes.css";

const Recipes = ({ category }) => {
  const [recipes, setRecipes] = useState([]);
  // category = category || "Vegan";
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (sessionStorage[category]) {
      setRecipes(JSON.parse(sessionStorage[category]));
    } else { 
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
      } catch (error) {
        return error;
      }
    };

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
              <a className="recipes-link" href={`/recipes/${recipe.id}`}>
                <img
                  className="recipes-list-image"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <p className="recipes-text">{recipe.title}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Recipes;
