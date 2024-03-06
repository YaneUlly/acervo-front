import { Flex, Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function CoffeeDetails(props) {
  const {
    coffeeId,
    coffeeName,
    region,
    country,
    roast,
    caffeine,
    method,
    varieties,
    altitude,
    process,
    aromas,
    flavor,
    body,
    recipe,
    description,
    share,
    storeUrl,
    image,
  } = props;

  return (
    <Flex flexDirection='column' marginTop='40px'>
      <Text fontSize='4xl' marginBottom='40px'>
        {coffeeName}
      </Text>

      <Flex>
        <Box>
          <Image
            src={image}
            boxSize='500px'
            borderRadius='5px'
            objectFit='contain'
          ></Image>
        </Box>

        <Box align='left' width='500px' marginLeft='20px'>
          <Text>Coffee Infos</Text>
          <Text>Region: {region}</Text>
          <Text>Country: {country}</Text>
          <Text>Varieties: {varieties}</Text>
          <Text>Altitude: {altitude}</Text>
          <Text>Roast: {roast}</Text>
          <Text>Type: {caffeine}</Text>
          <Text>Process: {process}</Text>

          <Text marginTop='15px'>Coffee Sensorials</Text>
          <Text>Aromas: {aromas}</Text>
          <Text>Flavor: {flavor}</Text>
          <Text>Body: {body}</Text>

          <Text marginTop='15px'>Coffee Recipe</Text>
          <Text>Method: {method}</Text>
          <Text>Recipe: {recipe}</Text>
          <Text>Description: {description}</Text>

          <Text marginTop='15px'>Share with the community?</Text>
          <Text>Share: {share ? 'Yes' : 'No'}</Text>
        </Box>
      </Flex>

      <Flex justifyContent='center' gap='10px' marginTop='30px'>
        <Link to={`/coffeetaste/edit/${coffeeId}`}>
          <Button
            variant='outline'
            colorScheme='#028AEB'
            color='#0B0B03'
            _hover={{
              bgColor: '#0B0B03',
              color: '#FFEFD6',
            }}
          >
            Edit
          </Button>
        </Link>
        <Link src={storeUrl}>
          <Button
            bgColor='#028AEB'
            color='#FFEFD6'
            _hover={{
              bgColor: '#0B0B03',
            }}
            borderColor='#028AEB'
          >
            Buy Coffee
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default CoffeeDetails;
