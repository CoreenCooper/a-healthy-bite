import { useHistory } from "react-router-dom";

const Home = ({ setCategory }) => {
  const history = useHistory();
  const handleSelection = () => {
    history.push("/recipes");
  };
  return (
    <main>
      <h2 className="home-title">A HEALTHY BITE</h2>
      <h5 className="subheading">Healthy food for every mood.</h5>

        <ul onClick={handleSelection}>
          <li onClick={() => setCategory("vegan")}>
            <img
              className="images"
              src="https://www.mississippivegan.com/wp-content/uploads/2017/07/bowl-1.jpg"
              alt="vegan"
            />
            <h6 className="categories">Vegan</h6>
          </li>

          <li onClick={() => setCategory("vegetarian")}>
            <img
              className="images"
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/6054/f5282d05-33f5-4c93-a08e-b000164a54db.jpg"
              alt="vegetarian"
            />
            <h6 className="categories">Vegetarian</h6>
          </li>

          <li onClick={() => setCategory("ketogenic")}>
            <img
              className="images"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDPdnWFXD3kloqBBy4nYwfFCfRfbvrUHC3w&usqp=CAU"
              alt="ketogenic"
            />
            <h6 className="categories">Ketogenic</h6>
          </li>

          <li onClick={() => setCategory("pescetarian")}>
            <img
              className="images"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZvwHaQUuryT0WbnBSYTjwInC68KNTpzoWw&usqp=CAU"
              alt="pescetarian"
            />
            <h6 className="categories">Pescetarian</h6>
          </li>
        </ul>
    </main>
  );
};

export default Home;
