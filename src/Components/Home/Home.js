import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import homeMainPic from "../../../src/assets/main.jpg";
import ketogenicPic from "../../../src/assets/ketogenic.jpg";
import vegetarianPic from "../../../src/assets/vegetarian.jpg";
import veganPic from "../../../src/assets/vegan.jpg";
import pescatarianPic from "../../../src/assets/pescatarian.jpg";
import "./Home.css";

const Home = ({ setCategory, category }) => {
  const history = useHistory();

  useEffect(() => {
    const handleSelection = () => {
      // if (category) {
      history.push("/recipes/" + category);
    };
    // };
  }, [category]);

  return (
    <main className="home-section">
      {/* georg-regauer-qo0qBl6T7R8-unsplash */}
      <div
        className="home-main-image"
        style={{ backgroundImage: `url(${homeMainPic})` }}
        alt="food on wooden tray"
        title="photo by Georg Regauer"
      ></div>
      <div className="home-category-heading">
        <h1>Recipes by Dietary Category</h1>
        <p>Select one to start</p>
      </div>
      <ul
        className="home-category-list"
        id="category"
        // onClick={handleSelection}
      >
        <li className="home-category-list-items">
          <Link onClick={() => setCategory("Vegan")} to="/recipes/vegan">
            <img className="home-category-images" src={veganPic} alt="Vegan" />
            <button className="home-category-button">Vegan</button>
          </Link>
        </li>
        <li
          className="home-category-list-items"
          // onClick={() => setCategory("Vegetarian")}
        >
          <Link to="/recipes/vegetarian">
            <img
              className="home-category-images"
              src={vegetarianPic}
              alt="Vegetarian"
            />
            <button className="home-category-button">Vegetarian</button>
          </Link>
        </li>
        <li
          className="home-category-list-items"
          // onClick={() => setCategory("Pescatarian")}
        >
          <Link to="/recipes/pescatarian">
            <img
              className="home-category-images"
              src={pescatarianPic}
              alt="Pescatarian"
            />
            <button className="home-category-button">Pescatarian</button>
          </Link>
        </li>
        <li
          className="home-category-list-items"
          // onClick={() => setCategory("Ketogenic")}
        >
          <Link to="/recipes/Ketogenic">
            <img
              className="home-category-images"
              src={ketogenicPic}
              alt="Ketogenic"
            />
            <button className="home-category-button">Ketogenic</button>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
