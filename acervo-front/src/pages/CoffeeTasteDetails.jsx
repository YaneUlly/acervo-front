import { getCoffeeTaste } from '../api/coffees.api.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        <>
          <h1>{coffee.coffeeName}</h1>
          <p>{coffee.region}</p>
          <p>{coffee.roast}</p>
          <p>{coffee.method}</p>
          <p>{coffee.varieties}</p>
          <p>{coffee.altitude}</p>
          <p>{coffee.process}</p>
          <p>{coffee.aromas}</p>
          <p>{coffee.flavor}</p>
          <p>{coffee.body}</p>
          <p>{coffee.recipe}</p>
          <p>{coffee.description}</p>
          <p>{coffee.share}</p>
          <p>{coffee.storeUrl}</p>
          <img src={coffee.coffeeImgUrl} />
        </>
      )}
    </div>
  );
}

export default CoffeeTasteDetails;
