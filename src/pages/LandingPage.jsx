import { Text, Flex, Button, Box, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import plantcoffee from '../assets/plantcoffee.png';

function LandingPage() {
  const Square = ({ title, text }) => {
    return (
      <Box
        bg='rgba(240, 130, 41, 0.64)'
        p={4}
        color='#0B0B03'
        borderRadius='5px'
      >
        <Text fontSize='lg' fontWeight='bold'>
          {title}
        </Text>
        <Text mt={2}>{text}</Text>
      </Box>
    );
  };

  return (
    <div>
      {/* HEADING */}
      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent='center'
        marginLeft={{ base: '35px', lg: '0px' }}
        marginBottom={{ base: '20px', md: '50px' }}
        marginTop={{ base: '40px', lg: '60px' }}
      >
        <Image
          src={plantcoffee}
          display={{ base: 'flex', md: 'none' }}
          alignSelf='flex-start'
          width={{ base: '305px' }}
          height={{ base: '230px' }}
        />
        <Flex
          flexDirection='column'
          justifyContent='left'
          marginTop={{ base: '40px' }}
          marginRight={{ md: '85px', xl: '0px' }}
          width={{ base: '80%', md: '50%', lg: '50%' }}
        >
          <Text
            fontFamily='Gluten'
            marginTop={{ xl: '45px' }}
            paddingTop={{ md: '30px', xl: '50px' }}
            marginBottom={{ base: '10px', lg: '20px' }}
            lineHeight='1em'
            fontSize={{ base: '3xl', lg: '5xl' }}
            textAlign='left'
          >
            We talk about{' '}
            <span style={{ color: '#028AEB', fontFamily: 'Gluten' }}>
              coffee
            </span>
          </Text>
          <Text
            textAlign='left'
            fontSize='16px'
            width={{ base: '100%', xl: '80%' }}
            lineHeight={{ base: '1.2em', md: '1.4em' }}
            marginBottom='18px'
          >
            Acervo is your portal to a vibrant coffee community, where
            enthusiasts gather to explore tasting, recipes, and more. Join us to
            share your knowledge, compare recipes, and track your coffee
            journey!
          </Text>
          <Link to={'/signup'}>
            <Button
              width={{ base: '100%', md: '50%', xl: '20%' }}
              variant='outline'
              colorScheme='#028AEB'
              bgColor='#FFB82E'
              borderColor='#0B0B03'
              color='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
            >
              Join us
            </Button>
          </Link>
        </Flex>
        <Image
          src={plantcoffee}
          display={{ base: 'none', md: 'flex' }}
          width={{ md: '350px', xl: '530px' }}
          height={{ md: '270px', xl: '380px' }}
        />
      </Box>

      {/* FIRST SECTION */}
      <Text
        marginTop={{ base: '40px', md: '20px', lg: '80px', xl: '120px' }}
        marginBottom='20px'
        marginLeft={{ base: '35px', lg: '70px', xl: '95px' }}
        width={{ lg: '90%' }}
        lineHeight='1em'
        fontSize={{ base: 'lg', lg: '3xl' }}
        textAlign='left'
        fontFamily='Gluten'
      >
        What you can{' '}
        <span style={{ color: '#028AEB', fontFamily: 'Gluten' }}>find</span> in
        our community...
      </Text>

      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
        }}
        marginTop='35px'
        marginBottom={{ base: '65px', lg: '130px' }}
        gap={5}
        width='85%'
        marginLeft={{ base: '35px', lg: '70px', xl: '95px' }}
      >
        <Square
          title='Coffee History'
          text='Start by discovering more about the coffee species around the world and have a solid understand about coffee flavors and production.'
        />
        <Square
          title='Improve your tasting skills'
          text=' New to coffee tasting? Do not fret! Our dedicated page offers simple
            explanations and recommended articles to kickstart your journey into
            the world of coffee tasting.'
        />
        <Square
          title='Help choosing a coffee'
          text='Unsure which
            coffee to try? Let us guide you! Take our coffee quiz, answer a few quick questions, and
            we will suggest a community-recommended coffee just for you. Get
            started - it is quick and easy, taking only 1 minute!'
        />
        <Square
          title='Supportive Community'
          text='Discover a welcoming community where you can share knowledge, explore new recipes, enhance your tasting skills, uncover unique coffee blends, and discover innovative brewing techniques. '
        />
      </Grid>
    </div>
  );
}

export default LandingPage;
