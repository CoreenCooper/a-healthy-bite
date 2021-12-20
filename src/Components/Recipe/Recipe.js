import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import convertSummary from "../../tools/convertSummary";
import axios from "axios";
import "./Recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { title, summary, image, sourceUrl } = recipe;
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
        );
        setRecipe(res.data);
      } catch (error) {
        return error;
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <main>
      {/* move to navbar*/}
      <Link to={`/recipes`}>
        <button>Back</button>
      </Link>

      <h2 className="recipe-title">{title}</h2>
      <p id="summary"> {convertSummary(summary)}</p>

      <img src={image} alt="vegan" className="recipe-image" />
      <a href={sourceUrl} target="_blank" rel="noreferrer">
        Click for more information
      </a>
    </main>
  );
};

export default Recipe;
