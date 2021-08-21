import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Recipe from "./Components/Recipe";
import Recipes from "./Components/Recipes";
import "./App.css";

function App() {
	const [recipes, setRecipes] = useState([]);

	const fetchRecipes = async () => {
		console.log(process.env.REACT_APP_API_KEY);
		try {
			const res = await axios.get(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=1`

				// `https://api.spoonacular.com/food/products/22347?apiKey=0b323f1b126a44ce859b1e08df8a4bd6`
			);
			// `https://api.spoonacular.com/food/products/22347?apiKey=85693dccd3054490ad46f26d5834a03d`
			console.log(res.data.results);
			// `https://api.spoonacular.com/recipes/716429/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
			// setRecipes(res.data.results);
		} catch (err) {
			console.log(err);
		}
	};
	fetchRecipes();
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

// `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=1`;
