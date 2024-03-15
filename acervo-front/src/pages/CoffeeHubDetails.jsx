import { getCoffeeHub } from '../api/coffees.api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CoffeeDetails from '../components/CoffeeDetails';

function CoffeeHubDetails() {
  const [coffee, setCoffee] = useState(null);

  const { coffeeId } = useParams();

  const getSingleCoffee = async () => {
    try {
      const response = await getCoffeeHub(coffeeId);
      console.log(response.data);
      setCoffee(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleCoffee();
  }, []);
  return (
    <div>
      {coffee && (
        <div>
          <CoffeeDetails
            coffeeId={coffee._id}
            coffeeName={coffee.coffeeName}
            region={coffee.region}
            country={coffee.country}
            roast={coffee.roast}
            caffeine={coffee.caffeine}
            method={coffee.method}
            varieties={coffee.varieties}
            altitude={coffee.altitude}
            process={coffee.process}
            aromas={coffee.aromas}
            flavor={coffee.flavor}
            body={coffee.body}
            recipe={coffee.recipe}
            description={coffee.description}
            share={coffee.share}
            storeUrl={coffee.storeUrl}
            image={coffee.coffeeImgUrl}
            route='CoffeeHub'
          />
        </div>
      )}
    </div>
  );
}

export default CoffeeHubDetails;
