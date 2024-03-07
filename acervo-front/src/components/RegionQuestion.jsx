import { useCoffeeQuiz } from '../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';

function RegionQuestion() {
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
          Is there a particular coffee-growing region you prefer when purchasing
          coffee?
        </Text>

        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          flexWrap='wrap'
          width='80%'
        >
          <Button
            onClick={() => handleAnswer('region', 'africa')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Africa
          </Button>
          <Button
            onClick={() => handleAnswer('region', 'arabia')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Arabia
          </Button>
          <Button
            onClick={() => handleAnswer('region', 'asia')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Asia
          </Button>
          <Button
            onClick={() => handleAnswer('region', 'central america')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Central America
          </Button>
          <Button
            onClick={() => handleAnswer('region', 'south america')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            South America
          </Button>
          <Button
            onClick={() => handleAnswer('region', 'south america')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            It doesnt matter for me
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='15px'
          width='60%'
          fontSize='sm'
          textAlign='left'
        >
          *Every coffee-growing region around the globe offers distinct taste
          profiles. Factors like altitude, climate, soil composition, and
          processing techniques contribute to the unique flavors found in each
          cup. Some regions yield coffee with fuller body, others with
          heightened acidity, some are sweeter, while others are characterized
          by fruity notes.
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

export default RegionQuestion;
