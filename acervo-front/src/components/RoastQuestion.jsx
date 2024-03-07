import { useCoffeeQuiz } from '../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';

function RoastQuestion() {
  const { handleAnswer, prevStep, nextStep } = useCoffeeQuiz();

  return (
    <div>
      <Box
        display='Flex'
        flexDirection='column'
        alignItems='center'
        width='100%'
        marginTop='80px'
      >
        <Text marginBottom='60px' fontSize='2xl'>
          What is your go-to roast preference when buying coffee?
        </Text>

        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          width='80%'
          flexWrap='wrap'
        >
          <Button
            onClick={() => handleAnswer('roast', 'light roast')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Light Roast
          </Button>

          <Button
            onClick={() => handleAnswer('roast', 'medium roast')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Medium Roast
          </Button>

          <Button
            onClick={() => handleAnswer('roast', 'dark roast')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Dark Roast
          </Button>

          <Button
            onClick={() => handleAnswer('roast', 'dark roast')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Never look at it
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='15px'
          width='60%'
          fontSize='sm'
          textAlign='left'
        >
          *Coffee roasting is a transformative process, breaking down bean
          structures, removing moisture, and triggering intricate chemical
          reactions that result in the diverse flavors we cherish in coffee.
          Light roasts offer lively acidity and fruity notes, while dark roasts
          boast richness with bitter and roasty undertones. Your roast choice
          significantly impacts your coffees flavor profile.
        </Text>

        <Box
          display='flex'
          justifyContent='space-between'
          width='80%'
          marginTop='20px'
        >
          <Button
            onClick={prevStep}
            variant='outline'
            colorScheme='#028AEB'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            Back
          </Button>
          <Button
            onClick={nextStep}
            bgColor='#028AEB'
            color='#FFEFD6'
            _hover={{
              bgColor: '#0B0B03',
            }}
            borderColor='#028AEB'
          >
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default RoastQuestion;
