import axios from 'axios';
import { useState, useEffect } from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';

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
      <Text fontSize='4xl' marginTop='60px' marginBottom='60px'>
        Coffee History
      </Text>
      <div>
        {showCoffeeHistory.length === 0 ? (
          <p>No coffee data available</p>
        ) : (
          <div>
            {showCoffeeHistory.map((coffee, index) => (
              <div key={index}>
                <Flex
                  justifyContent='space-around'
                  flexDirection={{ base: 'column', md: 'row' }}
                >
                  <Text
                    fontSize='3xl'
                    width='400px'
                    align={{ base: 'left', md: 'center' }}
                    marginLeft={{ base: '20px', md: '100px' }}
                    marginBottom={{ base: '10px', md: '0px' }}
                  >
                    {coffee.type}
                  </Text>

                  <Box
                    flexDirection='column'
                    align='left'
                    marginLeft={{ base: '20px', md: '100px' }}
                    marginRight={{ base: '100px', md: '50px' }}
                    width='100%'
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
                            {value}
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
