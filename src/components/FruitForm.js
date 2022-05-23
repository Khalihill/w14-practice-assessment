import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {

  const [name, setName] = useState('');
  const [sweetness, setSweetness] = useState(1);
  const [color, setColor] = useState(COLORS[0]);
  const [seeds, setSeeds] = useState('yes');
  const [validationErrors, setValidationErrors] = useState([]);

  const history = useHistory();

  useEffect(() => {

    const nameArr = fruits.map(fruit => {
      return fruit.name.toLowerCase();
    })

    const errors = [];
    if (name.length < 3) errors.push("Name must be 3 or more characters");
    if (name.length > 20) errors.push("Name must be 20 characters or less");
    if (nameArr.includes(name.toLowerCase())) errors.push("Name already exists.")
    if (sweetness < 1 || sweetness > 10) errors.push("Sweetness must be between 1 and 10")

    setValidationErrors(errors);

  }, [name, sweetness, fruits])

  const onSubmit = e => {
    e.preventDefault();

    console.log({
      name: name,
      sweetness: sweetness,
      color: color,
      seeds: seeds
    })

    history.push('/');
  }

  return (
    <form onSubmit={onSubmit} className="fruit-form">
      <h2>Enter a Fruit</h2>
      {validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul className="errors">
            {validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Select a Color
        <select
          value={color}
          onChange={e => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={e => setSweetness(e.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === 'no'}
          onChange={e => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === 'yes'}
          onChange={e => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={validationErrors.length > 0}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;