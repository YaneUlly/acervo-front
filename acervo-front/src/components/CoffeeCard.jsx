import { Link } from 'react-router-dom';
import {
  Card,
  Image,
  Heading,
  CardFooter,
  CardBody,
  Text,
  Stack,
  Flex,
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
}) {
  return (
    <div>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        width='600px'
        borderColor='#0B0B03'
      >
        <Flex align='center'>
          <Image
            width='300px'
            height='400px'
            margin='10px'
            borderRadius='10px'
            objectFit='cover'
            src={coffeeImgUrl}
            alt='Coffee Bag'
          />
        </Flex>

        <Stack
          marginTop={{ base: '15px', sm: '0' }}
          flex={1}
          paddingLeft='5px'
          paddingTop='10px'
        >
          <CardBody align='left' marginTop='10px' padding='0px'>
            <Heading size='lg'>{coffeeName}</Heading>

            <Text py='2'>{region}</Text>

            <Text py='2'>Varieties: {varieties}</Text>
            <Text py='2'>Process: {process}</Text>
            <Text py='2'>Method used: {method}</Text>
            <Text py='2'>Shared: {share ? 'Yes' : 'No'}</Text>
            <Text>Created By:</Text>
            {createdBy && (
              <Flex
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                width='160px'
              >
                <Avatar src={createdBy.photoUrl} size='md' />
                <Text fontSize='lg' marginLeft='10px'>
                  {createdBy.name}
                </Text>
              </Flex>
            )}
          </CardBody>

          <CardFooter
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'
            paddingLeft='0px'
            width='250px'
          >
            <Button variant='solid' colorScheme='blue' marginLeft='5px'>
              <Link to={storeUrl}>Buy Coffee</Link>
            </Button>
            <Button variant='outline' borderColor='#0B0B03'>
              <Link to={`/coffeetaste/${coffeeId}`}>More Info</Link>
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
}

export default CoffeeCard;
