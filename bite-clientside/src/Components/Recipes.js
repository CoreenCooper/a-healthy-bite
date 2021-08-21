import React from "react";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Recipes = ({category}) => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${category}&number=1`
//         );

//         // console.log(res.data.results);
//         setRecipes(res.data.results);
//         // setCategory()
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchRecipes();
//   }, [category]);

  return (
    <div>
      List of Recipes
      <Link to="/recipes/:id">
        <h1>
          <Recipe />
        </h1>
      </Link>
    </div>
  );
};

export default Recipes;
