import { getCoffeeTaste } from '../api/coffees.api.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CoffeeDetails from '../components/CoffeeDetails';

function CoffeeTasteDetails() {
  const [coffee, setCoffee] = useState(null);

  const { coffeeId } = useParams();

  const getSingleCoffee = async () => {
    try {
      const response = await getCoffeeTaste(coffeeId);
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
            roast={coffee.roast}
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
          />
        </div>
      )}
    </div>
  );
}

export default CoffeeTasteDetails;
