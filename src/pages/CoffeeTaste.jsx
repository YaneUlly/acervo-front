import { useState, useEffect } from 'react';
import { getAllCoffeesTaste } from '../api/coffees.api';
import CoffeeCard from '../components/CoffeeCard';
import { Link } from 'react-router-dom';
import {
  Text,
  Flex,
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import portafilter from '../assets/portafilter.png';

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

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getCoffeesTaste();
  }, []);

  return (
    <div>
      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ md: 'center', xl: 'left' }}
        marginLeft={{ base: '65px', md: '0px', lg: '0px', xl: '190px' }}
        marginTop={{ base: '40px', md: '45px', lg: '80px' }}
        marginBottom={{ base: '25px', md: '45px', lg: '80px' }}
      >
        <Image
          src={portafilter}
          display={{ base: 'flex', md: 'none' }}
          alignSelf='center'
          width={{ base: '190px' }}
          height={{ base: '220px' }}
          marginRight='50px'
        />
        <Flex
          flexDirection='column'
          justifyContent='left'
          width={{ base: '80%', md: '50%' }}
        >
          <Text
            fontFamily='Gluten'
            marginTop={{ base: '30px', md: '65px', lg: '50px' }}
            marginBottom={{ base: '10px', lg: '20px' }}
            lineHeight='1em'
            fontSize={{ base: '3xl', lg: '5xl' }}
            textAlign='left'
          >
            My Coffees Track
          </Text>
          <Text
            textAlign='left'
            fontSize='16px'
            width={{ base: '100%', md: '80%', xl: '80%' }}
            lineHeight={{ base: '1.2em', md: '1.4em' }}
            marginBottom='18px'
          >
            Welcome to your personal recipe center! Here, you can begin creating
            your own recipes and keep track of all the delightful coffees you
            taste and register!
          </Text>
        </Flex>
        <Image
          src={portafilter}
          display={{ base: 'none', md: 'flex' }}
          width={{ md: '180px', lg: '175px', xl: '200px' }}
          height={{ md: '220px', lg: '235px', xl: '275px' }}
        />
      </Box>

      <InputGroup
        marginLeft={{ base: '65px', md: '140px', lg: '200px', xl: '190px' }}
      >
        <InputLeftAddon backgroundColor='#0B0B03'>
          <Icon as={SearchIcon} color='#FFEFD6' backgroundColor='#0B0B03' />
        </InputLeftAddon>
        <Input
          type='text'
          placeholder='Search'
          variant='outline'
          borderColor='#0B0B03'
          width={{ base: '60%', md: '60%', xl: '70%' }}
          marginBottom={{ base: '40px', md: '60px', lg: '100px' }}
          value={search}
          onChange={handleSearch}
        ></Input>
      </InputGroup>

      <Flex
        flexDirection='row'
        flexWrap='wrap'
        gap='10'
        justifyContent='center'
        marginLeft={{ base: '5px', md: '15px', lg: '0px' }}
        marginBottom='100px'
      >
        <Link to='/coffeetaste/create'>
          <Button
            width={{ base: '300px', md: '300px', lg: '500px' }}
            height={{ base: '100px', md: '356px', lg: '400px' }}
            opacity='0.5'
            borderRadius='5px'
            fontSize='2xl'
          >
            Add
          </Button>
        </Link>
        {coffees
          .filter(
            coffee =>
              coffee.coffeeName.toLowerCase().includes(search.toLowerCase()) ||
              coffee.region.toLowerCase().includes(search.toLowerCase()) ||
              coffee.method.toLowerCase().includes(search.toLowerCase()) ||
              coffee.country.toLowerCase().includes(search.toLowerCase()) ||
              coffee.roast.toLowerCase().includes(search.toLowerCase()) ||
              coffee.caffeine.toLowerCase().includes(search.toLowerCase()) ||
              coffee.flavor.toLowerCase().includes(search.toLowerCase()) ||
              coffee.body.toLowerCase().includes(search.toLowerCase()) ||
              (coffee.varieties &&
                coffee.varieties.some(variety =>
                  variety.toLowerCase().includes(search.toLowerCase())
                )) ||
              (coffee.altitude &&
                coffee.altitude.some(altitude =>
                  altitude.toLowerCase().includes(search.toLowerCase())
                )) ||
              (coffee.process &&
                coffee.process.some(process =>
                  process.toLowerCase().includes(search.toLowerCase())
                )) ||
              (coffee.aromas &&
                coffee.aromas.some(aroma =>
                  aroma.toLowerCase().includes(search.toLowerCase())
                ))
          )

          .map(coffee => {
            const createdBy = coffee.createdBy && coffee.createdBy[0];
            <Link to={'/coffeetaste/create'}>
              <Button
                width={{ base: '300px', md: '300px', lg: '500px' }}
                height={{ base: '100px', md: '356px', lg: '400px' }}
                opacity='0.5'
                borderRadius='5px'
                fontSize='2xl'
              >
                Add
              </Button>
            </Link>;

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
