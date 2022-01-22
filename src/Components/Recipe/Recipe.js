import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import convertSummary from "../../tools/convertSummary";
import axios from "axios";
import "./Recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { title, summary, image, sourceUrl } = recipe;
  const { id } = useParams();
  const history = useHistory();

  // const goBack = () => {
  //   history.push("/recipes");
  // };
  console.log(id)

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
      } catch (error) {
        return error;
      }
    };
    fetchRecipe();
  }, [id]);

  return (
    <main className="recipe-main">
      {/* <Link to={`/recipes`}>
      <button onClick={goBack}> {"<"} Back</button>
      </Link> */}
      <button className="recipe-back-btn" onClick={goBack}>
        {"<"} Back
      </button>
      <section className="recipe-main-section">
        <h2 className="recipe-main-heading">{title}</h2>
        <p className="recipe-summary"> {convertSummary(summary)}</p>
        <img className="recipe-image" src={image} alt="vegan" />
      </section>
      <a
        className="recipe-main-link"
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
      >
        Click for more full instructions
      </a>
    </main>
  );
};

export default Recipe;
