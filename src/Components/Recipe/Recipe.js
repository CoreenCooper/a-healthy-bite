import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import convertSummary from "../../tools/convertSummary";
import axios from "axios";
import "./Recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { title, summary, instructions, image, sourceUrl, servings, readyInMinutes, sourceName, analyzedInstructions, extendedIngredients } = recipe;
  // const {steps} = analyzedInstructions[0];
  const { id } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

// console.log(steps)
  // console.log(recipe)
  // console.log(analyzedInstructions[0].steps)
  // console.log(analyzedInstructions[0].steps[0].number)
  // console.log(analyzedInstructions[0].steps[0].step)
  
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&includeNutrition=false`
        );
        setRecipe(res.data);
      } catch (error) {
        return error;
      }
    };
    fetchRecipe();
  }, [id]);
  

  return (
    <main className="recipe-main">
      <button className="recipe-back-btn" onClick={goBack}>
        {"<"} Back
      </button>
      <section className="recipe-main-section">
        <h2 className="recipe-main-heading">{title}</h2>
        <img className="recipe-image" src={image} alt="vegan" />
        {/* unable to key into analyzedInstructions[0]. recieve an error */}
        {/* <p>{analyzedInstructions[0]}</p> */}
        {/* <ol>{analyzedInstructions[0].steps.map((step) => {
          <li>step</li>
        })}</ol> */}
        <p className="recipe-serving-size">Serving size: {servings}</p>
        <p className="recipe-prep-time">Preparation time: {readyInMinutes}</p>
            <ul className="ingredient-list">
        {extendedIngredients.map((ingredient) => {
          return (
            <li className="ingredient">
            <p className="ingredient-amount">{ingredient.measures.us.amount}</p>
            <p className="ingredient-unit">{ingredient.measures.us.unitShort}</p>
            <p className="ingredient-name">{ingredient.nameClean}</p>
            </li>
          )
        })}
            </ul>
        <div className="recipe-instructions" dangerouslySetInnerHTML = {{__html: instructions}}></div>
        {/* <p className="recipe-summary"> {convertSummary(summary)}</p> */}
        {/* <p className="recipe-instructions"> {convertSummary(instructions)}</p> */}
        {/* <ul className="analyzedInstructions">{analyzedInstructions.map((instructions) => {

        })}</ul> */}
      </section>
      <a
        className="recipe-main-link"
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
      >
        Sourced from {sourceName}
      </a>
    </main>
  );
};

export default Recipe;
