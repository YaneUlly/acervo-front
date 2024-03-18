import CoffeeCard from '../CoffeeCard';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function RecommendedCoffee({ recommendedCoffee, resetQuiz }) {
  const {
    coffeeName,
    coffeeImgUrl,
    region,
    varieties,
    process,
    method,
    createdBy,
    share,
    storeUrl,
    coffeeId,
  } = recommendedCoffee;
  return (
    <div>
      <Box
        display='Flex'
        flexDirection='column'
        alignItems='center'
        width='100%'
        marginTop={{ base: '20%', md: '100px' }}
      >
        <Text marginBottom='30px' fontSize='2xl' fontWeight='600'>
          Recommended Coffee
        </Text>
        <Text
          marginBottom='30px'
          width={{ base: '80%', md: '60%', lg: '40%' }}
          textAlign='center'
        >
          {' '}
          Based on your answers, here is your personalized coffee recommendation
          crafted by our vibrant community!
        </Text>
        <CoffeeCard
          coffeeName={coffeeName}
          coffeeImgUrl={coffeeImgUrl}
          region={region}
          varieties={varieties}
          process={process}
          method={method}
          storeUrl={storeUrl}
          share={share}
          coffeeId={coffeeId}
        />
        <Text
          marginTop='40px'
          marginBottom='30px'
          width={{ base: '90%', md: '60%', lg: '50%' }}
          fontSize='md'
          textAlign='center'
        >
          If you are eager for more delightful recommendations and want to
          explore a rich world of coffees and recipes, join our community today.
          Immerse yourself in a journey of flavors and embark on your coffee
          tasting adventure with us!
        </Text>
        <Box
          display='flex'
          justifyContent='space-between'
          width={{ base: '80%', md: '60%', lg: '40%' }}
          marginTop='30px'
          marginBottom='100px'
        >
          <Button
            onClick={resetQuiz}
            variant='outline'
            width={{ base: '40%', md: '30%' }}
            colorScheme='#028AEB'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            Restart Quiz
          </Button>

          <Link to={`/signup`} width='30%'>
            <Button
              variant='outline'
              width='100%'
              borderColor='#0B0B03'
              bgColor='#FFB82E'
              color='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
            >
              Sign up
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default RecommendedCoffee;
