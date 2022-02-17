import { useHistory } from "react-router-dom";
// import "./Search.css";

const Search = ({ searchResults }) => {
// console.log(searchResults);
    const history = useHistory();
  
    const goBack = () => {
      history.goBack();
    };
  // https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${input}&number=1
  return (
    <main className="Search-main">
      <button className="back-btn" onClick={goBack}>Back</button>
      <h2>List of Search Results</h2>
      <p className="category-summary">
        Here goes a bit of a small portion of text about a vegetarian diet and
        it's benefits. this will contain a certain number of words, but not too
        much.
      </p>

      {/* <ul>
        {Search.map((recipe) => {
          return (
            <li key={recipe.id} className="recipe-list-items">
              <a href={`/Search/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </a>
            </li>
          );
        })}
      </ul> */}
    </main>
  );
};

export default Search;
