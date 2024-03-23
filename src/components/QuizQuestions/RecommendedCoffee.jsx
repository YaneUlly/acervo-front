import CoffeeCard from '../CoffeeCard';
import NoCoffeeMatch from './NoCoffeeMatch';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function RecommendedCoffee({ recommendedCoffee, resetQuiz }) {
  console.log('recommendedCoffee:', recommendedCoffee);

  return (
    <div>
      {recommendedCoffee ? (
        <Box
          display='Flex'
          flexDirection='column'
          alignItems='center'
          width={{ base: '90%', md: '100%' }}
          marginTop={{ base: '20%', md: '100px' }}
          marginBottom='100px'
        >
          <Text
            marginBottom='40px'
            fontSize='2xl'
            fontWeight='700'
            marginLeft={{ base: '35px', md: '0px' }}
            textAlign={{ base: 'center' }}
            width={{ md: '70%' }}
          >
            Recommended Coffee
          </Text>
          <Text
            marginBottom='30px'
            width={{ base: '80%', md: '60%', lg: '40%' }}
            textAlign='center'
            marginLeft={{ base: '30px', md: '0' }}
          >
            Based on your answers, here is your personalized coffee
            recommendation crafted by our vibrant community!
          </Text>

          <Box marginLeft={{ base: '40px', md: '0' }}>
            <CoffeeCard
              coffeeName={recommendedCoffee.coffeeName}
              coffeeImgUrl={recommendedCoffee.coffeeImgUrl}
              region={recommendedCoffee.region}
              varieties={recommendedCoffee.varieties}
              process={recommendedCoffee.process}
              method={recommendedCoffee.method}
              storeUrl={recommendedCoffee.storeUrl}
              share={recommendedCoffee.share}
              coffeeId={recommendedCoffee.coffeeId}
            />
          </Box>
          <Text
            marginTop='40px'
            marginBottom={{ base: '15px', md: '30px' }}
            marginLeft={{ base: '20px', md: '0' }}
            width={{ base: '90%', md: '60%', lg: '50%' }}
            fontSize='md'
            textAlign='center'
          >
            If you are eager for more delightful recommendations and want to
            explore a rich world of coffees and recipes, join our community
            today. Immerse yourself in a journey of flavors and embark on your
            coffee tasting adventure with us!
          </Text>
          <Box
            display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent='space-between'
            gap={5}
            width={{ base: '40%', md: '60%' }}
            marginTop='40px'
            marginLeft={{ base: '50px', md: '25px', xl: '55px' }}
          >
            <Button
              onClick={resetQuiz}
              variant='outline'
              width={{ base: '80%', md: '25%', xl: '20%' }}
              colorScheme='#028AEB'
              color='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
            >
              Restart Quiz
            </Button>

            <Button
              variant='outline'
              width={{ base: '80%', md: '25%', xl: '20%' }}
              borderColor='#0B0B03'
              bgColor='#FFB82E'
              color='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
            >
              <Link to={`/signup`}>Sign up</Link>
            </Button>
          </Box>
        </Box>
      ) : (
        <NoCoffeeMatch />
      )}
    </div>
  );
}

export default RecommendedCoffee;
