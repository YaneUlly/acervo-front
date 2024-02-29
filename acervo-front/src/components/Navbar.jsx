import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';

function Navbar() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <nav>
      <Flex
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        top='0'
        position='sticky'
        height='50px'
      >
        <Box>
          <Link to='/'>
            <Text fontFamily='Gluten' fontSize='28px'>
              acervo
            </Text>
          </Link>
        </Box>

        <Box
          display='Flex'
          flexDirection='flex-end'
          justifyContent='space-between'
          width='600px'
          alignItems='center'
        >
          {isLoggedIn && (
            <>
              <Link to='/howtotaste'>How to taste</Link>
              <Link to='/coffeequiz'>Coffee Quiz</Link>
              <Link to='/coffeehub'>Coffee Hub</Link>
              <Link to='/coffeetaste'>My Coffee Track</Link>
              <Button
                onClick={logoutUser}
                variant='outline'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Box>

        {!isLoggedIn && (
          <>
            <Box
              display='Flex'
              flexDirection='flex-end'
              justifyContent='space-between'
              width='400px'
              alignItems='center'
            >
              <Link to='/howtotaste' _hover={{ color: '#028AEB' }}>
                How to taste
              </Link>
              <Link to='/coffeequiz' _hover={{ color: '#028AEB' }}>
                Coffee Quiz
              </Link>
              <Button
                variant='outline'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                <Link to='/login'>Login</Link>
              </Button>
              <Link to='signup'>
                <Button
                  bgColor='#028AEB'
                  color='#FFEFD6'
                  _hover={{
                    bgColor: '#0B0B03',
                  }}
                  borderColor='#028AEB'
                >
                  Sign up
                </Button>
              </Link>
            </Box>
          </>
        )}
      </Flex>
    </nav>
  );
}

export default Navbar;
