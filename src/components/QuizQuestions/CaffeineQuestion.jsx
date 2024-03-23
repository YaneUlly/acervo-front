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
        width={{ base: '90%', md: '100%' }}
        marginTop={{ base: '80px', lg: '150px' }}
      >
        <Text
          marginBottom='60px'
          fontSize='2xl'
          fontWeight='700'
          marginLeft={{ base: '35px', md: '15px' }}
          textAlign={{ base: 'center' }}
          width={{ md: '70%' }}
        >
          What is your usual coffee choice when it comes to{' '}
          <span style={{ color: '#028AEB' }}>caffeine levels</span> ?
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={8}
          width={{ base: '100%', lg: '80%' }}
          marginLeft={{ base: '30px', md: '0' }}
          justifyContent='center'
          alignItems={{ base: 'center' }}
        >
          <Button
            onClick={() => handleOptionClick('regular')}
            variant={selectedOption === 'regular' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'regular'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '70%', md: '40%', lg: '20%' }}
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
            bg={
              selectedOption === 'decaf'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '70%', md: '40%', lg: '20%' }}
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
            bg={
              selectedOption === 'varies'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '70%', md: '40%', lg: '20%' }}
            height='100px'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            It varies
          </Button>
        </Box>

        <Text
          marginTop={{ base: '55px', md: '70px' }}
          marginBottom='50px'
          width={{ base: '75%', md: '60%' }}
          fontSize='sm'
          textAlign='left'
          marginLeft={{ base: '50px', md: '25px' }}
        >
          *The amount of caffeine in your coffee can vary due to several
          factors. One key factor is the type of coffee bean used. With various
          species of coffee plants, the caffeine content differs between beans.
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          gap={5}
          width='80%'
          marginTop='20px'
          marginBottom='70px'
          marginLeft={{ base: '90px', md: '20px' }}
        >
          <Button
            onClick={prevStep}
            variant='outline'
            width={{ base: '80%', md: '20%' }}
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
            width={{ base: '80%', md: '20%' }}
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
