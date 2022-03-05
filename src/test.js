<ul className="home-category-list" id="category">
<li className="home-category-list-items">
  <Link to="/recipes/Vegan">
    {/* <Link onClick={() => setCategory("Vegan")} to="/recipes/Vegan"> */}
    <img className="home-category-images" src={veganPic} alt="Vegan" />
    <p className="home-category-text">Vegan</p>
  </Link>
</li>
<li
  className="home-category-list-items"
  // onClick={() => setCategory("Vegetarian")}
>
  <Link to="/recipes/Vegetarian">
    <img
      className="home-category-images"
      src={vegetarianPic}
      alt="Vegetarian"
    />
    <p className="home-category-text">Vegetarian</p>
  </Link>
</li>
<li
  className="home-category-list-items"
  // onClick={() => setCategory("Pescatarian")}
>
  <Link to="/recipes/Pescatarian">
    <img
      className="home-category-images"
      src={pescatarianPic}
      alt="Pescatarian"
    />
    <p className="home-category-text">Pescatarian</p>
  </Link>
</li>
<li
  className="home-category-list-items"
  // onClick={() => setCategory("Ketogenic")}
>
  <Link to="/recipes/Ketogenic">
    <img
      className="home-category-images"
      src={ketogenicPic}
      alt="Ketogenic"
    />
    <p className="home-category-text">Ketogenic</p>
  </Link>
</li>
</ul>
