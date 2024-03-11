import { useState, useEffect } from 'react';
import { getAllCoffeesTaste } from '../api/coffees.api';
import CoffeeCard from '../components/CoffeeCard';
import { Text, Flex, Button, Image } from '@chakra-ui/react';
import coffeetastepage from '../assets/coffeetastepage.png';

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
      <Flex flexDirection='row'>
        <Flex
          flexDirection='column'
          width='800px'
          justifyContent='space-between'
        >
          <Text
            fontSize='5xl'
            marginTop='80px'
            marginBottom='10px'
            align='left'
            marginLeft='10px'
            fontFamily='Gluten'
          >
            My Coffees Track
          </Text>
          <Text marginBottom='100px' align='left' marginLeft='10px' width='50%'>
            Welcome to your personal recipe center! Here, you can begin creating
            your own recipes and keep track of all the delightful coffees you
            taste and register!
          </Text>
        </Flex>
        <Image
          src={coffeetastepage}
          width='300px'
          height='200px'
          align='center'
        ></Image>
      </Flex>
      <Text marginBottom='40px'>Search Bar</Text>

      <Flex flexDirection='row' flexWrap='wrap' gap='4' justifyContent='center'>
        <Button width='500px' height='400px' opacity='0.5'>
          Add
        </Button>
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
                route='CoffeeTaste'
              />
            </div>
          );
        })}
      </Flex>
    </div>
  );
}

export default CoffeeTaste;
