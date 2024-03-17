import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import {
  Box,
  Flex,
  Button,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function Navbar() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <nav>
      <Flex
        as='header'
        justifyContent='space-between'
        alignItems='center'
        paddingTop='20px'
        paddingBottom='20px'
        paddingLeft='50px'
        paddingRight='50px'
        top='0'
        zIndex='sticky'
        bg='#0B0B03'
      >
        <Box>
          <Link to='/'>
            <Text fontFamily='Gluten' fontSize='28px' color='#FADCAF'>
              acervo
            </Text>
          </Link>
        </Box>

        {/* Hamburger Icon */}
        <Box
          display={{ base: 'block', md: 'block', lg: 'none' }}
          position='relative'
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
              color='#FADCAF'
            />
            <MenuList>
              {isLoggedIn ? (
                <>
                  <MenuItem>
                    <Link to='/howtotaste' color='#FADCAF'>
                      How to taste
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/coffeequiz'>Coffee Quiz</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/coffeehub'>Coffee Hub</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/coffeehistory'>Coffee History</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/coffeetaste'>My Coffee Track</Link>
                  </MenuItem>
                  <MenuItem onClick={logoutUser}>Logout</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem>
                    <Link to='/howtotaste'>How to taste</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/coffeequiz'>Coffee Quiz</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/coffeehistory'>Coffee History</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/login'>Login</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/signup'>Sign up</Link>
                  </MenuItem>
                </>
              )}
            </MenuList>
          </Menu>
        </Box>

        {/* Desktop Navigation */}
        <Box
          display={{ base: 'none', lg: 'flex' }}
          width={isLoggedIn ? '680px' : '500px'}
          justifyContent='space-between'
          alignItems='center'
        >
          {isLoggedIn ? (
            <>
              <Link to='/howtotaste'>How to taste</Link>
              <Link to='/coffeequiz'>Coffee Quiz</Link>
              <Link to='/coffeehistory'>Coffee History</Link>
              <Link to='/coffeehub'>Coffee Hub</Link>
              <Link to='/coffeetaste'>My Coffee Track</Link>
              <Button
                onClick={logoutUser}
                variant='outline'
                marginLeft='10px'
                colorScheme='#028AEB'
                color='#FFEFD6'
                _hover={{
                  bgColor: '#FFB82E',
                  color: '#0B0B03',
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to='/howtotaste'>How to taste</Link>
              <Link to='/coffeequiz'>Coffee Quiz</Link>
              <Link to='/coffeehistory'>Coffee History</Link>
              <Link to='signup'>
                <Button
                  bgColor='#FFB82E'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#FFEFD6',
                    color: '#0B0B03',
                  }}
                  borderColor='#0B0B03'
                >
                  Sign up
                </Button>
              </Link>
              <Button
                variant='outline'
                colorScheme='#028AEB'
                color='#FFEFD6'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                <Link to='/login'>Login</Link>
              </Button>
            </>
          )}
        </Box>
      </Flex>
    </nav>
  );
}

export default Navbar;
