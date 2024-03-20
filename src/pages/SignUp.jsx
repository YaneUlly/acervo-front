import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup, upload } from '../api/auth.api';
import SingUpImage from '../assets/SingUpImage.png';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState();
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleImage = ({ target }) => {
    setImage(target.files[0]);
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const user = { name, email, password };

      if (image) {
        const uploadData = new FormData();
        uploadData.append('file', image);

        const response = await upload(uploadData);
        console.log(response.data);

        user.photoUrl = response.data.photoUrl;
      }

      await signup(user);

      navigate('/login');
    } catch (error) {
      console.log('Error signup', error);
      setError(error.response.data.message);
    }
  };

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent='space-around'
      alignItems='center'
      alignContent='center'
      minHeight='80vh'
    >
      <Box
        width={{ base: '100%', md: '40%' }}
        display='flex'
        flexDirection='column'
        alignItems='center'
        padding={{ base: '20px', md: '0 20px' }}
      >
        <Text fontFamily='Gluten' fontSize='5xl' marginBottom='20px'>
          {' '}
          Sign Up{' '}
        </Text>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <FormControl isRequired marginBottom='20px' width='100%'>
            <FormLabel>Name:</FormLabel>
            <Input
              type='text'
              placeholder='Name'
              borderColor='#0B0B03'
              value={name}
              onChange={e => setName(e.target.value)}
            ></Input>
            <FormErrorMessage>Name is required.</FormErrorMessage>
          </FormControl>

          <FormControl isRequired marginBottom='20px' width='100%'>
            <FormLabel>Email:</FormLabel>
            <Input
              type='email'
              placeholder='Email'
              borderColor='#0B0B03'
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Input>
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </FormControl>

          <FormControl isRequired marginBottom='20px' width='100%'>
            <FormLabel>Password:</FormLabel>
            <InputGroup>
              <Input
                type={show ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                borderColor='#0B0B03'
                onChange={e => setPassword(e.target.value)}
              ></Input>
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

          <FormLabel>Profile Photo:</FormLabel>
          <input type='file' onChange={handleImage}></input>
          <button type='submit'>Add</button>

          <Button
            type='submit'
            marginTop='5'
            marginBottom='5'
            width='100%'
            bgColor='#028AEB'
            color='#FFEFD6'
            _hover={{
              bgColor: '#0B0B03',
            }}
          >
            {' '}
            Sign up
          </Button>
        </form>

        {error && <p>{error}</p>}

        <Text fontSize='md'>Already have an account?</Text>
        <Link to={'/login'}>Login</Link>
      </Box>

      {/* Display image only for desktop  */}
      <Box
        display={{ base: 'none', md: 'block' }}
        width={{ base: '0', md: '40%' }}
      >
        <img src={SingUpImage} alt='coffe-hi' width='100%'></img>
      </Box>
    </Flex>
  );
}

export default SignUp;
