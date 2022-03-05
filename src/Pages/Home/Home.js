import { Link } from "react-router-dom";
import homeMainPic from "../../../src/assets/main.jpg";
import linksData from "../../utils/data";
import "./Home.css";

const Home = () => {

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
      <ul className="home-category-list" id="category">
        {linksData.map((linkData) => {
          const { diet, image } = linkData;
          return (
            <li className="home-category-list-items" key={diet}>
              <Link to={`/recipes/${diet}`}>
                <img className="home-category-images" src={image} alt={diet} />
                <p className="home-category-text">{`${diet[0].toUpperCase()}${diet.slice(1)}`}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
