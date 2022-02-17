import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./Recipe.css";

const Recipe = () => {
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState({});
  const { title, instructions, image, sourceUrl, servings, readyInMinutes, sourceName } = recipe;

  const { id } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  
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
      <button className="recipe-back-btn back-btn" onClick={goBack}>
        {"<"} Back
      </button>

      <section className="recipe-main-section">
        <h2 className="recipe-main-heading">{title}</h2>
        <img className="recipe-image" src={image} alt="vegan"/>
        <p className="recipe-prep-time">Preparation time: {readyInMinutes}</p>
        <p className="recipe-serving-size">Serving size: {servings}</p>
        <h3 className="recipe-ingredients-heading">Ingredients</h3>
        <ol className="recipe-ingredient-list">
          {ingredients.map((ingredient) => {
            return (
              <li className="recipe-ingredient" key={ingredient.name}>
                <p className="recipe-ingredient-amount">{Math.ceil(ingredient.measures.us.amount)}</p>
                <p className="recipe-ingredient-unit">{ingredient.measures.us.unitShort}</p>
                <p className="recipe-ingredient-name">{ingredient.name}</p>
              </li>
            )
          })}
        </ol>
        <ol className="recipe-instructions">
          {steps.map((stepObj) => {
            return (
              <li key={stepObj.number}>{stepObj.step}</li>
            )
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
