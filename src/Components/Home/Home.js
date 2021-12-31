import { useHistory } from "react-router-dom";
import "./Home.css";

const Home = ({ setCategory }) => {
  const history = useHistory();

  const handleSelection = () => {
    history.push("/recipes");
  };
  
  return (
    <section className="home-section">
      <div className="home-main-image"></div>
      {/* <img
        className="home-main-image"
        src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4"
        alt="Vegan"
      /> */}
      <ul className="home-category-list" id="category" onClick={handleSelection}>
        <li className="home-category-list-items" onClick={() => setCategory("Vegan")}>
          <img
            className="home-category-images"
            src="https://spoonacular.com/recipeImages/636231-240x150.jpg"
            alt="Vegan"
          />
          <button className="home-category-image-captions">Vegan</button>
        </li>
        <li className="home-category-list-items" onClick={() => setCategory("Vegetarian")}>
          <img
            className="home-category-images"
            src="https://spoonacular.com/recipeImages/642283-240x150.jpg"
            alt="Vegetarian"
          />
          <button className="home-category-image-captions">Vegetarian</button>
        </li>
        <li className="home-category-list-items" onClick={() => setCategory("Pescetarian")}>
          <img
            className="home-category-images"
            src="https://spoonacular.com/recipeImages/639411-240x150.jpg"
            alt="Pescetarian"
          />
          <button className="home-category-image-captions">Pescetarian</button>
        </li>
        <li className="home-category-list-items" onClick={() => setCategory("Ketogenic")}>
          <img
            className="home-category-images"
            src="https://spoonacular.com/recipeImages/638626-240x150.jpg"
            // src="https://spoonacular.com/recipeImages/659135-312x231.jpg"
            alt="Ketogenic"
          />
          <button className="home-category-image-captions">Ketogenic</button>
        </li>
      </ul>
      <footer className="footer"></footer>
    </section>
  );
};

export default Home;
