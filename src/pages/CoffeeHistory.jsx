import axios from 'axios';
import { useState, useEffect } from 'react';
import { Text, Flex, Box, Image, Spinner } from '@chakra-ui/react';
import roast from '../assets/roast.png';

let API_URL = `https://coffee-type-api.web.app/coffee`;

function CoffeeHistory() {
  const [showCoffeeHistory, setShowCoffeeHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCoffeeHistory = () => {
    setIsLoading(true);

    console.log('Fetching coffee history...');
    axios
      .get(API_URL)
      .then(response => {
        console.log('Response received:', response);
        setShowCoffeeHistory(response.data);
        console.log('showCoffeeHistory:', showCoffeeHistory);
      })
      .catch(error => {
        console.error('Error fetching coffee history:', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
        console.log('Is loading', setIsLoading);
        console.log('Finished fetching coffee history');
      });
  };

  const characteristicsNames = {
    flavor: 'Flavor',
    body: 'Body',
    caffeine_content: 'Caffeine Content',
    roast_profile: 'Roast Profile',
    brewing_methods: 'Brewing Methods',
    recommended_pairing: 'Recommended Pairing',
  };

  useEffect(() => {
    getCoffeeHistory();
  }, []);

  return (
    <div>
      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent='center'
        marginLeft={{ md: '35px', lg: '0px' }}
        marginBottom={{ base: '20px', md: '50px' }}
        marginTop={{ base: '40px', lg: '60px' }}
      >
        <Image
          src={roast}
          width='250px'
          height='250px'
          alignSelf='center'
          display={{ base: 'flex', md: 'none' }}
        />

        <Flex
          flexDirection='column'
          justifyContent='left'
          marginTop={{ base: '40px', md: '80px', xl: '0' }}
          marginLeft={{ base: '45px', md: '70px', xl: '0' }}
          width={{ base: '100%', lg: '52%' }}
        >
          <Text
            fontFamily='Gluten'
            marginTop={{ xl: '45px' }}
            marginBottom={{ base: '10px', lg: '20px' }}
            lineHeight='1em'
            fontSize={{ base: '3xl', lg: '5xl' }}
            textAlign='left'
          >
            Coffee History
          </Text>
          <Text
            textAlign='left'
            fontSize='16px'
            width='75%'
            marginBottom='18px'
          >
            Discover the intriguing world of coffee species with us. From the
            delicate flavors of Arabica to the robustness of Robusta, explore
            the diversity and richness of coffee cultivation.
          </Text>
        </Flex>

        <Image
          src={roast}
          width={{ md: '300px', xl: '390px' }}
          height={{ md: '300px', xl: '320px' }}
          marginRight={{ md: '120px', xl: '0' }}
          display={{ base: 'none', md: 'flex', lg: 'flex' }}
        />
      </Box>
      <div>
        {showCoffeeHistory.length === 0 ? (
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#F08229'
            size='xl'
          />
        ) : (
          <div>
            {showCoffeeHistory.map((coffee, index) => (
              <div key={index}>
                <Flex
                  justifyContent='space-around'
                  flexDirection={{ base: 'column', md: 'row' }}
                  marginTop={{ base: '20px', lg: '60px' }}
                  marginLeft={{ base: '45px', md: '0' }}
                  marginBottom={{ md: '60px' }}
                >
                  <Text
                    fontSize='3xl'
                    width='400px'
                    fontWeight='700'
                    align={{ base: 'left', md: 'center' }}
                    marginLeft={{ md: '80px' }}
                    marginBottom={{ base: '5px', md: '0px' }}
                  >
                    {coffee.type}
                  </Text>

                  <Box
                    flexDirection='column'
                    align='left'
                    marginLeft={{ base: '0px', md: '100px' }}
                    marginRight={{ base: '100px', md: '200px' }}
                    width='90%'
                    maxW={{ base: '100%', md: '800px' }}
                    overflow='auto'
                  >
                    <Text fontSize='xl'>
                      <strong>Origin:</strong>
                    </Text>
                    <p>
                      {coffee.origin.map((region, index) => (
                        <p key={index}>
                          <strong>{region.region}:</strong>{' '}
                          {region.countries.join(', ')}
                        </p>
                      ))}
                    </p>
                    <Text fontSize='xl' paddingTop='15px'>
                      <strong>Characteristics:</strong>
                    </Text>
                    <p>
                      {Object.entries(coffee.characteristics).map(
                        ([key, value]) => (
                          <p key={key}>
                            <strong>{characteristicsNames[key]}:</strong>{' '}
                            {Array.isArray(value)
                              ? value
                                  .map(
                                    word =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join(', ')
                              : value.charAt(0).toUpperCase() + value.slice(1)}
                          </p>
                        )
                      )}
                    </p>
                    <Text fontSize='xl' paddingTop='15px'>
                      <strong>History:</strong>
                    </Text>
                    <p>{coffee.history}</p>
                    <Text fontSize='xl' paddingTop='15px'>
                      <strong>Other Names:</strong>
                    </Text>
                    <Text marginBottom='40px'>
                      {coffee.other_names.join(', ')}
                    </Text>
                  </Box>
                </Flex>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CoffeeHistory;
