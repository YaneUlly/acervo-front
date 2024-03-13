import { Link } from 'react-router-dom';
import {
  Card,
  Image,
  Heading,
  CardHeader,
  CardFooter,
  CardBody,
  Text,
  Stack,
  Flex,
  Box,
  Avatar,
  Button,
} from '@chakra-ui/react';

function CoffeeCard({
  coffeeId,
  coffeeName,
  coffeeImgUrl,
  region,
  varieties,
  process,
  method,
  storeUrl,
  createdBy,
  share,
  route,
}) {
  const infoLink =
    route === 'CoffeeHub'
      ? `/coffeehub/${coffeeId}`
      : `/coffeetaste/${coffeeId}`;

  // console.log('ÍnfoLink', infoLink);

  return (
    <div>
      <Card
        width={{ base: '300px', md: '300px', lg: '500px' }}
        variant='outline'
        borderColor='#0B0B03'
        borderRadius='2px'
        _hover={{
          cursor: 'pointer',
          boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
        }}
      >
        <CardHeader bgColor='#FADCAF'>
          <Flex>
            {createdBy && (
              <div>
                <Flex flex='1' alignItems='center' flexWrap='wrap'>
                  <Avatar src={createdBy.photoUrl} size='md' />
                  <Box>
                    <Heading fontSize='lg' marginLeft='5px' fontWeight='600'>
                      {createdBy.name}
                    </Heading>
                  </Box>
                </Flex>
              </div>
            )}
          </Flex>
        </CardHeader>

        <Stack marginTop={{ base: '5px', sm: '0' }} flex={1} gap={0}>
          <CardBody
            align='left'
            padding='0px'
            bgColor='#FADCAF'
            paddingBottom='25px'
          >
            <Flex flexDirection='row'>
              <Image
                display={{ base: 'none', md: 'none', lg: 'flex' }}
                width='240px'
                height='210px'
                paddingLeft='5px'
                borderRadius='5px'
                objectFit='contain'
                src={coffeeImgUrl}
                alt='Coffee Bag'
              />
              <Flex
                flexDirection='column'
                marginRight='20px'
                marginLeft={{ base: '10px', md: '10px', lg: '0px' }}
              >
                <Heading
                  size='md'
                  marginBottom='15px'
                  fontWeight='600'
                  marginTop={{ base: '0px', md: '0px', lg: '10px' }}
                >
                  {coffeeName}
                </Heading>

                <Text>
                  <strong>Region:</strong> {region}
                </Text>
                <Text>
                  <strong>Varieties:</strong> {varieties}
                </Text>
                <Text>
                  <strong>Process:</strong> {process}
                </Text>
                <Text>
                  <strong>Method:</strong> {method}
                </Text>

                {route === 'CoffeeTaste' && (
                  <Text>
                    <strong>Shared:</strong> {share ? 'Yes' : 'No'}
                  </Text>
                )}
              </Flex>
            </Flex>
          </CardBody>

          <CardFooter
            gap={{ base: '2', md: '10', lg: '10' }}
            flexWrap='wrap'
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent='center'
            bgColor='#ffefd6'
          >
            {route === 'CoffeeTaste' && (
              <Button
                variant='outline'
                width={{ base: '100%', md: '40%' }}
                color='#0B0B03'
                borderColor='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                <Link to={`/coffeetaste/edit/${coffeeId}`}>Edit</Link>
              </Button>
            )}

            <Button
              bgColor='#FFB82E'
              color='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
              borderColor='#0B0B03'
              border='1px'
              width={{ base: '100%', md: '40%' }}
            >
              <Link to={infoLink}>More Info</Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default CoffeeCard;
