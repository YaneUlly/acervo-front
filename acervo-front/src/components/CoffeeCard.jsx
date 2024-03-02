import { Link } from 'react-router-dom';
import {
  Card,
  Image,
  Heading,
  CardFooter,
  CardBody,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';
import { getAllCoffeesTaste } from '../api/coffees.api';
import { useState, useEffect } from 'react';

function CoffeeCard() {
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
      {coffees.map(coffee => {
        return (
          <div key={coffee._id}>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '100px' }}
                src={coffee.coffeeImgUrl}
                alt='Coffee Image'
              />

              <Stack>
                <CardBody>
                  <Heading size='md'>{coffee.coffeeName}</Heading>

                  <Text py='2'>{coffee.description}</Text>
                </CardBody>

                <CardFooter>
                  <Button variant='solid' colorScheme='blue'>
                    Buy Latte
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default CoffeeCard;
