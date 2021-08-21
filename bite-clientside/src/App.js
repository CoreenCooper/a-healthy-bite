import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Recipe from "./Components/Recipe";
import Recipes from "./Components/Recipes";
import "./App.css";

function App() {
	return (
		<main className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					{/* Index */}
					<Route exact path="/recipes">
						<Recipe />
					</Route>
					{/* Show */}
					<Route exact path="/recipes/:id">
						<Recipes />
					</Route>
				</Switch>
			</Router>
		</main>
	);
}

export default App;
