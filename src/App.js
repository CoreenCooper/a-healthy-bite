import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Footer from "./Footer/Footer.js";
import Home from "./Components/Home/Home.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Recipe from "./Components/Recipe/Recipe.js";
import Recipes from "./Components/Recipes/Recipes.js";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("");

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${category}&offset=${Math.floor(
  //           Math.random() * 300
  //         )}&number=1&nutrition=false`
  //       );
  //       setRecipes(res.data.results);
  //     } catch (error) {
  //       return error;
  //     }
  //   };
  //   fetchRecipes();
  // }, [category]);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${category}&offset=${Math.floor(
          Math.random() * 300
        )}&number=1&nutrition=false`
      );
      setRecipes(res.data.results);
    } catch (error) {
      return error;
    }
  };

  return (
    <section className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home setCategory={setCategory}  fetchRecipes={fetchRecipes}/>
          </Route>
          <Route exact path="/recipes">
            <Recipes recipes={recipes} category={category}/>
          </Route>
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
