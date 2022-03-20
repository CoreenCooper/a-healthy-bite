import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const NavBarWrapper = ({ setBulkRecipes }) => {
  const location = useLocation();
  const changeColor = location.pathname === "/" ? "" : "color-change";

  // console.log(location)

  return <NavBar setBulkRecipes={setBulkRecipes} changeColor={changeColor} />;
};

export default NavBarWrapper;

// change search by location
