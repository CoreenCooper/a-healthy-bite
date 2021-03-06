import veganPic from "../assets/vegan.jpg";
import ketogenicPic from "../assets/ketogenic.jpg";
import vegetarianPic from "../assets/vegetarian.jpg";
import pescatarianPic from "../assets/pescatarian.jpg";

const homeLinksData = [
  { diet: "vegan", image: veganPic },
  { diet: "vegetarian", image: vegetarianPic },
  { diet: "ketogenic", image: ketogenicPic },
  { diet: "pescatarian", image: pescatarianPic },
];

const searchPlaceholders = {
  "/": "Search all Recipes",
  "/about": "Search all Recipes",
  "/recipes/vegetarian": "Search by ingredients",
  "/recipes/vegan": "Search by ingredients",
  "/recipes/ketogenic": "Search by ingredients",
  "/recipes/pescatarian": "Search by ingredients",
};

export { homeLinksData, searchPlaceholders };
