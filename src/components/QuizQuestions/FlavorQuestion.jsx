import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box, Image } from '@chakra-ui/react';
import { useState } from 'react';
import floral from '../../assets/QuizImages/floral.png';
import fruity from '../../assets/QuizImages/fruity.png';
import nutty from '../../assets/QuizImages/nutty.png';
import spices from '../../assets/QuizImages/spices.png';
import sweet from '../../assets/QuizImages/sweet.png';

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
          What <span style={{ color: '#028AEB' }}>flavors</span> do you
          typically prefer in your coffee?
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
            onClick={() => handleOptionClick('sweet')}
            variant={selectedOption === 'sweet' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'sweet'
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
              src={sweet}
              alt='sweet'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
            />
            Sweet
          </Button>
          <Button
            onClick={() => handleOptionClick('floral')}
            variant={selectedOption === 'floral' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'floral'
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
              src={floral}
              alt='floral'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
              height='80px'
            />
            Floral
          </Button>
          <Button
            onClick={() => handleOptionClick('fruity')}
            variant={selectedOption === 'fruity' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'fruity'
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
              src={fruity}
              alt='fruity'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
            />
            Fruity
          </Button>
          <Button
            onClick={() => handleOptionClick('spices')}
            variant={selectedOption === 'spices' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'spices'
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
              src={spices}
              alt='spices'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
            />
            Spices
          </Button>
          <Button
            onClick={() => handleOptionClick('nutty-cocoa')}
            variant={selectedOption === 'nutty-cocoa' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'nutty-cocoa'
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
              src={nutty}
              alt='nutty'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
            />
            Nutty/Cocoa
          </Button>
          <Button
            onClick={() => handleOptionClick('randomflavor')}
            variant={selectedOption === 'randomflavor' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'randomflavor'
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
          *If you are accustomed to mainstream coffee options, you are likely
          familiar with a slightly bitter taste accompanied by hints of
          nuttiness or cocoa. Coffees with robusta beans tend to carry an earthy
          bitterness, often characterized by woody and earthy undertones, with
          an aftertaste reminiscent of peanuts.
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
            width={{ base: '80%', md: '20%', xl: '10%' }}
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
            width={{ base: '80%', md: '20%', xl: '10%' }}
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
