import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

const NavBarWrapper = () => {
    const location = useLocation();
    // console.log(location)


  return <NavBar />;
};

export default NavBarWrapper;

// change search by location