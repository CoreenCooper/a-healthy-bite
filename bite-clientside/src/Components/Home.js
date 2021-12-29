import { useHistory } from "react-router-dom";
const Home = ({ setCategory, fetchRecipes }) => {
  const history = useHistory();

  const handleSelection = () => {
    fetchRecipes();
    history.push("/recipes");
  };

  return (
    <div>
      <h1 className="Heading-Title">A HEALTHY BITE</h1>
      <h5 className="Subheading">Healthy food for every mood.</h5>

          <ul id="category" onClick={handleSelection}>
            <li className="item" onClick={() => setCategory("Vegan")}>
              <img
                className="image"
                src="https://spoonacular.com/recipeImages/715769-636x393.jpg"
                alt="Vegan"
              />
              <p className="caption">Vegan</p>
            </li>
            <li className="item" onClick={() => setCategory("Vegetarian")}>
              <img
                className="image"
                src="https://spoonacular.com/recipeImages/716426-636x393.jpg"
                alt="Vegetarian"
              />
              <p className="caption">Vegetarian</p>
            </li>
            <li className="item" onClick={() => setCategory("Ketogenic")}>
              <img
                className="image"
                src="https://spoonacular.com/recipeImages/794538-636x393.jpg"
                alt="Ketogenic"
              />
              <p className="caption">Ketogenic</p>
            </li>
            <li className="item" onClick={() => setCategory("Pescetarian")}>
              <img
                className="image"
                src="https://spoonacular.com/recipeImages/715540-636x393.jpg"
                alt="Pescetarian"
              />
              <p className="caption">Pescetarian</p>
            </li>
          </ul>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
