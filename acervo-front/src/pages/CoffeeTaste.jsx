import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCoffeesTaste } from '../api/coffees.api';
import CoffeeCard from '../components/CoffeeCard';

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

      <CoffeeCard />
    </div>
  );
}

export default CoffeeTaste;
