import { useParams } from "react-router-dom";

function FruitShow({fruits}) {
  const {fruitId} = useParams();
  const {name, color, sweetness, seeds} = fruits.find(fruit => fruit.id === fruitId)

  return (
    <div className="fruit-show">
      <h2>{name}</h2>
      <h3>{color}</h3>
      <h4>{sweetness}</h4>
      <h5>{seeds}</h5>
    </div>
  );
}

export default FruitShow;