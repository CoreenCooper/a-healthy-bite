import { useHistory } from "react-router-dom";
// import "./Home.css";

const Home = ({ setCategory }) => {
  const history = useHistory();

  const handleSelection = () => {
    history.push("/recipes");
  };
  
  
  return (
    <div>
      <img
        className="home-main-image"
        src="https://spoonacular.com/recipeImages/658509-240x150.jpg"
        alt="Vegan"
      />
      <ul id="category" onClick={handleSelection}>
        <li className="item" onClick={() => setCategory("Vegan")}>
          <img
            className="image"
            src="https://spoonacular.com/recipeImages/636231-240x150.jpg"
            alt="Vegan"
          />
          <p className="caption">Vegan</p>
        </li>
        <li className="item" onClick={() => setCategory("Vegetarian")}>
          <img
            className="image"
            src="https://spoonacular.com/recipeImages/642283-240x150.jpg"
            alt="Vegetarian"
          />
          <p className="caption">Vegetarian</p>
        </li>
        <li className="item" onClick={() => setCategory("Pescetarian")}>
          <img
            className="image"
            src="https://spoonacular.com/recipeImages/639411-240x150.jpg"
            alt="Pescetarian"
          />
          <p className="caption">Pescetarian</p>
        </li>
        <li className="item" onClick={() => setCategory("Ketogenic")}>
          <img
            className="image"
            src="https://spoonacular.com/recipeImages/638626-240x150.jpg"
            // src="https://spoonacular.com/recipeImages/659135-312x231.jpg"
            alt="Ketogenic"
          />
          <p className="caption">Ketogenic</p>
        </li>
      </ul>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
