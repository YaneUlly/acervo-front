import { Text, Flex, Box, Image, Button } from '@chakra-ui/react';
import drinking from '../assets/drinking.png';
import beans from '../assets/beans.png';
import flavorwheel from '../assets/flavorwheel.png';
import cupping2 from '../assets/cupping2.png';

function HowToTaste() {
  return (
    <div>
      {/* HEADING */}
      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        justifyContent='center'
        marginBottom={{ base: '20px', md: '50px', lg: '50px' }}
        marginTop={{ base: '25px', lg: '60px' }}
      >
        <Image
          src={drinking}
          width='150px'
          height='150px'
          alignSelf={{ base: 'center', md: 'center', lg: 'center' }}
          marginLeft={{ base: '0' }}
          marginRight={{ xl: '50px' }}
          marginBottom='10px'
          display={{ base: 'flex', md: 'flex', lg: 'none' }}
        />

        <Flex
          flexDirection='column'
          justifyContent='left'
          marginLeft={{ base: '0', lg: '0px' }}
          width={{ base: '100%', lg: '50%' }}
        >
          <Text
            fontFamily='Gluten'
            marginTop={{ base: '20px', md: '20px', lg: '45px' }}
            marginBottom={{ lg: '20px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
            textAlign='left'
          >
            How to taste coffee?
          </Text>
          <Text
            textAlign='left'
            fontSize='16px'
            width={{ base: '100%', md: '100%', lg: '90%' }}
            lineHeight={{ base: '1.2em', md: '1m', lg: '1em' }}
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
          width='390px'
          height='320px'
          display={{ base: 'none', md: 'none', lg: 'flex' }}
        />
      </Box>

      {/* FIRST TOPIC */}
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
      >
        <Image
          src={beans}
          width={{ base: '250px', lg: '320px' }}
          height={{ base: '190px', lg: '200px' }}
          marginLeft={{ base: '0', lg: '80px', xl: '150px' }}
          alignSelf='center'
        />
        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginLeft={{ base: '0', xl: '10px' }}
          width={{ base: '100%', lg: '50%', xl: '50%' }}
        >
          <Text
            marginTop={{ base: '10px', md: '10px', lg: '45px' }}
            marginBottom={{ base: '10px', lg: '15px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
            textAlign='left'
            fontWeight='700'
          >
            Difference between an arabica and robusta coffee
          </Text>
          <Text
            marginBottom={{ base: '25px', lg: '20px' }}
            width={{ lg: '70%' }}
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

      {/* SECOND TOPIC */}
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        marginLeft={{ base: '0', lg: '85px', xl: '100px' }}
        marginBottom={{ base: '30px', md: '0' }}
      >
        <Image
          src={flavorwheel}
          width='350px'
          height='300px'
          marginRight={{ lg: '215px' }}
          marginTop={{ base: '20px' }}
          alignSelf='center'
          display={{ base: 'flex', md: 'none', lg: 'none' }}
        />

        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginLeft={{ base: '0', xl: '10px' }}
          width={{ base: '100%', lg: '40%', xl: '50%' }}
        >
          <Text
            marginTop={{ base: '40px', md: '20px', lg: '120px' }}
            marginBottom={{ base: '10px', lg: '15px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize='lg'
            textAlign='left'
            fontWeight='700'
          >
            Flavor Wheel
          </Text>
          <Text
            marginBottom={{ base: '15px', lg: '20px' }}
            width={{ xl: '70%' }}
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

          <Box align='left' marginBottom={{ base: '25px' }}>
            <a
              href={`https://sca.coffee/sca-news/how-to-use-the-flavor-wheel-in-eight-steps#:~:text='Flavor' is defined as a,that only can be smelled`}
            >
              <Button
                variant='outline'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                Read more
              </Button>
            </a>
          </Box>
        </Flex>

        <Image
          src={flavorwheel}
          width='350px'
          height='300px'
          marginRight={{ lg: '190px', xl: '215px' }}
          alignSelf='center'
          display={{ base: 'none', md: 'none', lg: 'flex' }}
        />
      </Box>

      {/* THIRD TOPIC */}
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
      >
        <Image
          src={cupping2}
          width='190px'
          height='230px'
          marginLeft={{ lg: '160px', xl: '260px' }}
          margintop={{ lg: '80px' }}
          alignSelf='center'
        />
        <Flex
          flexDirection='column'
          justifyContent='flex-end'
          marginLeft={{ base: '0', lg: '10px' }}
          width={{ base: '100%', lg: '50%' }}
        >
          <Text
            marginTop={{ base: '25px', md: '20px', lg: '120px' }}
            marginBottom={{ base: '10px', lg: '15px' }}
            width={{ lg: '90%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
            textAlign='left'
            fontWeight='700'
          >
            Coffee Cupping
          </Text>
          <Text
            marginBottom={{ base: '10px', lg: '20px' }}
            width={{ lg: '70%' }}
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

          <Box align='left' marginBottom={{ base: '25px' }}>
            <a
              href={`https://methodicalcoffee.com/blogs/coffee-culture/coffee-cupping-a-step-by-step-guide`}
            >
              <Button
                variant='outline'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                Read more
              </Button>
            </a>
          </Box>
        </Flex>
      </Box>

      {/* LAST TOPIC */}
      <Box
        display='flex'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'column', lg: 'column' }}
        marginLeft={{ base: '0', lg: '90px', xl: '150px' }}
        width={{ base: '100%', lg: '80%' }}
      >
        <Text
          marginTop={{ base: '40px', md: '20px', lg: '80px', xl: '120px' }}
          marginBottom={{ base: '20px', lg: '20px' }}
          width={{ lg: '90%' }}
          lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
          fontSize={{ base: 'lg', md: 'lg', lg: 'lg' }}
          textAlign='left'
          fontWeight='700'
        >
          How to fill the coffee taste track form
        </Text>

        <Box
          textAlign='left'
          bgColor='rgba(161, 84, 30, 0.3)'
          borderRadius='5px'
        >
          <Text fontWeight='700' marginTop='10px' marginLeft='20px'>
            1. Coffee Info Fields
          </Text>
          <Text
            marginTop='5px'
            marginLeft='20px'
            marginBottom='20px'
            width='90%'
          >
            Completing the key fields in the provided form is crucial for a
            thorough tasting experience. These fields, often found on the coffee
            label or seller website, directly impact the coffees flavor profile.
            If uncertain about any field, a quick online search can offer
            clarity.
          </Text>
        </Box>

        <Box
          textAlign='left'
          bgColor='rgba(240, 130, 41, 0.64)'
          borderRadius='5px'
          marginTop='22px'
        >
          <Text fontWeight='700' marginTop='10px' marginLeft='20px'>
            2. Coffee Recipe
          </Text>
          <Text
            marginTop='5px'
            marginLeft='20px'
            marginBottom='20px'
            width='90%'
          >
            After completing the necessary details, prepare your coffee using
            your preferred method. If new to this, find basic recipes suited to
            your brewing method. With your tools in hand, begin your tasting
            journey.
          </Text>
        </Box>

        <Box
          textAlign='left'
          bgColor='rgba(2, 138, 235, 0.64)'
          borderRadius='5px'
          marginTop='22px'
        >
          <Text fontWeight='700' marginTop='10px' marginLeft='20px'>
            3. Coffee Tasty
          </Text>
          <Text
            marginTop='5px'
            marginLeft='20px'
            marginBottom='20px'
            width='90%'
          >
            Utilize the online taste wheel to pinpoint flavor nuances. Remember
            the insights gained about the tasting process, relax, and start
            noting your observations. This methodical approach guarantees a
            comprehensive and pleasurable tasting experience.
          </Text>
        </Box>

        <Box
          textAlign='left'
          bgColor='rgba(255, 184, 46, 1)'
          borderRadius='5px'
          marginTop='22px'
        >
          <Text fontWeight='700' marginTop='10px' marginLeft='20px'>
            4. General Info
          </Text>
          <Text
            marginTop='5px'
            marginLeft='20px'
            marginBottom='20px'
            width='90%'
          >
            After completing your tasting journey, we encourage you to share key
            details about the coffee. This involves mentioning the store of
            purchase, uploading a photo, and deciding whether to share your
            experience publicly or privately. Your contribution enriches our
            coffee community and enhances the experience for fellow enthusiasts.
          </Text>
        </Box>
      </Box>
    </div>
  );
}

export default HowToTaste;
