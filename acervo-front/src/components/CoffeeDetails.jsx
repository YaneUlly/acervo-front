import { Flex, Box, Image, Text, Button } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function CoffeeDetails({ ...props }) {
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
    route,
  } = props;

  return (
    <div>
      <Breadcrumb
        marginLeft='5px'
        fontSize='14px'
        marginTop={{ base: '3vh', md: '6vh', lg: '6vh' }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/coffeetaste'>
            Coffee Taste Track
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/coffeetaste/:coffeeId'>
            Coffee Details
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text
        fontFamily='Gluten'
        marginTop={{ base: '2vh', md: '2vh', lg: '3vh' }}
        marginBottom={{ lg: '3vh' }}
        marginLeft='5px'
        width={{ lg: '80%' }}
        lineHeight={{ base: '1em', md: '1em', lg: '1em' }}
        fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
        textAlign='left'
      >
        Coffee Details
      </Text>

      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        marginTop={{ base: '4vh', md: '4vh', lg: '4vh', xl: '18vh' }}
        width={{ base: '90%', lg: '100%' }}
        alignItems='flex-start'
      >
        {/* IMAGE */}
        <Box width={{ base: '90%', lg: '50%' }}>
          <Image
            src={image}
            boxSize={{ base: '70vw', md: '50vw', lg: '40vw' }}
            borderRadius='5px'
            objectFit='contain'
          ></Image>
        </Box>

        {/* COFFEE DETAILS */}
        <Box
          align='left'
          width={{ base: '90%', lg: '50%' }}
          marginLeft={{ base: '0', lg: '2vw' }}
          marginTop={{ base: '3vh', lg: '0vh' }}
        >
          <Text
            fontSize='4xl'
            marginBottom={{ base: '15px', lg: '30px' }}
            fontWeight='600'
          >
            {coffeeName}
          </Text>
          <Text fontWeight='600' color='#F08229' fontSize='2xl'>
            Coffee Infos
          </Text>
          <Text>
            <strong>Region:</strong> {region}
          </Text>
          <Text>
            <strong>Country:</strong> {country}
          </Text>
          <Text>
            <strong>Varieties:</strong> {varieties}
          </Text>
          <Text>
            <strong>Altitude:</strong> {altitude}
          </Text>
          <Text>
            <strong>Roast:</strong> {roast}
          </Text>
          <Text>
            <strong>Type:</strong> {caffeine}
          </Text>
          <Text>
            <strong>Process:</strong> {process}
          </Text>

          <Text
            marginTop='15px'
            fontWeight='600'
            color='#F08229'
            fontSize='2xl'
          >
            Coffee Sensorials
          </Text>
          <Text>
            <strong>Aromas:</strong> {aromas}
          </Text>
          <Text>
            <strong>Flavors:</strong> {flavor}
          </Text>
          <Text>
            <strong>Body:</strong> {body}
          </Text>

          <Text
            marginTop='15px'
            fontWeight='600'
            color='#F08229'
            fontSize='2xl'
          >
            Coffee Recipe
          </Text>
          <Text>
            <strong>Method:</strong> {method}
          </Text>
          <Text>
            <strong>Recipe:</strong> {recipe}
          </Text>
          <Text>
            <strong>Description:</strong> {description}
          </Text>

          <Text marginTop='15px'>Share with the community?</Text>
          <Text>{share ? 'Yes' : 'No'}</Text>
          <Flex justifyContent='left' gap='10px' marginTop='30px'>
            {route === 'CoffeeTaste' && (
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
            )}
            <a href={storeUrl}>
              <Button
                bgColor='#FFB82E'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
                borderColor='#0B0B03'
                border='1px'
              >
                Buy Coffee
              </Button>
            </a>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default CoffeeDetails;
