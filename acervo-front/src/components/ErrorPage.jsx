import { Text, Flex, Box, Image, Button } from '@chakra-ui/react';
import errorpage from '../assets/errorpage.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ErrorPage() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
    setRedirect(true);
  };

  // Se o estado de redirecionamento for verdadeiro, redirecione o usuário
  if (redirect) {
    navigate('/'); // Redirecionamento para a página inicial
    // Você pode alterar o caminho conforme necessário
  }

  return (
    <div>
      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        justifyContent='center'
        marginBottom={{ base: '20px', md: '50px', lg: '50px' }}
        marginTop={{ base: '25px', lg: '60px' }}
      >
        <Flex
          flexDirection='column'
          justifyContent='left'
          marginLeft={{ base: '0', lg: '10px' }}
          marginRight={{ base: '0', lg: '30px' }}
          width={{ base: '100%', lg: '40%' }}
        >
          <Text
            fontFamily='Gluten'
            marginTop={{ base: '20px', md: '20px', lg: '100px' }}
            marginBottom={{ lg: '20px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
            textAlign='left'
          >
            418 - I am a tea pot!
          </Text>
          <Text
            textAlign='left'
            fontSize='16px'
            width={{ base: '100%', md: '100%', lg: '90%' }}
          >
            Sorry, but I am a teapot and I refuse to brew coffee!
          </Text>
          <Text marginBottom='18px'>
            It seems like you have navigated to uncharted territory. Click the
            button below to return to the world of coffee!
          </Text>
          <Button
            onClick={handleRedirect}
            width={{ lg: '30%' }}
            bgColor='#FFB82E'
            border='1px'
            borderColor='#0B0B03'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            Return acervo
          </Button>
        </Flex>
        <Image
          src={errorpage}
          width='390px'
          height='420px'
          display={{ base: 'none', md: 'none', lg: 'flex' }}
        />
      </Box>
    </div>
  );
}

export default ErrorPage;
