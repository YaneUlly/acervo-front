import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box, Image } from '@chakra-ui/react';
import { useState } from 'react';
import espressomachine from '../../assets/QuizImages/espresso-machine.png';
import mokapot from '../../assets/QuizImages/mokapot.png';
import frenchpress from '../../assets/QuizImages/frenchpress.png';
import aeropress from '../../assets/QuizImages/aeropress.png';
import moccamaster from '../../assets/QuizImages/moccamaster.png';
import v60 from '../../assets/QuizImages/v60.png';
import chemex from '../../assets/QuizImages/chemex.png';
import coldbrew from '../../assets/QuizImages/coldbrew.png';

function MethodQuestion() {
  const { handleAnswer, prevStep, nextStep } = useCoffeeQuiz();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = option => {
    if (option === 'other') {
      setSelectedOption('other');
      handleAnswer('method', 'aeropress');
    } else {
      setSelectedOption(option);
      handleAnswer('method', option);
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
          What is your preferred{' '}
          <span style={{ color: '#028AEB' }}>brewing method</span> ?
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent='center'
          gap={8}
          flexWrap='wrap'
          alignItems={{ base: 'center' }}
          width={{ base: '100%', lg: '80%' }}
          marginLeft={{ base: '30px', md: '0' }}
        >
          <Button
            onClick={() => handleOptionClick('espresso')}
            variant={selectedOption === 'espresso' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'espresso'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={espressomachine}
              alt='espresso-machine'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='100px'
            />
            Espresso Machine
          </Button>

          <Button
            onClick={() => handleOptionClick('moka-pot')}
            variant={selectedOption === 'moka-pot' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'moka-pot'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={mokapot}
              alt='mokapot'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
              height='90px'
            />
            Moka Pot
          </Button>

          <Button
            onClick={() => handleOptionClick('french-press')}
            variant={selectedOption === 'french-press' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'french-press'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={frenchpress}
              alt='french-press'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
              height='90px'
            />
            French Press
          </Button>

          <Button
            onClick={() => handleOptionClick('aeropress')}
            variant={selectedOption === 'aeropress' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'aeropress'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={aeropress}
              alt='aeropress'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='50px'
              height='90px'
            />
            Aeropress
          </Button>

          <Button
            onClick={() => handleOptionClick('mocchamaster')}
            variant={selectedOption === 'mocchamaster' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'mocchamaster'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={moccamaster}
              alt='moccamaster'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='100px'
              height='90px'
            />
            Mocchamaster
          </Button>

          <Button
            onClick={() => handleOptionClick('V60')}
            variant={selectedOption === 'V60' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'V60'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={v60}
              alt='v60'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
              height='90px'
            />
            V60
          </Button>

          <Button
            onClick={() => handleOptionClick('chemex')}
            variant={selectedOption === 'chemex' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'chemex'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={chemex}
              alt='chemex'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='70px'
              height='90px'
            />
            Chemex
          </Button>

          <Button
            onClick={() => handleOptionClick('cold-brew')}
            variant={selectedOption === 'cold-brew' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'cold-brew'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={coldbrew}
              alt='coldbrew'
              marginTop='10px'
              marginBottom='10px'
              marginRight='10px'
              width='50px'
              height='90px'
            />
            Cold Brew
          </Button>

          <Button
            onClick={() => handleOptionClick('other')}
            variant={selectedOption === 'cold-brew' ? 'solid' : 'outline'}
            bg={
              selectedOption === 'cold-brew'
                ? 'rgba(240, 130, 41, 0.64)'
                : 'transparent'
            }
            _hover={{ bg: 'rgba(240, 130, 41, 0.64)' }}
            color='#0B0B03'
            width={{ base: '80%', md: '55%', xl: '30%' }}
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            Other
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
          *Each brewing method, like drip coffee, french press, or espresso, can
          accentuate unique flavors in your coffee. Light roast beans might
          shine in a pour-over or french press, while medium roast beans might
          thrive in a drip coffee maker.
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
            onClick={nextStep}
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
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default MethodQuestion;
