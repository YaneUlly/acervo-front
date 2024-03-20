import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

function CaffeineQuestion() {
  const { handleAnswer, prevStep, nextStep } = useCoffeeQuiz();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = option => {
    if (option === 'varies') {
      setSelectedOption('varies');
      handleAnswer('caffeine', 'regular');
    } else {
      setSelectedOption(option);
      handleAnswer('caffeine', option);
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
          What is your usual coffee choice when it comes to caffeine levels?
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
            onClick={() => handleOptionClick('regular')}
            variant={selectedOption === 'regular' ? 'solid' : 'outline'}
            bg={selectedOption === 'regular' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Regular
          </Button>
          <Button
            onClick={() => handleOptionClick('decaf')}
            variant={selectedOption === 'decaf' ? 'solid' : 'outline'}
            bg={selectedOption === 'decaf' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Decaf
          </Button>
          <Button
            onClick={() => handleOptionClick('varies')}
            variant={selectedOption === 'varies' ? 'solid' : 'outline'}
            bg={selectedOption === 'varies' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            It varies
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='50px'
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
          marginBottom='100px'
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

export default CaffeineQuestion;
