import { useHistory } from "react-router-dom";
import DisplayItems from "../../tools/homeDisplayItems.js"
import "./Home.css";

const Home = ({ setCategory }) => {
  const history = useHistory();
  const handleSelection = () => {
    history.push("/recipes");
  };
  return (
    <main className="home-page">
      <di>
      <h1 className="home-title">A HEALTHY BITE</h1>
      <h2 className="subheading">Healthy food for every mood.</h2>
      </di>

      <ul className="home-list" onClick={handleSelection}>
        {DisplayItems.listItems.map((item)=>{
          return (
            <li className="home-list-items" onClick={() => setCategory(item.category)}>
            <img
              className="home-list-images"
              src={item.image}
              alt={item.category}
            />
            <h3 className="home-list-categories">{item.category}</h3>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
