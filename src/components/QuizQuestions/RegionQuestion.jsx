import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box, Image } from '@chakra-ui/react';
import { useState } from 'react';
import africa from '../../assets/QuizImages/africa.png';
import asia from '../../assets/QuizImages/asia.png';
import arabia from '../../assets/QuizImages/arabia.png';
import centralamerica from '../../assets/QuizImages/centralamerica.png';
import southamerica from '../../assets/QuizImages/southamerica.png';

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
          Is there a particular coffee-growing{' '}
          <span style={{ color: '#028AEB' }}>region</span> you prefer when
          purchasing coffee?
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={8}
          flexWrap='wrap'
          width={{ base: '100%', lg: '80%' }}
          marginLeft={{ base: '30px', md: '0' }}
          justifyContent='center'
          alignItems={{ base: 'center' }}
        >
          <Button
            onClick={() => handleOptionClick('africa')}
            variant={selectedOption === 'africa' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'africa'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            <Image
              src={africa}
              alt='africa'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='80px'
            />
            Africa
          </Button>
          <Button
            onClick={() => handleOptionClick('arabia')}
            variant={selectedOption === 'arabia' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'arabia'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            <Image
              src={arabia}
              alt='arabia'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='80px'
            />
            Arabia
          </Button>
          <Button
            onClick={() => handleOptionClick('asia')}
            variant={selectedOption === 'asia' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'asia'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            <Image
              src={asia}
              alt='asia'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='80px'
            />
            Asia
          </Button>
          <Button
            onClick={() => handleOptionClick('central america')}
            variant={selectedOption === 'central america' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'central america'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            <Image
              src={centralamerica}
              alt='centralamerica'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='80px'
            />
            Central America
          </Button>
          <Button
            onClick={() => handleOptionClick('south america')}
            variant={selectedOption === 'south america' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'south america'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            <Image
              src={southamerica}
              alt='southamerica'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
            />
            South America
          </Button>
          <Button
            onClick={() => handleOptionClick('randomregion')}
            variant={selectedOption === 'randomregion' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'randomregion'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            No preference
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
          *Every coffee-growing region around the globe offers distinct taste
          profiles. Factors like altitude, climate, soil composition, and
          processing techniques contribute to the unique flavors found in each
          cup. Some regions yield coffee with fuller body, others with
          heightened acidity, some are sweeter, while others are characterized
          by fruity notes.
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          gap={5}
          width='70%'
          marginTop='20px'
          marginBottom='70px'
          marginLeft={{ base: '90px', md: '20px' }}
        >
          <Button
            onClick={prevStep}
            variant='outline'
            width={{ base: '80%', md: '15%' }}
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
            width={{ base: '80%', md: '15%' }}
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
