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
        width='100%'
        marginTop={{ base: '20%', md: '120px' }}
        marginBottom='100px'
      >
        <Text marginBottom='30px' fontSize='2xl' fontWeight='600'>
          Oops! Looks like no coffee matched your answers.
        </Text>
        <Text
          marginBottom='30px'
          width={{ base: '80%', md: '60%', lg: '40%' }}
          textAlign='center'
        >
          Maybe your perfect brew is out there, waiting for you. Why not give it
          another shot or join our community and explore more options? Who
          knows, you might stumble upon that coffee that will make your taste
          buds do a happy dance!
        </Text>

        <Box
          display='flex'
          justifyContent='space-between'
          width={{ base: '80%', md: '60%', lg: '40%' }}
          marginTop='30px'
          marginBottom='100px'
        >
          <Button
            onClick={resetQuiz}
            variant='outline'
            width={{ base: '40%', md: '35%' }}
            colorScheme='#028AEB'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            Restart Quiz
          </Button>
          <Link to={`/signup`} width='35%'>
            <Button
              variant='outline'
              width='100%'
              borderColor='#0B0B03'
              bgColor='#FFB82E'
              color='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
            >
              Sign up
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default NoCoffeeMatch;
