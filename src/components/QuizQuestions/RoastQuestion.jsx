import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Button, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

function RoastQuestion() {
  const { handleAnswer, prevStep, nextStep } = useCoffeeQuiz();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = option => {
    if (option === 'noroast') {
      setSelectedOption('noroast');
      handleAnswer('roast', 'dark roast');
    } else {
      setSelectedOption(option);
      handleAnswer('roast', option);
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
          What is your go-to roast preference when buying coffee?
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', lg: 'row' }}
          gap={8}
          justifyContent='center'
          width={{ base: '100%', lg: '80%' }}
          alignItems={{ base: 'center' }}
        >
          <Button
            onClick={() => handleOptionClick('light roast')}
            variant={selectedOption === 'light roast' ? 'solid' : 'outline'}
            bg={selectedOption === 'light roast' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Light Roast
          </Button>

          <Button
            onClick={() => handleOptionClick('medium roast')}
            variant={selectedOption === 'medium roast' ? 'solid' : 'outline'}
            bg={selectedOption === 'medium roast' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Medium Roast
          </Button>

          <Button
            onClick={() => handleOptionClick('dark roast')}
            variant={selectedOption === 'dark roast' ? 'solid' : 'outline'}
            bg={selectedOption === 'dark roast' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Dark Roast
          </Button>

          <Button
            onClick={() => handleOptionClick('noroast')}
            variant={selectedOption === 'noroast' ? 'solid' : 'outline'}
            bg={selectedOption === 'noroast' ? '#F08229' : 'transparent'}
            _hover={{ bg: '#F08229' }}
            width={{ base: '40%', lg: '20%' }}
            height='100px'
            textAlign='center'
            colorScheme='#028AEB'
            color='#0B0B03'
          >
            Never look at it
          </Button>
        </Box>

        <Text
          marginTop='70px'
          marginBottom='50px'
          width='60%'
          fontSize='sm'
          textAlign='left'
        >
          *Coffee roasting is a transformative process, breaking down bean
          structures, removing moisture, and triggering intricate chemical
          reactions that result in the diverse flavors we cherish in coffee.
          Light roasts offer lively acidity and fruity notes, while dark roasts
          boast richness with bitter and roasty undertones. Your roast choice
          significantly impacts your coffees flavor profile.
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

export default RoastQuestion;
