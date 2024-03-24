import { useState, useEffect } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import { getAllCoffeesHub } from '../api/coffees.api';
import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
  Image,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import coffeehub from '../assets/coffeehub.png';

function CoffeeHub() {
  const [userCoffees, setUserCoffees] = useState([]);
  const [search, setSearch] = useState('');
  const getUserCoffees = async () => {
    try {
      const response = await getAllCoffeesHub();
      console.log(response);
      setUserCoffees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getUserCoffees();
  }, []);

  return (
    <div>
      <Flex flexDirection='column'>
        <Image
          src={coffeehub}
          width={{ base: '250px', lg: '350px' }}
          height={{ base: '180px', lg: '250px' }}
          marginTop={{ base: '20px', md: '20px', lg: '50px' }}
          alignSelf='center'
        />
        <Text
          fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
          marginTop={{ base: '20px', md: '20px', lg: '15px' }}
          marginBottom={{ lg: '10px' }}
          align='center'
          fontFamily='Gluten'
        >
          Coffee Hub{' '}
          <span style={{ color: '#028AEB', fontFamily: 'Gluten' }}>
            Community
          </span>
        </Text>
        <Text
          marginBottom={{ base: '30px', md: '40px', lg: '60px', xl: '90px' }}
          align={{ base: 'center', md: 'center', lg: 'center' }}
          marginLeft={{ base: '15px', md: '240px', xl: '420px' }}
          marginRight={{ base: '20px', md: '240px', xl: '420px' }}
        >
          Welcome to our coffee community, here you can discover amazing coffees
          and recipes. Explore, savor, and enjoy the journey!
        </Text>
      </Flex>

      <InputGroup
        marginLeft={{ base: '50px', md: '130px', lg: '195px', xl: '265px' }}
      >
        <InputLeftAddon backgroundColor='#0B0B03'>
          <Icon as={SearchIcon} color='#FFEFD6' backgroundColor='#0B0B03' />
        </InputLeftAddon>
        <Input
          type='text'
          placeholder='Search'
          variant='outline'
          borderColor='#0B0B03'
          width='60%'
          marginBottom={{ base: '40px', md: '80px', lg: '120px' }}
          value={search}
          onChange={handleSearch}
        ></Input>
      </InputGroup>

      <Flex
        flexDirection='row'
        flexWrap='wrap'
        gap='10'
        justifyContent='center'
        marginBottom='100px'
      >
        {userCoffees
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
                  route='CoffeeHub'
                />
              </div>
            );
          })}
      </Flex>
    </div>
  );
}

export default CoffeeHub;
