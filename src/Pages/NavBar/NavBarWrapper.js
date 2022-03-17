import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const NavBarWrapper = () => {
  const [dishes, setDishes] = useState([]);
  const location = useLocation();
  const changeColor = location.pathname === "/" ? "" : "color-change";

  // console.log(location)

  return <NavBar setDishes={setDishes} changeColor={changeColor} />;
};

export default NavBarWrapper;

// change search by location
