import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Recipe from "./Components/Recipe/Recipe.js";
import Footer from "./Components/Footer/Footer.js";
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
            <Home setCategory={setCategory} category={category} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/recipes/:category">
            <Recipes category={category} />
          </Route>
          <Route exact path="/recipes/:category/:id">
            <Recipe />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
