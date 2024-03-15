import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';

function MethodQuestion() {
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
          What is your preferred method for brewing your coffee?
        </Text>

        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          flexWrap='wrap'
          width='80%'
        >
          <Button
            onClick={() => handleAnswer('method', 'espresso')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Espresso Machine
          </Button>

          <Button
            onClick={() => handleAnswer('method', 'moka-pot')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Moka Pot
          </Button>

          <Button
            onClick={() => handleAnswer('method', 'french-press')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            French Press
          </Button>

          <Button
            onClick={() => handleAnswer('method', 'aeropress')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Aeropress
          </Button>

          <Button
            onClick={() => handleAnswer('method', 'mocchamaster')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Mocchamaster
          </Button>

          <Button
            onClick={() => handleAnswer('method', 'V60')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            V60
          </Button>

          <Button
            onClick={() => handleAnswer('method', 'chemex')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Chemex
          </Button>

          <Button
            onClick={() => handleAnswer('method', 'cold-brew')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Cold Brew
          </Button>

          <Button
            onClick={() => handleAnswer('method', 'other')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Other
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='15px'
          width='60%'
          fontSize='sm'
          textAlign='left'
        >
          *Each brewing method, like drip coffee, French press, or espresso, can
          accentuate unique flavors in your coffee. Light roast beans might
          shine in a pour-over or French press, while medium roast beans might
          thrive in a drip coffee maker.
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

export default MethodQuestion;
