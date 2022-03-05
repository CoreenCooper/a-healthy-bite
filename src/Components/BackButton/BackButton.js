import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <button className="back-btn" onClick={goBack}>
      {"<"} Back
    </button>
  );
};

export default BackButton;
