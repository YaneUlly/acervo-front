import { Text, Flex, Button, Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import cheers from '../assets/cheers.png';
import methods from '../assets/methods.png';
import readingbook from '../assets/readingbook.png';
import coffeeplant from '../assets/coffeeplant.png';

function LandingPage() {
  return (
    <div>
      {/* HEADING */}
      <Flex flexDirection='column' marginBottom={{ base: '90px' }}>
        <Text
          fontSize={{ base: '3xl', md: '3xl', lg: '7xl' }}
          marginTop={{ base: '90px', md: '80px', lg: '140px' }}
          height={{ base: '40px', lg: '90px' }}
          align='center'
          fontFamily='Gluten'
        >
          acervo
        </Text>
        <Text align='center'>We talk about coffee</Text>
      </Flex>
      <Image
        src={coffeeplant}
        width={{ base: '100px', lg: '200px', xl: '300px' }}
        height={{ base: '100px', lg: '200px', xl: '300px' }}
        position='absolute'
        top={{ base: '190px', md: '135px', lg: '135px', xl: '210px' }}
        left={{ base: '260px', md: '445px', lg: '700px', xl: '810px' }}
      />

      {/* FIRST SECTION */}
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        marginLeft={{ base: '0', lg: '85px', xl: '100px' }}
        marginTop={{ base: '100px', md: '10px', lg: '120px', xl: '240px' }}
      >
        <Image
          src={cheers}
          width={{ base: '150px', md: '200px', lg: '260px' }}
          height={{ base: '95px', md: '150px', lg: '150px' }}
          marginLeft={{ base: '0', md: '80px', lg: '80px', xl: '100px' }}
          marginBottom={{ base: '10px' }}
          alignSelf='center'
        />

        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginLeft={{ base: '0', md: '10px', xl: '10px' }}
          width={{ base: '100%', md: '50%', lg: '50%', xl: '50%' }}
        >
          <Text
            marginBottom={{ base: '10px', lg: '15px' }}
            fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
            textAlign='left'
            fontWeight='700'
          >
            About acervo
          </Text>
          <Text
            marginBottom={{ base: '25px', lg: '20px' }}
            width={{ lg: '70%' }}
            lineHeight={{ base: '1.2em', md: '1.4em', lg: '1.4em' }}
            textAlign='left'
          >
            Acervo is your portal to a vibrant coffee community, where
            enthusiasts gather to explore tasting, recipes, and more. Join us to
            share your knowledge, compare recipes, and track your coffee
            journey!
          </Text>
          <Box align='left' marginBottom={{ base: '25px' }}>
            <Link to={'/signup'}>
              <Button
                width={{ lg: '20%' }}
                variant='outline'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                Join us
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>

      {/* SECOND SECTION */}
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        marginLeft={{ base: '0', lg: '85px', xl: '100px' }}
        marginBottom={{ base: '30px', md: '0' }}
        marginTop={{ base: '20px', md: '50px', lg: '120px' }}
      >
        <Image
          src={methods}
          width='175px'
          height='150px'
          marginRight={{ lg: '215px' }}
          marginTop={{ base: '20px' }}
          alignSelf='center'
          display={{ base: 'flex', md: 'none', lg: 'none' }}
        />

        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginLeft={{ base: '0', xl: '10px' }}
          width={{ base: '100%', md: '50%', lg: '40%', xl: '50%' }}
        >
          <Text
            marginBottom={{ base: '10px', lg: '15px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize='lg'
            textAlign='left'
            fontWeight='700'
          >
            How to taste?
          </Text>
          <Text
            marginBottom={{ base: '15px', lg: '20px' }}
            width={{ xl: '70%' }}
            lineHeight={{ base: '1.2em', md: '1.4em', lg: '1.4em' }}
            textAlign='left'
          >
            New to coffee tasting? Do not fret! Our dedicated page offers simple
            explanations and recommended articles to kickstart your journey into
            the world of coffee tasting.
          </Text>
          <Box align='left' marginBottom={{ base: '25px' }}>
            <Link to={'/howtotaste'}>
              <Button
                variant='outline'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                Learn more
              </Button>
            </Link>
          </Box>
        </Flex>

        <Image
          src={methods}
          width={{ md: '275px', lg: '375px' }}
          height={{ md: '190px', lg: '250px' }}
          marginRight={{ lg: '190px', xl: '215px' }}
          alignSelf='center'
          display={{ base: 'none', md: 'flex', lg: 'flex' }}
        />
      </Box>

      {/* THIRD SECTION */}
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        marginTop={{ base: '25px', md: '40px', lg: '120px' }}
      >
        <Image
          src={readingbook}
          width={{ base: '110px', md: '140px', lg: '190px' }}
          height={{ base: '130px', md: '190px', lg: '230px' }}
          marginLeft={{ md: '100px', lg: '160px', xl: '260px' }}
          margintop={{ lg: '80px' }}
          alignSelf='center'
        />
        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginTop={{ base: '30px' }}
          marginLeft={{ base: '0', lg: '10px' }}
          width={{ base: '100%', md: '50%', lg: '50%' }}
        >
          <Text
            marginBottom={{ base: '10px', lg: '15px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
            textAlign='left'
            fontWeight='700'
          >
            Do not know from where to start?
          </Text>
          <Text
            marginBottom={{ base: '10px', lg: '20px' }}
            width={{ lg: '70%' }}
            lineHeight={{ base: '1.2em', md: '1.4em', lg: '1.4em' }}
            textAlign='left'
          >
            Start your coffee adventure with our Coffee Quiz! Unsure which
            coffee to try? Let us guide you! Answer a few quick questions, and
            we will suggest a community-recommended coffee just for you. Get
            started - it is quick and easy, taking only 1 minute!
          </Text>
          <Box align='left' marginBottom={{ base: '25px' }}>
            <Link to={'/coffeequiz'}>
              <Button
                variant='outline'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                Take quiz
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default LandingPage;
