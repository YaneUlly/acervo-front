import { useCoffeeQuiz } from '../../context/coffeequiz.context';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NoCoffeeMatch() {
  const { resetQuiz } = useCoffeeQuiz();

  console.log('Rendering NoCoffeeMatch component');

  return (
    <div>
      <Box
        display='Flex'
        flexDirection='column'
        alignItems='center'
        width={{ base: '90%', md: '100%' }}
        marginTop={{ base: '20%', md: '100px' }}
        marginBottom='100px'
      >
        <Text
          marginBottom='40px'
          fontSize='2xl'
          fontWeight='700'
          marginLeft={{ base: '35px', md: '15px' }}
          textAlign={{ base: 'center' }}
          width={{ md: '70%' }}
        >
          Oops! Looks like no coffee matched your answers.
        </Text>
        <Text
          marginBottom='30px'
          width={{ base: '75%', md: '60%' }}
          textAlign='center'
          marginLeft={{ base: '30px', md: '0' }}
        >
          Maybe your perfect brew is out there, waiting for you. Why not give it
          another shot or join our community and explore more options? Who
          knows, you might stumble upon that coffee that will make your taste
          buds do a happy dance!
        </Text>

        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          gap={5}
          width={{ base: '40%', md: '60%' }}
          marginTop='40px'
          marginLeft={{ base: '40px', md: '25px', xl: '55px' }}
        >
          <Button
            onClick={resetQuiz}
            variant='outline'
            width={{ base: '80%', md: '25%', xl: '20%' }}
            colorScheme='#028AEB'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            Restart Quiz
          </Button>
          <Button
            variant='outline'
            width={{ base: '80%', md: '25%', xl: '20%' }}
            borderColor='#0B0B03'
            bgColor='#FFB82E'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            <Link to={`/signup`}>Sign up</Link>
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default NoCoffeeMatch;
