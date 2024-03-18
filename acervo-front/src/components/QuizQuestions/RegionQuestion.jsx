import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

function RegionQuestion() {
  const { handleAnswer, prevStep, nextStep } = useCoffeeQuiz();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = option => {
    if (option === 'randomregion') {
      setSelectedOption('randomregion');
      handleAnswer('region', 'south america');
    } else {
      setSelectedOption(option);
      handleAnswer('region', option);
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
          Is there a particular coffee-growing region you prefer when purchasing
          coffee?
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
            onClick={() => handleOptionClick('africa')}
            variant={selectedOption === 'africa' ? 'solid' : 'outline'}
            bg={selectedOption === 'africa' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Africa
          </Button>
          <Button
            onClick={() => handleOptionClick('arabia')}
            variant={selectedOption === 'arabia' ? 'solid' : 'outline'}
            bg={selectedOption === 'arabia' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Arabia
          </Button>
          <Button
            onClick={() => handleOptionClick('asia')}
            variant={selectedOption === 'asia' ? 'solid' : 'outline'}
            bg={selectedOption === 'asia' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Asia
          </Button>
          <Button
            onClick={() => handleOptionClick('central america')}
            variant={selectedOption === 'central america' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'central america' ? '#F08229' : 'transparent'
            }
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Central America
          </Button>
          <Button
            onClick={() => handleOptionClick('south america')}
            variant={selectedOption === 'south america' ? 'solid' : 'outline'}
            bg={selectedOption === 'south america' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            South America
          </Button>
          <Button
            onClick={() => handleOptionClick('randomregion')}
            variant={selectedOption === 'randomregion' ? 'solid' : 'outline'}
            bg={selectedOption === 'randomregion' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Any region
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='50px'
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
            onClick={nextStep}
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
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default RegionQuestion;
