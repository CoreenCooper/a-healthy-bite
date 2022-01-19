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

      <div id="category">
        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("vegan")}>
              <img
                src="https://www.mississippivegan.com/wp-content/uploads/2017/07/bowl-1.jpg"
                alt="vegan"
                className="image"
              />
              <p className="caption">Vegan</p>
            </li>
          </ul>
        </div>

        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("vegetarian")}>
              <img
                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/6054/f5282d05-33f5-4c93-a08e-b000164a54db.jpg"
                alt="vegetarian"
                className="image"
              />
              <p className="caption">Vegetarian</p>
            </li>
          </ul>
        </div>
        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("ketogenic")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDPdnWFXD3kloqBBy4nYwfFCfRfbvrUHC3w&usqp=CAU"
                alt="ketogenic"
                className="image"
              />
              <p className="caption">Ketogenic</p>
            </li>
          </ul>
        </div>
        <div className="item">
          <ul onClick={handleSelection}>
            <li onClick={() => setCategory("pescetarian")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZvwHaQUuryT0WbnBSYTjwInC68KNTpzoWw&usqp=CAU"
                alt="pescetarian"
                className="image"
              />
              <p className="caption">Pescetarian</p>
            </li>
          </ul>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default Home;
