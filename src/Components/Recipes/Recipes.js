import { useState, useEffect } from "react";
import axios from "axios";
// import "./Recipes.css";

const Recipes = ({ category }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      const fetchRecipes = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${category}&offset=${Math.floor(
          Math.random() * 300
        )}&number=1&nutrition=false`
      );
      setRecipes(res.data.results);
    } catch (error) {
      return error;
    }
  };

    fetchRecipes();
  }, [category])

  return (
    <main>
      <h2>List of Recipes from category {category}</h2>
      <p className="category-summary">
        Here goes a bit of a small portion of text about a vegetarian diet and
        it's benefits. this will contain a certain number of words, but not too
        much.
      </p>

      <ul>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id} className="recipe-list-items">
              <a href={`/recipes/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Recipes;
