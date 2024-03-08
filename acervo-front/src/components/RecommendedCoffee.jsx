import CoffeeCard from './CoffeeCard';
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
        marginTop='60px'
      >
        <Text marginBottom='15px' fontSize='2xl'>
          Recommended Coffee
        </Text>
        <Text
          marginTop='10px'
          marginBottom='30px'
          width='50%'
          fontSize='sm'
          textAlign='center'
        >
          Based on your answers, here is your personalized coffee recommendation
          crafted by our vibrant community. If you are eager for more delightful
          recommendations and want to explore a rich world of coffees and
          recipes, join our community today. Immerse yourself in a journey of
          flavors and embark on your coffee tasting adventure with us!
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
        <Box
          display='flex'
          justifyContent='space-between'
          width='20%'
          marginTop='30px'
        >
          <Button
            onClick={resetQuiz}
            variant='outline'
            colorScheme='#028AEB'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            Restart Quiz
          </Button>

          <Link to={`/signup`}>
            <Button
              bgColor='#028AEB'
              color='#FFEFD6'
              _hover={{
                bgColor: '#0B0B03',
              }}
              borderColor='#028AEB'
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
