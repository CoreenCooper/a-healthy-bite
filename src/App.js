import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer/Footer.js";
import Home from "./Components/Home/Home.js";
import NavBar from "./Components/NavBar/NavBar.js";
import Recipe from "./Components/Recipe/Recipe.js";
import Recipes from "./Components/Recipes/Recipes.js";
// import Search from "./Components/Search/Search.js";
import "./App.css";
import About from "./Components/About/About.js";

function App() {
  const [category, setCategory] = useState("");
  // const [searchResults, setSearchResults] = useState({});

  return (
    <section className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home setCategory={setCategory} category={category}/>
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
          {/* <Route exact path="/recipes/:search">
            <Search searchResults={searchResults} />
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
