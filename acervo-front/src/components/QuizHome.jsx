import { Text, Box, Image, Button } from '@chakra-ui/react';
import CoffeeBags2 from '../assets/CoffeeBags2.png';
import { useCoffeeQuiz } from '../context/coffeequiz.context';

function QuizHome() {
  const { nextStep } = useCoffeeQuiz();

  return (
    <div>
      <Text
        fontSize='5xl'
        marginTop='80px'
        marginBottom='10px'
        fontFamily='Gluten'
      >
        Coffee Quiz
      </Text>
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Image src={CoffeeBags2} width='280px' />
        <Text width='450px' marginBottom='20px'>
          Ready to start your coffee adventure? Take our Coffee Quiz and get a
          personalized recommendation from our Coffee Community!
        </Text>
        <Button
          onClick={nextStep}
          bgColor='#028AEB'
          color='#FFEFD6'
          _hover={{
            bgColor: '#0B0B03',
          }}
          borderColor='#028AEB'
        >
          Start Quiz
        </Button>
      </Box>
    </div>
  );
}

export default QuizHome;
