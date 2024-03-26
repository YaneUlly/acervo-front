import { useState, useEffect } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import { getAllCoffeesHub } from '../api/coffees.api';
import {
  Flex,
  Text,
  Button,
  Spinner,
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
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const coffeesPerPage = 6;
  const totalCoffees = userCoffees.length;
  const totalPages = Math.ceil(totalCoffees / coffeesPerPage);

  const getUserCoffees = async () => {
    try {
      const response = await getAllCoffeesHub();
      console.log(response);
      setUserCoffees(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const handlePrevClick = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };

  useEffect(() => {
    setLoading(true);
    getUserCoffees();
  }, [currentPage]);

  const filteredCoffees = userCoffees.filter(
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
  );

  const startIndex = (currentPage - 1) * coffeesPerPage;
  const endIndex = Math.min(startIndex + coffeesPerPage, totalCoffees);

  const coffeesToShow = filteredCoffees.slice(startIndex, endIndex);

  return (
    <div>
      {loading ? ( // Renderizar o spinner enquanto os dados estão sendo buscados
        <Flex justify='center' align='center' height='100vh'>
          <Spinner size='xl' />
        </Flex>
      ) : (
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
              marginBottom={{
                base: '30px',
                md: '40px',
                lg: '60px',
                xl: '90px',
              }}
              align={{ base: 'center', md: 'center', lg: 'center' }}
              marginLeft={{ base: '15px', md: '240px', xl: '420px' }}
              marginRight={{ base: '20px', md: '240px', xl: '420px' }}
            >
              Welcome to our coffee community, here you can discover amazing
              coffees and recipes. Explore, savor, and enjoy the journey!
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
            {coffeesToShow.map(coffee => {
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

          <Flex
            flexDirection='row'
            justifyContent='center'
            gap='15px'
            alignItems='center'
            paddingTop='50px'
            paddingBottom='50px'
          >
            {currentPage > 1 && (
              <Button
                onClick={handlePrevClick}
                variant='outline'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                Return
              </Button>
            )}
            <Text color='#0B0B03' fontSize='18px' fontWeight='600'>
              Page {currentPage} of {totalPages}
            </Text>
            {currentPage < totalPages && (
              <Button
                onClick={handleNextClick}
                variant='outline'
                colorScheme='#028AEB'
                bgColor='#FFB82E'
                color='#0B0B03'
                borderColor='#0B0B03'
                _hover={{
                  bgColor: '#FFEFD6',
                  color: '#0B0B03',
                }}
              >
                Next
              </Button>
            )}
          </Flex>
        </div>
      )}
    </div>
  );
}

export default CoffeeHub;
