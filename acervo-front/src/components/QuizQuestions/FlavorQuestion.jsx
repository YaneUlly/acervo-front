import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';

function FlavorQuestion() {
  const { handleAnswer, prevStep, handleSubmit } = useCoffeeQuiz();

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
          What flavors do you typically prefer in your coffee?
        </Text>

        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
          width='80%'
          flexWrap='wrap'
        >
          <Button
            onClick={() => handleAnswer('flavor', 'sweet')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Sweet
          </Button>
          <Button
            onClick={() => handleAnswer('flavor', 'floral')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Floral
          </Button>
          <Button
            onClick={() => handleAnswer('flavor', 'fruity')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Fruity
          </Button>
          <Button
            onClick={() => handleAnswer('flavor', 'spices')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Spices
          </Button>
          <Button
            onClick={() => handleAnswer('flavor', 'nutty-cocoa')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            Nutty/Cocoa
          </Button>
          <Button
            onClick={() => handleAnswer('flavor', 'nutty-cocoa')}
            variant='outline'
            width='30%'
            height='100px'
            textAlign='center'
            colorScheme='blue'
          >
            I dont have a preference
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='15px'
          width='60%'
          fontSize='sm'
          textAlign='left'
        >
          *If you are accustomed to mainstream coffee options, you are likely
          familiar with a slightly bitter taste accompanied by hints of
          nuttiness or cocoa. Coffees with robusta beans tend to carry an earthy
          bitterness, often characterized by woody and earthy undertones, with
          an aftertaste reminiscent of peanuts.
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
            Previous
          </Button>
          <Button
            onClick={handleSubmit}
            bgColor='#028AEB'
            color='#FFEFD6'
            _hover={{
              bgColor: '#0B0B03',
            }}
            borderColor='#028AEB'
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default FlavorQuestion;
