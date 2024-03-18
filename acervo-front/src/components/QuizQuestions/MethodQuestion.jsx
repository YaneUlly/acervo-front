import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box, Image } from '@chakra-ui/react';
import { useState } from 'react';
import espressomachine from '../../assets/QuizImages/espresso-machine.png';
import mokapot from '../../assets/QuizImages/mokapot.png';

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
        width='100%'
        marginTop='150px'
      >
        <Text marginBottom='60px' fontSize='2xl' fontWeight='600'>
          What is your preferred method for brewing your coffee?
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', lg: 'row' }}
          justifyContent='center'
          gap={8}
          flexWrap='wrap'
          alignItems={{ base: 'center' }}
          width={{ base: '100%', lg: '80%' }}
        >
          <Button
            onClick={() => handleOptionClick('espresso')}
            variant={selectedOption === 'espresso' ? 'solid' : 'outline'}
            bg={selectedOption === 'espresso' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={espressomachine}
              alt='espresso-machine'
              marginTop='10px'
              marginBottom='10px'
              width='100px'
            />
            Espresso Machine
          </Button>

          <Button
            onClick={() => handleOptionClick('moka-pot')}
            variant={selectedOption === 'moka-pot' ? 'solid' : 'outline'}
            bg={selectedOption === 'moka-pot' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            <Image
              src={mokapot}
              alt='mokapot'
              marginTop='10px'
              marginBottom='10px'
              width='90px'
              height='90px'
            />
            Moka Pot
          </Button>

          <Button
            onClick={() => handleOptionClick('french-press')}
            variant={selectedOption === 'french-press' ? 'solid' : 'outline'}
            bg={selectedOption === 'french-press' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            French Press
          </Button>

          <Button
            onClick={() => handleOptionClick('aeropress')}
            variant={selectedOption === 'aeropress' ? 'solid' : 'outline'}
            bg={selectedOption === 'aeropress' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            Aeropress
          </Button>

          <Button
            onClick={() => handleOptionClick('mocchamaster')}
            variant={selectedOption === 'mocchamaster' ? 'solid' : 'outline'}
            bg={selectedOption === 'mocchamaster' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            Mocchamaster
          </Button>

          <Button
            onClick={() => handleOptionClick('V60')}
            variant={selectedOption === 'V60' ? 'solid' : 'outline'}
            bg={selectedOption === 'V60' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            V60
          </Button>

          <Button
            onClick={() => handleOptionClick('chemex')}
            variant={selectedOption === 'chemex' ? 'solid' : 'outline'}
            bg={selectedOption === 'chemex' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            Chemex
          </Button>

          <Button
            onClick={() => handleOptionClick('cold-brew')}
            variant={selectedOption === 'cold-brew' ? 'solid' : 'outline'}
            bg={selectedOption === 'cold-brew' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            Cold Brew
          </Button>

          <Button
            onClick={() => handleOptionClick('other')}
            variant={selectedOption === 'cold-brew' ? 'solid' : 'outline'}
            bg={selectedOption === 'cold-brew' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            color='#0B0B03'
            width='30%'
            height='110px'
            textAlign='center'
            colorScheme='blue'
          >
            Other
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='50px'
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

export default MethodQuestion;
