import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Footer from "./Pages/Footer/Footer.js";
import About from "./Components/About/About.js";
import Recipe from "./Components/Recipe/Recipe.js";
import Recipes from "./Components/Recipes/Recipes.js";
import NavBarWrapper from "./Pages/NavBar/NavBarWrapper.js";
import "./App.css";

function App() {

  return (
    <section className="App">
      <Router>
        <NavBarWrapper />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/recipes/:category">
            <Recipes />
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
