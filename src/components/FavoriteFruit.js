import { NavLink } from "react-router-dom";
import { FavFruitContext, useFavFruit } from "../context/FavFruitContext";

const FavoriteFruit = () => {
  const {
    favFruitId,
    setFavFruitId
  } = useFavFruit();

  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}></NavLink>
    </div>
  );
}

export default FavoriteFruit;