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
  Divider,
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
        width='500px'
        variant='outline'
        borderColor='#0B0B03'
        borderRadius='2px'
        bgColor='#ffefd6'
        _hover={{
          bgColor: '#FFB82E',
          cursor: 'pointer',
        }}
      >
        <CardHeader>
          <Flex spacing='4'>
            {createdBy && (
              <div>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar src={createdBy.photoUrl} size='md' />
                  <Box>
                    <Heading fontSize='lg' marginLeft='4px'>
                      {createdBy.name}
                    </Heading>
                  </Box>
                </Flex>
              </div>
            )}
          </Flex>
        </CardHeader>

        <Stack marginTop={{ base: '15px', sm: '0' }} flex={1} paddingLeft='5px'>
          <CardBody align='left' padding='0px'>
            <Flex flexDirection='row'>
              <Image
                width='240px'
                height='210px'
                marginLeft='5px'
                borderRadius='5px'
                objectFit='contain'
                src={coffeeImgUrl}
                alt='Coffee Bag'
              />
              <Flex flexDirection='column' marginRight='20px'>
                <Heading size='md' marginBottom='15px' marginTop='10px'>
                  {coffeeName}
                </Heading>

                <Text>Region: {region}</Text>
                <Text>Varieties: {varieties}</Text>
                <Text>Process: {process}</Text>
                <Text>Method used: {method}</Text>
                <Text>Shared: {share ? 'Yes' : 'No'}</Text>
              </Flex>
            </Flex>
          </CardBody>

          <Divider paddingTop='10px' borderColor='#0B0B03' />

          <CardFooter gap='10' flexWrap='wrap' justifyContent='center'>
            {route === 'CoffeeTaste' && (
              <Button
                variant='outline'
                width='40%'
                colorScheme='#028AEB'
                color='#0B0B03'
                _hover={{
                  bgColor: '#0B0B03',
                  color: '#FFEFD6',
                }}
              >
                <Link to={`/coffeetaste/edit/${coffeeId}`}>Edit</Link>
              </Button>
            )}
            <Button
              bgColor='#028AEB'
              color='#FFEFD6'
              _hover={{
                bgColor: '#0B0B03',
              }}
              borderColor='#028AEB'
              width='40%'
            >
              {route === 'CoffeeHub' &&
                console.log('Rendering link for CoffeeHub')}
              {console.log('Link to:', infoLink)}
              <Link to={infoLink}>More Info</Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default CoffeeCard;
