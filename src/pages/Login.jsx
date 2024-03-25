import { useState, useContext } from 'react';
import { login } from '../api/auth.api';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightAddon,
  textDecoration,
} from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import LoginImageTest from '../assets/LoginImageTest.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const user = { email, password };

    try {
      const response = await login(user);
      storeToken(response.data.authToken);
      authenticateUser();
      navigate('/coffeetaste');
    } catch (error) {
      console.log('Error login', error);
      setError(error.response.data.message);
    }
  };

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      minHeight='80vh'
    >
      {/* Display image only for desktop */}
      <Box
        display={{ base: 'none', xl: 'block' }}
        width={{ base: '0', md: '40%' }}
      >
        <img src={LoginImageTest} alt='dog-drinking-coffee' width='80%' />
      </Box>
      <Box
        width={{ base: '100%', md: '40%' }}
        display='flex'
        flexDirection='column'
        alignItems='center'
        padding={{ base: '20px', md: '0 20px' }}
      >
        <Text fontFamily='Gluten' fontSize='5xl' marginBottom='20px'>
          Login
        </Text>

        <form onSubmit={handleSubmit} style={{ width: '80%' }}>
          <FormControl isRequired marginBottom='20px' width='100%'>
            <FormLabel>Email:</FormLabel>
            <Input
              type='email'
              placeholder='Email'
              borderColor='#0B0B03'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl>

          <FormControl isRequired marginBottom='20px' width='100%'>
            <FormLabel>Password:</FormLabel>
            <InputGroup>
              <Input
                size='md'
                type={show ? 'text' : 'password'}
                placeholder='Password'
                borderColor='#0B0B03'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <InputRightAddon width='4.5rem' bgColor='#0B0B03'>
                <Button
                  size='sm'
                  bgColor='#0B0B03'
                  color='#FFEFD6'
                  onClick={handleClick}
                  _hover={{
                    bgColor: '#0B0B03',
                  }}
                >
                  {' '}
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightAddon>
            </InputGroup>
            <FormErrorMessage>Password is required.</FormErrorMessage>
          </FormControl>

          <Button
            marginTop='10px'
            marginBottom='15px'
            width='100%'
            variant='outline'
            colorScheme='#028AEB'
            bgColor='#FFB82E'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
            type='submit'
          >
            Login
          </Button>
        </form>

        {error && <p>{error}</p>}

        <Text fontSize='md' marginTop='25px'>
          Do not have an account?
        </Text>
        <Link to={'/signup'} style={{ textDecoration: 'underline' }}>
          Sign up
        </Link>
      </Box>
    </Flex>
  );
}

export default Login;
