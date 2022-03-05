import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Recipe.css";
import BackButton from "../BackButton/BackButton";

const Recipe = () => {
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState({});
  const { title, image, sourceUrl, servings, readyInMinutes, sourceName } =
    recipe;

  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&includeNutrition=false`
        );
        setRecipe(res.data);
        setIngredients(res.data.extendedIngredients);
        setSteps(res.data.analyzedInstructions[0].steps);
      } catch (error) {
        return error;
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <main className="recipe-main">
      <BackButton />
      <section className="recipe-main-section">
        <h2 className="recipe-main-heading">{title}</h2>
        <img className="recipe-image" src={image} alt="vegan" />
        <p className="recipe-prep-time">Preparation time: {readyInMinutes}</p>
        <p className="recipe-serving-size">Serving size: {servings}</p>
        <h3 className="recipe-ingredients-heading">Ingredients</h3>
        <ol className="recipe-ingredient-list">
          {ingredients.map((ingredient, idx) => {
            return (
              <li className="recipe-ingredient" key={idx}>
                <p className="recipe-ingredient-amount">
                  {ingredient.original}
                </p>
                {/* <p className="recipe-ingredient-unit">{ingredient.measures.us.unitLong}</p> */}
                {/* <p className="recipe-ingredient-name">{ingredient.name}</p> */}
              </li>
            );
          })}
        </ol>
        <h3 className="recipe-preparations-heading">Instructions</h3>
        <ol className="recipe-instructions-list">
          {steps.map((stepObj, idx) => {
            return (
              <li className="recipe-instructions" key={stepObj.number}>
                {stepObj.step}
              </li>
            );
          })}
        </ol>
        <a
          className="recipe-main-link"
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          Sourced from {sourceName}
        </a>
      </section>
    </main>
  );
};

export default Recipe;
