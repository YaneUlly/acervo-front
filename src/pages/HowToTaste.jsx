import { Text, Flex, Box, Image, Grid, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import drinking from '../assets/drinking.png';
import cupping2 from '../assets/cupping2.png';
import wheels2 from '../assets/wheels2.png';
import cheersblack from '../assets/cheersblack.png';

function HowToTaste() {
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
        marginLeft={{ base: '35px', lg: '30px', xl: '0' }}
        marginBottom={{ base: '20px', md: '50px' }}
        marginTop={{ base: '40px', lg: '25px' }}
      >
        <Image
          src={drinking}
          width={{ base: '250px', lg: '150px' }}
          height={{ base: '210px', lg: '150px' }}
          alignSelf='center'
          marginRight={{ lg: '50px' }}
          marginBottom={{ base: '0', xl: '10px' }}
          display={{ base: 'flex', md: 'flex', lg: 'none' }}
        />

        <Flex
          flexDirection='column'
          justifyContent='left'
          marginTop={{ base: '40px' }}
          marginRight={{ md: '85px', lg: '0px' }}
          width={{ base: '80%', md: '50%' }}
        >
          <Text
            fontFamily='Gluten'
            marginTop={{ lg: '80px' }}
            marginBottom={{ base: '10px', lg: '20px' }}
            lineHeight='1em'
            fontSize={{ base: '3xl', lg: '5xl' }}
            textAlign='left'
          >
            How to{' '}
            <span style={{ color: '#028AEB', fontFamily: 'Gluten' }}>
              taste
            </span>{' '}
            coffee?
          </Text>
          <Text
            textAlign='left'
            fontSize='16px'
            width={{ base: '100%', lg: '80%' }}
            lineHeight={{ base: '1.2em', md: '1.4em' }}
            marginBottom='18px'
          >
            Welcome to our coffee tasting guide, where we uncover the secrets to
            identifying the nuances, aromas, and flavors that distinguish each
            cup. Embark with us on this delightful journey of coffee
            appreciation.
          </Text>
        </Flex>

        <Image
          src={drinking}
          width='480px'
          height='400px'
          display={{ base: 'none', md: 'none', lg: 'flex' }}
        />
      </Box>

      <Text
        marginTop={{ base: '25px', md: '20px', lg: '80px' }}
        marginLeft={{ base: '35px', md: '75px', lg: '110px', xl: '120px' }}
        width={{ lg: '90%' }}
        lineHeight='1em'
        fontSize={{ base: 'lg', lg: '3xl' }}
        textAlign='left'
        fontFamily='Gluten'
      >
        First things first!
      </Text>

      {/* FIRST TOPIC */}
      <Box
        display='flex'
        justifyContent='center'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        marginTop={{ md: '20px', lg: '0' }}
        marginBottom={{ base: '30px', md: '30px' }}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginLeft={{ base: '35px', md: '40px', xl: '10px' }}
          width={{ base: '70%', lg: '85%', xl: '80%' }}
        >
          <Box display='flex' flexDirection='row' alignItems='baseline'>
            <Text
              fontFamily='Gluten'
              bg='rgba(240, 130, 41, 0.64)' // Adicionando cor de fundo
              color='#0B0B03' // Definindo cor do texto
              borderRadius='50%' // Transformando em um círculo
              display='inline-flex' // Definindo para ser exibido como elemento inline flexível
              alignItems='center' // Alinhando o conteúdo verticalmente
              justifyContent='center' // Alinhando o conteúdo horizontalmente
              width='30px' // Definindo largura fixa
              height='30px' // Definindo altura fixa
              fontSize='lg' // Definindo tamanho da fonte
              fontWeight='bold' // Definindo peso da fonte
              marginRight={{ base: '8px', lg: '20px' }} // Adicionando margem à direita para separar do conteúdo seguinte
              marginBottom={{ base: '10px', lg: '0' }}
            >
              1.
            </Text>
            <Text
              marginTop={{ base: '10px', md: '10px', lg: '45px' }}
              marginBottom={{ base: '10px', lg: '15px' }}
              width={{ lg: '90%' }}
              lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
              fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
              textAlign='left'
              fontWeight='700'
            >
              There is a difference between Arabica and Robusta
            </Text>
          </Box>
          <Text
            marginBottom={{ base: '25px', lg: '20px' }}
            marginLeft={{ base: '25px', md: '45px', xl: '50px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1.2em', md: '1.4em', lg: '1.4em' }}
            textAlign='left'
          >
            As we saw in our Coffee History page, Arabica and Robusta coffee
            dominate the industry, comprising nearly 95% of global production,
            with Arabica favored for its nuanced flavors and lower caffeine, and
            Robusta known for its bold, bitter taste and high caffeine content.
            Arabica demands meticulous cultivation, resulting in a higher price
            point, while Robusta offers resilience and affordability.
            Ultimately, the choice between them depends on individual taste
            preferences, with Arabica offering complexity and aroma, and Robusta
            providing strength and intensity.
          </Text>
        </Flex>
      </Box>

      {/* WHEELS IMAGES */}
      <Image
        src={wheels2}
        width={{ base: '380px', md: '420px', lg: '565px', xl: '830px' }}
        marginLeft={{ base: '20px', md: '120px', lg: '274px', xl: '240px' }}
        align='center'
      />

      {/* SECOND TOPIC */}
      <Box
        display='flex'
        justifyContent='center'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        marginBottom={{ base: '30px', md: '30px' }}
        marginTop={{ base: '50px' }}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginLeft={{ base: '35px', xl: '10px' }}
          width={{ base: '70%', lg: '85%', xl: '80%' }}
        >
          <Box display='flex' flexDirection='row' alignItems='baseline'>
            <Text
              fontFamily='Gluten'
              bg='rgba(240, 130, 41, 0.64)' // Adicionando cor de fundo
              color='#0B0B03' // Definindo cor do texto
              borderRadius='50%' // Transformando em um círculo
              display='inline-flex' // Definindo para ser exibido como elemento inline flexível
              alignItems='center' // Alinhando o conteúdo verticalmente
              justifyContent='center' // Alinhando o conteúdo horizontalmente
              width='30px' // Definindo largura fixa
              height='30px' // Definindo altura fixa
              fontSize='lg' // Definindo tamanho da fonte
              fontWeight='bold' // Definindo peso da fonte
              marginRight={{ base: '8px', lg: '20px' }} // Adicionando margem à direita para separar do conteúdo seguinte
              marginBottom={{ base: '10px', lg: '0' }}
            >
              2.
            </Text>
            <Text
              marginTop={{ base: '10px', md: '10px', lg: '45px' }}
              marginBottom={{ base: '10px', lg: '15px' }}
              width={{ lg: '90%' }}
              lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
              fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
              textAlign='left'
              fontWeight='700'
            >
              Flavor Wheel and Character Wheel
            </Text>
          </Box>
          <Text
            marginBottom={{ base: '25px', lg: '20px' }}
            marginLeft={{ base: '30px', md: '50px', xl: '50px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1.2em', md: '1.4em', lg: '1.4em' }}
            textAlign='left'
          >
            The Coffee Tasters Flavor Wheel, created by the Specialty Coffee
            Association of America and World Coffee Research, is a valuable tool
            for both enthusiasts and professionals. It guides users through a
            journey of aroma and flavor exploration, aiding in the detailed
            analysis of coffee profiles. Its design encourages starting with
            general descriptors and refining them to specific attributes,
            enhancing the tasting experience and unlocking the nuances of
            different coffee varieties. For further information, we recommend
            reading the article by the Specialty Coffee Association of America.
          </Text>
          <Text
            marginBottom={{ base: '25px', lg: '20px' }}
            marginLeft={{ base: '30px', md: '45px', lg: '50px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1.2em', md: '1.4em', lg: '1.4em' }}
            textAlign='left'
          >
            Recent studies backed by an Australian government agricultural body
            have led to the creatiob of the Coffer Character wheel. This
            innovative instrument offers a comprehensive method for depicting or
            pinpointing coffee, focusing on the idea of terroir. The Coffee
            Character distinguishes itself by offering specific terms to
            describe the characteristics of coffee such as acidity, mouthfeel,
            and aftertaste, rather than flavour alone.
          </Text>
        </Flex>
      </Box>

      {/* THIRD TOPIC */}
      <Box
        display='flex'
        justifyContent='flex-start'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        marginLeft={{ base: '40px', md: '75px', lg: '105px', xl: '140px' }}
        marginBottom={{ base: '30px', md: '0' }}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginLeft={{ base: '0', xl: '10px' }}
          width={{ base: '100%', lg: '50%', xl: '60%' }}
        >
          <Box display='flex' flexDirection='row' alignItems='baseline'>
            <Text
              fontFamily='Gluten'
              bg='rgba(240, 130, 41, 0.64)' // Adicionando cor de fundo
              color='#0B0B03' // Definindo cor do texto
              borderRadius='50%' // Transformando em um círculo
              display='inline-flex' // Definindo para ser exibido como elemento inline flexível
              alignItems='center' // Alinhando o conteúdo verticalmente
              justifyContent='center' // Alinhando o conteúdo horizontalmente
              width='30px' // Definindo largura fixa
              height='30px' // Definindo altura fixa
              fontSize='lg' // Definindo tamanho da fonte
              fontWeight='bold' // Definindo peso da fonte
              marginRight={{ base: '8px', lg: '20px' }} // Adicionando margem à direita para separar do conteúdo seguinte
              marginBottom={{ base: '10px', lg: '0' }}
            >
              3.
            </Text>
            <Text
              marginTop={{ base: '10px', md: '10px', lg: '45px' }}
              marginBottom={{ base: '10px', lg: '15px' }}
              lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
              fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
              textAlign='left'
              fontWeight='700'
            >
              Coffee Cupping
            </Text>
          </Box>
          <Text
            marginBottom={{ base: '25px', lg: '20px' }}
            marginLeft={{ base: '30px', md: '40px', lg: '50px' }}
            width='70%'
            lineHeight={{ base: '1.2em', md: '1.4em', lg: '1.4em' }}
            textAlign='left'
          >
            Coffee cupping, also known as coffee tasting, is a globally
            respected practice for evaluating coffee attributes, embraced by all
            levels of the coffee supply chain. It serves as both an evaluative
            tool and a vital quality control measure, ensuring each coffee roast
            reaches its peak flavor. To learn more about coffee cupping, check
            out the article provided.
          </Text>
        </Flex>
        <Image
          src={cupping2}
          width='230px'
          height='275px'
          margintop={{ lg: '80px' }}
          marginRight={{ base: '80px', md: '120px' }}
          alignSelf='center'
        />
      </Box>

      {/* LAST TOPIC */}
      <Text
        marginTop={{ base: '40px', md: '60px', lg: '80px', xl: '120px' }}
        marginLeft={{ base: '35px', md: '65px', lg: '100px', xl: '120px' }}
        width={{ lg: '90%' }}
        lineHeight='1em'
        fontSize={{ base: 'lg', lg: '3xl' }}
        textAlign='left'
        fontFamily='Gluten'
      >
        How our{' '}
        <span style={{ color: '#028AEB', fontFamily: 'Gluten' }}>
          coffee taste
        </span>{' '}
        form works
      </Text>

      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
        }}
        marginTop='35px'
        marginBottom={{ base: '45px', lg: '50px', xl: '70px' }}
        gap={5}
        width='85%'
        marginLeft={{ base: '35px', md: '60px', lg: '95px', xl: '120px' }}
      >
        <Square
          title='1. Coffee Info'
          text='Completing the key fields in the provided form is crucial for a thorough tasting experience. These fields, often found on the coffee label or seller website, directly impact the coffees flavor profile. If uncertain about any field, a quick online search can offer clarity.'
        />
        <Square
          title='2. Coffee Recipe'
          text='After completing the necessary details, prepare your coffee using your preferred method. If new to this, find basic recipes suited to your brewing method. With your tools in hand, begin your tasting journey.'
        />
        <Square
          title='3. Coffee Taste'
          text='Utilize the online taste wheel to pinpoint flavor nuances. Remember the insights gained about the tasting process, relax, and start noting your observations. This methodical approach guarantees a comprehensive and pleasurable tasting experience.'
        />
        <Square
          title='4. General Info'
          text='After completing your tasting journey, we encourage you to share key details about the coffee. This involves mentioning the store of purchase, uploading a photo, and deciding whether to share your experience publicly or privately. Your contribution enriches our coffee community and enhances the experience for fellow enthusiasts.'
        />
      </Grid>

      {/* FINAL SECTION */}
      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent='flex-start'
        marginLeft={{ base: '35px', md: '60px', lg: '100px', xl: '120px' }}
        marginBottom={{ base: '55px', md: '20px', lg: '50px', xl: '85px' }}
        // marginTop={{ base: '40px', lg: '60px' }}
      >
        <Flex
          flexDirection='column'
          justifyContent='left'
          // marginTop={{ base: '40px' }}
          marginRight={{ md: '25px', lg: '125px', xl: '0px' }}
          width={{ base: '90%', md: '50%', lg: '45%', xl: '50%' }}
        >
          <Text
            fontFamily='Gluten'
            // marginTop={{ xl: '45px' }}
            marginBottom={{ base: '10px', lg: '20px' }}
            paddingTop={{ md: '30px', xl: '50px' }}
            lineHeight='1em'
            fontSize={{ base: 'lg', lg: '3xl' }}
            textAlign='left'
          >
            Ready to{' '}
            <span style={{ color: '#028AEB', fontFamily: 'Gluten' }}>
              start
            </span>{' '}
            your journey with us?
          </Text>
          <Text
            textAlign='left'
            fontSize='16px'
            width={{ base: '100%', xl: '80%' }}
            lineHeight={{ base: '1.2em', md: '1.4em' }}
            marginBottom='18px'
          >
            Join our vibrant coffee community, where enthusiasts gather to
            explore tasting, recipes, and more.
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
          src={cheersblack}
          width={{ md: '250px', xl: '360px' }}
          height={{ md: '220px', xl: '290px' }}
          display={{ base: 'none', md: 'flex', lg: 'flex' }}
          marginRight={{ md: '60px' }}
        />
      </Box>
    </div>
  );
}

export default HowToTaste;
