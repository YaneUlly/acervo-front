import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

function FlavorQuestion() {
  const { handleAnswer, prevStep, handleSubmit } = useCoffeeQuiz();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = option => {
    if (option === 'randomflavor') {
      setSelectedOption('randomflavor');
      handleAnswer('flavor', 'nutty-cocoa');
    } else {
      setSelectedOption(option);
      handleAnswer('flavor', option);
    }
  };

  return (
    <div>
      <Box
        display='Flex'
        flexDirection='column'
        alignItems='center'
        width='100%'
        marginTop='150px'
      >
        <Text marginBottom='60px' fontSize='2xl' fontWeight='600'>
          What flavors do you typically prefer in your coffee?
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={8}
          width={{ base: '100%', lg: '80%' }}
          justifyContent='center'
          alignItems={{ base: 'center' }}
        >
          <Button
            onClick={() => handleOptionClick('sweet')}
            variant={selectedOption === 'sweet' ? 'solid' : 'outline'}
            bg={selectedOption === 'sweet' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Sweet
          </Button>
          <Button
            onClick={() => handleOptionClick('floral')}
            variant={selectedOption === 'floral' ? 'solid' : 'outline'}
            bg={selectedOption === 'floral' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Floral
          </Button>
          <Button
            onClick={() => handleOptionClick('fruity')}
            variant={selectedOption === 'fruity' ? 'solid' : 'outline'}
            bg={selectedOption === 'fruity' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Fruity
          </Button>
          <Button
            onClick={() => handleOptionClick('spices')}
            variant={selectedOption === 'spices' ? 'solid' : 'outline'}
            bg={selectedOption === 'spices' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Spices
          </Button>
          <Button
            onClick={() => handleOptionClick('nutty-cocoa')}
            variant={selectedOption === 'nutty-cocoa' ? 'solid' : 'outline'}
            bg={selectedOption === 'nutty-cocoa' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Nutty/Cocoa
          </Button>
          <Button
            onClick={() => handleOptionClick('randomflavor')}
            variant={selectedOption === 'randomflavor' ? 'solid' : 'outline'}
            bg={selectedOption === 'randomflavor' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            No preference
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='50px'
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
            width='10%'
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
            onClick={handleSubmit}
            variant='outline'
            width='10%'
            borderColor='#0B0B03'
            bgColor='#FFB82E'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default FlavorQuestion;
