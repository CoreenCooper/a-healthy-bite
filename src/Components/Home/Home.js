import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = ({ setCategory }) => {
  const history = useHistory();
  const [landingPageImage, setLandingPageImage] = useState({});

  const fetchLandingPageImage = async () => {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/photos/qo0qBl6T7R8/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
   //     `https://api.unsplash.com/photos/HYZLZYJfkIk/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      setLandingPageImage(res.data);
    } catch (error) {
      return error;
    }
  };
  
  useEffect(() => {
    fetchLandingPageImage();
  }, []);

  const handleSelection = () => {
    history.push("/recipes");
  };

  return (
    <main className="home-section">
      <div className="home-main-image" style={{backgroundImage: `url(${landingPageImage.urls.regular})`}} alt={landingPageImage.alt_description} title={landingPageImage.alt_description}></div>
      {/* <div className="home-main-image" style={{backgroundImage: `url(https://images.unsplash.com/photo-1625467150295-8eadf10ea64d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyODY0MTV8MHwxfGFsbHx8fHx8fHx8fDE2NDI0NjU5MTg&ixlib=rb-1.2.1&q=85)`}} alt="{landingPageImage.alt_description}" title="{landingPageImage.alt_description}"></div> */}
      <div className="home-category-heading">
        <h1>Recipes by Dietary Category</h1>
        <p>Select one to start</p>
      </div>
      <ul
        className="home-category-list"
        id="category"
        onClick={handleSelection}
      >
        <li
          className="home-category-list-items"
          onClick={() => setCategory("Vegan")}
        >
          <img
            className="home-category-images"
            src="https://spoonacular.com/recipeImages/636231-240x150.jpg"
            alt="Vegan"
          />
          <button className="home-category-button">Vegan</button>
        </li>
        <li
          className="home-category-list-items"
          onClick={() => setCategory("Vegetarian")}
        >
          <img
            className="home-category-images"
            src="https://spoonacular.com/recipeImages/642283-240x150.jpg"
            alt="Vegetarian"
          />
          <button className="home-category-button">Vegetarian</button>
        </li>
        <li
          className="home-category-list-items"
          onClick={() => setCategory("Pescatarian")}
        >
          <img
            className="home-category-images"
            src="https://spoonacular.com/recipeImages/639411-240x150.jpg"
            alt="Pescatarian"
          />
          <button className="home-category-button">Pescatarian</button>
        </li>
        <li
          className="home-category-list-items"
          onClick={() => setCategory("Ketogenic")}
        >
          <img
            className="home-category-images"
            src="https://spoonacular.com/recipeImages/638626-240x150.jpg"
            // src="https://spoonacular.com/recipeImages/659135-312x231.jpg"
            alt="Ketogenic"
          />
          <button className="home-category-button">Ketogenic</button>
        </li>
      </ul>
    </main>
  );
};

export default Home;
