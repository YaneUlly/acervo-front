import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';

function CaffeineQuestion() {
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
          What is your usual coffee choice when it comes to caffeine levels?
        </Text>

        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          width='80%'
        >
          <Button
            onClick={() => handleAnswer('caffeine', 'regular')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Regular
          </Button>
          <Button
            onClick={() => handleAnswer('caffeine', 'decaf')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Decaf
          </Button>
          <Button
            onClick={() => handleAnswer('caffeine', 'regular')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            It varies, depending on the day.
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='15px'
          width='60%'
          fontSize='sm'
          textAlign='left'
        >
          *The amount of caffeine in your coffee can vary due to several
          factors. One key factor is the type of coffee bean used. With various
          species of coffee plants, the caffeine content differs between beans.
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

export default CaffeineQuestion;
