import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCoffeesTaste } from '../api/coffees.api';

function CoffeeTaste() {
  const [coffees, setCoffees] = useState([]);

  const getCoffeesTaste = async () => {
    try {
      const response = await getAllCoffeesTaste();
      setCoffees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoffeesTaste();
  }, []);

  return (
    <div>
      <h1>My Coffees Track</h1>

      {coffees.map(coffee => {
        return (
          <div key={coffee._id}>
            <Link to={`/coffeetaste/${coffee._id}`}>
              <h3>{coffee.coffeeName}</h3>
              {coffee.coffeeImgUrl && (
                <img src={coffee.coffeeImgUrl} width={100} />
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CoffeeTaste;
