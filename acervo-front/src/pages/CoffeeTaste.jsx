import { useState, useEffect } from 'react';
import { getAllCoffeesTaste } from '../api/coffees.api';
import CoffeeCard from '../components/CoffeeCard';
import {
  Text,
  Flex,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import sparkle from '../assets/sparkle.png';

function CoffeeTaste() {
  const [coffees, setCoffees] = useState([]);
  const [search, setSearch] = useState('');

  const getCoffeesTaste = async () => {
    try {
      const response = await getAllCoffeesTaste();
      setCoffees(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    setSearch();
  };

  useEffect(() => {
    getCoffeesTaste();
  }, []);

  return (
    <div>
      <Flex flexDirection='column'>
        <Text
          fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
          marginTop={{ base: '20px', md: '20px', lg: '150px' }}
          marginBottom={{ lg: '10px' }}
          marginLeft={{ base: '5px' }}
          align={{ base: 'left', md: 'left', lg: 'center' }}
          fontFamily='Gluten'
        >
          My Coffees Track
        </Text>
        <Text
          marginBottom={{ base: '30px', md: '40px', lg: '60px', xl: '120px' }}
          align={{ base: 'left', md: 'left', lg: 'center' }}
          marginLeft={{ base: '5px', md: '5px', lg: '240px', xl: '420px' }}
          marginRight={{ base: '40px', md: '80px', lg: '240px', xl: '420px' }}
        >
          Welcome to your personal recipe center! Here, you can begin creating
          your own recipes and keep track of all the delightful coffees you
          taste and register!
        </Text>
      </Flex>
      <Image
        src={sparkle}
        width='100px'
        height='100px'
        display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }}
        position='absolute'
        top='160px'
        left='360px'
      ></Image>
      <Image
        src={sparkle}
        width='100px'
        height='100px'
        display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }}
        position='absolute'
        top='400px'
        left='1000px'
      ></Image>

      <InputGroup
        marginLeft={{ base: '5px', md: '5px', lg: '260px', xl: '320px' }}
      >
        <InputLeftAddon backgroundColor='#0B0B03'>
          <Icon as={SearchIcon} color='#FFEFD6' backgroundColor='#0B0B03' />
        </InputLeftAddon>
        <Input
          type='text'
          placeholder='Search'
          variant='outline'
          borderColor='#0B0B03'
          width='50%'
          marginBottom={{ base: '40px', md: '80px', lg: '120px' }}
          value={search}
          onChange={handleSearch}
        ></Input>
      </InputGroup>

      <Flex
        flexDirection='row'
        flexWrap='wrap'
        gap='10'
        justifyContent={{ base: 'left', md: 'left', lg: 'center' }}
        marginLeft={{ base: '5px', md: '15px', lg: '0px' }}
        marginBottom='50px'
      >
        <Button
          width={{ base: '300px', md: '300px', lg: '500px' }}
          height={{ base: '100px', md: '356px', lg: '400px' }}
          opacity='0.5'
          borderRadius='5px'
          fontSize='2xl'
        >
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
