import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer/Footer.js";
import Home from "./Components/Home/Home.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Recipe from "./Components/Recipe/Recipe.js";
import Recipes from "./Components/Recipes/Recipes.js";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");

  return (
    <section className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home setCategory={setCategory} />
          </Route>
          <Route exact path="/recipes">
            <Recipes category={category} />
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
