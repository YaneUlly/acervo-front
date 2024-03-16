import { Text, Flex } from '@chakra-ui/react';
import '../index.css';

function Footer() {
  return (
    <div>
      <Flex
        flexDirection={{ base: 'column' }}
        backgroundColor='#FADCAF'
        zIndex='sticky'
        bottom='0'
        height={{ md: '80px', xl: '120px' }}
        justifyContent='space-between'
        paddingTop='10px'
        paddingBottom='10px'
        paddingLeft='50px'
        paddingRight='50px'
        alignItems='center'
      >
        <Text fontSize='sm' display={{ base: 'none' }}>
          Developed by{' '}
          <a href={'https://github.com/YaneUlly'} className='git-hub-link'>
            Yane Ully
          </a>
        </Text>
        <Text
          fontFamily='Gluten'
          fontSize='2xl'
          marginBottom={{ base: '10px' }}
          marginTop={{ base: '10px' }}
        >
          acervo
        </Text>
        <Text fontSize='sm' display={{ md: 'none' }}>
          Developed by{' '}
          <a href={'https://github.com/YaneUlly'} className='git-hub-link'>
            Yane Ully
          </a>
        </Text>
        <Text fontSize='sm'>© 2024 All rights reserved</Text>
      </Flex>
    </div>
  );
}

export default Footer;
