import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Recipe from "./Components/Recipe";
import Recipes from "./Components/Recipes";
import "./App.css";

function App() {
	const [recipes, setRecipes] = useState([]);
	const [category, setCategory] = useState("");

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				const res = await axios.get(
					`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${category}&number=9`
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
					{/* Show */}
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
