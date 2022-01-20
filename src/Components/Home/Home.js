import { useHistory } from "react-router-dom";
import homeMainPic from "../../../src/assets/main.jpg";
import ketogenicPic from "../../../src/assets/ketogenic.jpg";
import vegetarianPic from "../../../src/assets/vegetarian.jpg";
import veganPic from "../../../src/assets/vegan.jpg";
import pescatarianPic from "../../../src/assets/pescatarian.jpg";
import "./Home.css";

const Home = ({ setCategory }) => {
  const history = useHistory();

  const handleSelection = () => {
    history.push("/recipes");
  };

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
        onClick={handleSelection}
      >
        <li
          className="home-category-list-items"
          onClick={() => setCategory("Vegan")}
        >
          <img className="home-category-images" src={veganPic} alt="Vegan" />
          <button className="home-category-button">Vegan</button>
        </li>
        <li
          className="home-category-list-items"
          onClick={() => setCategory("Vegetarian")}
        >
          <img
            className="home-category-images"
            src={vegetarianPic}
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
            src={pescatarianPic}
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
            src={ketogenicPic}
            alt="Ketogenic"
          />
          <button className="home-category-button">Ketogenic</button>
        </li>
      </ul>
    </main>
  );
};

export default Home;
