import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import DisplayItems from "../../tools/homeDisplayItems.js"
import axios from "axios";
// import "./Home.css";

const Home = ({ setCategory }) => {
  const history = useHistory();
  const [recipe, setRecipe] = useState({});
  const { title, image, sourceUrl } = recipe;
  const [samples, setSamples] = useState({});
  // const { title, image, sourceUrl } = samples;

  // const { id } = useParams();

  const fetchSpotlightImage = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/716268/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setRecipe(res.data);
    } catch (error) {
      return error;
    }
  };
  
  const fetchSampleImages = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_API_KEY}&ids=638604,716429,1095750,640819,66429,660227`
      );
      console.log(res.data)
      setSamples(res.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchSpotlightImage();
    fetchSampleImages();
  }, []);

  const handleSelection = () => {
    history.push("/recipes");
  };
  
  
  return (
    <main className="home-page">
      <div>
      <h1 className="home-title">A HEALTHY BITE</h1>
      <h2 className="subheading">Healthy food for every mood.</h2>
      </div>

      <h2 className="recipe-title">{title}</h2>
      <img src={image} alt="vegan" className="recipe-image" />
      <a href={sourceUrl} target="_blank" rel="noreferrer">
        Click for more information
      </a>

      <ul className="home-list" onClick={handleSelection}>
        {samples.map((item)=>{
          return (
            <li className="home-list-items" onClick={() => setCategory(item.title)} key={item.title}>
            <img
              className="home-list-images"
              src={item.image}
              alt={item.title}
            />
            <h3 className="home-list-categories">{item.title}</h3>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
