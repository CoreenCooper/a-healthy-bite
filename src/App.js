import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Components/Home/Home.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Recipe from "./Components/Recipe/Recipe.js";
import Recipes from "./Components/Recipes/Recipes.js";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=291407e47d2341e997364c6bb4fda7d0&query=${category}&offset=${Math.floor(
            Math.random() * 300
          )}&number=1&nutrition=false`
        );
        setRecipes(res.data.results);
      } catch (error) {
        return error;
      }
    };
    fetchRecipes();
  }, [category]);

  return (
    <section className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home setCategory={setCategory} />
          </Route>
          <Route exact path="/recipes">
            <Recipes recipes={recipes} category={category} />
          </Route>
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
        <footer></footer>
      </Router>
    </section>
  );
}

export default App;
