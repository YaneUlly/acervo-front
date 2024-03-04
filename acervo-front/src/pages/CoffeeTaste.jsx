import { useState, useEffect } from 'react';
import { getAllCoffeesTaste } from '../api/coffees.api';
import CoffeeCard from '../components/CoffeeCard';
import { Text } from '@chakra-ui/react';

function CoffeeTaste() {
  const [coffees, setCoffees] = useState([]);

  const getCoffeesTaste = async () => {
    try {
      const response = await getAllCoffeesTaste();
      setCoffees(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoffeesTaste();
  }, []);

  return (
    <div>
      <Text fontSize='4xl' marginTop='30px' marginBottom='30px'>
        My Coffees Track
      </Text>

      {coffees.map(coffee => {
        {
          /* console.log('CreatedBy:', coffee.createdBy);
        console.log(
          'Name:',
          coffee.createdBy && coffee.createdBy[0] && coffee.createdBy[0].name
        );
        console.log(
          'Photo:',
          coffee.createdBy &&
            coffee.createdBy[0] &&
            coffee.createdBy[0].photoUrl
        ); */
        }

        const createdBy = coffee.createdBy && coffee.createdBy[0];

        return (
          <div key={coffee._id}>
            <CoffeeCard
              coffeeId={coffee._id}
              coffeeName={coffee.coffeeName}
              coffeeImgUrl={coffee.coffeeImgUrl}
              region={coffee.region}
              varieties={coffee.varieties}
              process={coffee.process}
              method={coffee.method}
              storeUrl={coffee.storeUrl}
              createdBy={createdBy}
              share={coffee.share}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CoffeeTaste;
