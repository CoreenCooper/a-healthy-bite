import { useHistory } from "react-router-dom";
const Home = ({ setCategory }) => {
  const history = useHistory();

  const handleSelection = () => {
    history.push("/recipes");
  };

  return (
    <div>
      <h1 className="Heading-Title">A HEALTHY BITE</h1>
      <h5 className="Subheading">Healthy food for every mood.</h5>

          <ul id="category" onClick={handleSelection}>
            <li className="item" onClick={() => setCategory("Vegan")}>
              <img
                className="image"
                src="https://www.mississippivegan.com/wp-content/uploads/2017/07/bowl-1.jpg"
                alt="vegan"
              />
              <p className="caption">Vegan</p>
            </li>
            <li className="item" onClick={() => setCategory("Vegetarian")}>
              <img
                className="image"
                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/6054/f5282d05-33f5-4c93-a08e-b000164a54db.jpg"
                alt="vegetarian"
              />
              <p className="caption">Vegetarian</p>
            </li>
            <li className="item" onClick={() => setCategory("Ketogenic")}>
              <img
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDPdnWFXD3kloqBBy4nYwfFCfRfbvrUHC3w&usqp=CAU"
                alt="Ketogenic"
              />
              <p className="caption">Ketogenic</p>
            </li>
            <li className="item" onClick={() => setCategory("Pescetarian")}>
              <img
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZvwHaQUuryT0WbnBSYTjwInC68KNTpzoWw&usqp=CAU"
                alt="pescetarian"
              />
              <p className="caption">Pescetarian</p>
            </li>
          </ul>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
