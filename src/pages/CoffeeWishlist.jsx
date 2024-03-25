import { useWishlist } from '../context/wishlist.context';
import {
  Text,
  Flex,
  Button,
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import emptycoffee from '../assets/emptycoffee.png';
import methods from '../assets/methods.png';
import CoffeeCard from '../components/CoffeeCard';

function CoffeeWishlist() {
  const wishlist = useWishlist();
  const [search, setSearch] = useState('');

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      {wishlist.length === 0 ? (
        <Box
          display='flex'
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent='center'
          marginLeft={{ base: '35px', md: '15px', lg: '0px' }}
          marginTop={{ base: '40px', lg: '80px' }}
        >
          <Image
            src={emptycoffee}
            display={{ base: 'flex', md: 'none' }}
            alignSelf='center'
            width={{ base: '295px' }}
            height={{ base: '230px' }}
            marginRight='35px'
          />
          <Flex
            flexDirection='column'
            justifyContent='left'
            marginTop={{ base: '40px' }}
            width={{ base: '80%', md: '50%' }}
          >
            <Text
              fontFamily='Gluten'
              marginTop={{ xl: '35px' }}
              paddingTop={{ md: '30px', xl: '50px' }}
              marginBottom={{ base: '10px', lg: '20px' }}
              lineHeight='1em'
              fontSize={{ base: '3xl', lg: '5xl' }}
              textAlign='left'
            >
              Wishlist
            </Text>
            <Text
              textAlign='left'
              fontSize='16px'
              width={{ base: '100%', md: '80%', xl: '80%' }}
              lineHeight={{ base: '1.2em', md: '1.4em' }}
              marginBottom='18px'
            >
              Uh-oh, looks like your coffee wishlist is running on empty! No
              worries, though. Dive into our vibrant community and discover the
              brew of your dreams! Let's fill up that cup with some caffeinated
              magic!
            </Text>
            <Link to={'/coffeehub'}>
              <Button
                width={{ base: '100%', md: '30%', xl: '20%' }}
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
                See more
              </Button>
            </Link>
          </Flex>
          <Image
            src={emptycoffee}
            display={{ base: 'none', md: 'flex' }}
            width={{ md: '260px', lg: '220px', xl: '380px' }}
            height={{ md: '240px', lg: '295px', xl: '340px' }}
          />
        </Box>
      ) : (
        <div>
          <Box
            display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent='center'
            marginLeft={{ base: '35px', md: '0', xl: '40px' }}
            marginTop={{ base: '40px', lg: '100px' }}
            width={{ xl: '90%' }}
            marginBottom={{ base: '30px', md: '40px', lg: '60px', xl: '65px' }}
          >
            <Image
              src={methods}
              display={{ base: 'flex', md: 'none' }}
              alignSelf='center'
              width={{ base: '275px' }}
              height={{ base: '230px' }}
              marginRight='30px'
            />
            <Flex
              flexDirection='column'
              justifyContent='left'
              marginTop={{ base: '40px', md: '30px', xl: '0' }}
              marginLeft={{ xl: '35px' }}
              marginRight={{ lg: '100px', xl: '0' }}
              width={{ base: '80%', md: '50%' }}
            >
              <Text
                fontFamily='Gluten'
                marginTop={{ xl: '45px' }}
                paddingTop={{ md: '30px', xl: '0' }}
                marginBottom={{ base: '10px', lg: '20px' }}
                lineHeight='1em'
                fontSize={{ base: '3xl', lg: '5xl' }}
                textAlign='left'
              >
                Wishlist
              </Text>
              <Text
                textAlign='left'
                fontSize='16px'
                width={{ base: '100%', md: '80%', xl: '60%' }}
                lineHeight={{ base: '1.2em', md: '1.4em' }}
                marginBottom='18px'
              >
                Get ready for a coffee journey! Here's your wishlist of top
                picks. Dive in, explore, and find your perfect brew in our
                coffee-loving community!
              </Text>
            </Flex>
            <Image
              src={methods}
              display={{ base: 'none', md: 'flex' }}
              width={{ md: '265px', lg: '340px', xl: '370px' }}
              height={{ md: '240px', lg: '295px', xl: '250px' }}
            />
          </Box>

          <InputGroup marginLeft={{ base: '35px', md: '60px', xl: '190px' }}>
            <InputLeftAddon backgroundColor='#0B0B03'>
              <Icon as={SearchIcon} color='#FFEFD6' backgroundColor='#0B0B03' />
            </InputLeftAddon>
            <Input
              type='text'
              placeholder='Search'
              variant='outline'
              width={{ base: '60%', md: '50%', xl: '70%' }}
              borderColor='#0B0B03'
              marginBottom={{ base: '40px', md: '80px', lg: '60px' }}
              value={search}
              onChange={handleSearch}
            ></Input>
          </InputGroup>

          <Flex
            flexDirection='row'
            flexWrap='wrap'
            gap='10'
            justifyContent={{ base: 'left', md: 'left', lg: 'center' }}
            marginLeft={{ base: '35px', md: '60px', lg: '20px', xl: '0' }}
            marginBottom='100px'
          >
            {wishlist
              .filter(
                coffee =>
                  coffee.coffeeTaste.coffeeName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  coffee.coffeeTaste.region
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  coffee.coffeeTaste.method
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  coffee.coffeeTaste.country
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  coffee.coffeeTaste.roast
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  coffee.coffeeTaste.caffeine
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  coffee.coffeeTaste.flavor
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  coffee.coffeeTaste.body
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  (coffee.coffeeTaste.varieties &&
                    coffee.coffeeTaste.varieties.some(variety =>
                      variety.toLowerCase().includes(search.toLowerCase())
                    )) ||
                  (coffee.coffeeTaste.altitude &&
                    coffee.coffeeTaste.altitude.some(altitude =>
                      altitude.toLowerCase().includes(search.toLowerCase())
                    )) ||
                  (coffee.coffeeTaste.process &&
                    coffee.coffeeTaste.process.some(process =>
                      process.toLowerCase().includes(search.toLowerCase())
                    )) ||
                  (coffee.coffeeTaste.aromas &&
                    coffee.coffeeTaste.aromas.some(aroma =>
                      aroma.toLowerCase().includes(search.toLowerCase())
                    ))
              )

              .map(coffee => {
                const createdBy = coffee.createdBy && coffee.createdBy[0];
                const isInWishlist = true;
                const wishlistId = coffee._id;
                console.log(wishlistId);
                return (
                  <div key={coffee._id}>
                    <CoffeeCard
                      wishlistId={coffee._id}
                      coffeeId={coffee.coffeeTaste._id}
                      coffeeName={coffee.coffeeTaste.coffeeName}
                      coffeeImgUrl={coffee.coffeeTaste.coffeeImgUrl}
                      region={coffee.coffeeTaste.region}
                      varieties={coffee.coffeeTaste.varieties}
                      process={coffee.coffeeTaste.process}
                      method={coffee.coffeeTaste.method}
                      storeUrl={coffee.coffeeTaste.storeUrl}
                      createdBy={createdBy}
                      share={coffee.share}
                      isInWishlist={isInWishlist}
                      route='CoffeeHub'
                    />
                  </div>
                );
              })}
          </Flex>
        </div>
      )}
    </div>
  );
}

export default CoffeeWishlist;
