import { useState, useEffect } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import { getAllCoffeesHub } from '../api/coffees.api';

function CoffeeHub() {
  const [userCoffees, setUserCoffees] = useState([]);

  const getUserCoffees = async () => {
    try {
      const response = await getAllCoffeesHub();
      console.log(response);
      setUserCoffees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserCoffees();
  }, []);

  return (
    <div>
      <h1>Coffee Hub</h1>

      {userCoffees.map(coffee => {
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

export default CoffeeHub;
