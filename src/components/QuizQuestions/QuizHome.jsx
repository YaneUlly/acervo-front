import { Text, Box, Image, Button } from '@chakra-ui/react';
import CoffeeBags2 from '../../assets/CoffeeBags2.png';
import { useCoffeeQuiz } from '../../context/coffeequiz.context';

function QuizHome() {
  const { nextStep } = useCoffeeQuiz();

  return (
    <div>
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Text fontSize='5xl' marginTop='80px' fontFamily='Gluten'>
          Coffee Quiz
        </Text>
        <Image src={CoffeeBags2} width='280px' />
        <Text
          width={{ base: '335px', md: '450px' }}
          marginBottom='50px'
          textAlign='center'
        >
          Great coffee makes you excited to brew it every day. By learning more
          about your taste, we can match you to coffees that do that and then
          some.
        </Text>
        <Button
          onClick={nextStep}
          marginBottom='100px'
          variant='outline'
          width={{ base: '80%', md: '20%', xl: '10%' }}
          borderColor='#0B0B03'
          bgColor='#FFB82E'
          color='#0B0B03'
          _hover={{
            bgColor: '#0B0B03',
            color: '#FFEFD6',
          }}
        >
          Start Quiz
        </Button>
      </Box>
    </div>
  );
}

export default QuizHome;
