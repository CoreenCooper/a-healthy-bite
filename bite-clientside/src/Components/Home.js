import Recipes from "./Recipes";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const Home = ({ setCategory }) => {
  const history = useHistory();
  const handleSelection = () => {
    history.push("/recipes");
  };
  return (
    <div>
      <h1 className="text-center">A HEALTHY BITE</h1>
      <h4 className="text-center">Healthy food for every mood</h4>
      <div id="category">
        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("vegan")}>
              <img
                src="https://www.mississippivegan.com/wp-content/uploads/2017/07/bowl-1.jpg"
                alt="vegan"
                className="image"
              />
              <span className="caption">Vegan</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <Link to="/recipes">
            <img
              src="https://www.mississippivegan.com/wp-content/uploads/2017/07/bowl-1.jpg"
              alt="vegetarian"
              className="image"
            />
            <span className="caption">Vegetarian</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/recipes">
            <img
              src="https://www.mississippivegan.com/wp-content/uploads/2017/07/bowl-1.jpg"
              alt="protein"
              className="image"
            />
            <span className="caption">Protein</span>
          </Link>
        </div>
        <div className="item">
          <Link to="/recipes">
            <img
              src="https://www.mississippivegan.com/wp-content/uploads/2017/07/bowl-1.jpg"
              alt="smoothie"
              className="image"
            />
            <span className="caption">Smoothie</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
