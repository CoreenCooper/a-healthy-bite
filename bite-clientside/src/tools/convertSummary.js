
// let test = `Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>,
//  <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com 
//  has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this 
//  recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/vegetable-fried-brown-rice-36199">Vegetable Fried Brown Rice</a>, 
//  <a href="https://spoonacular.com/recipes/vegetable-fried-cauliflower-rice-933261">Vegetable Fried Cauliflower Rice</a>, and <a href="https://spoonacular.com/recipes/easy-vegetable-fried-brown-rice-with-egg-802042">Easy Vegetable Fried Brown Rice with Egg</a>.`

const convertSummary =(summary)=>{

const parser = new DOMParser();

const document = parser.parseFromString(summary, "text/html")

// let formatted = document.body.innerText.split("Click for more information")

// formatted.forEach(el =>{ 
//     console.log(el)
// })

    return document.body.innerText.split("Click for more information")
}

module.exports = convertSummary;

