import { useState, useEffect, useContext } from 'react';
import { WishlistContext } from '../context/wishlist.context.jsx';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { addWishlist, removeCoffeeWishlist } from '../api/coffees.api.js';
import {
  Flex,
  Box,
  Image,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCoffeeTaste } from '../api/coffees.api.js';
import '../index.css';

function CoffeeDetails({ ...props }) {
  const { wishlist } = useContext(WishlistContext);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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

  useEffect(() => {
    console.log('Wishlist:', wishlist);
    const coffeeInWishlist = wishlist.some(
      item => item.coffeeTaste._id === coffeeId
    );
    setIsInWishlist(coffeeInWishlist);
  }, [wishlist, coffeeId]);

  const toggleWishlist = () => {
    const newState = !isInWishlist;
    setIsInWishlist(newState);

    if (newState) {
      addWishlist(coffeeId)
        .then(() => {
          console.log('Coffee added to wishlist');
        })
        .catch(error => {
          console.log('Error adding coffee to wishlist:', error);
        });
    } else {
      removeCoffeeWishlist(coffeeId)
        .then(() => {
          console.log('Coffee removed from wishlist');
        })
        .catch(error => {
          console.error('Error removing coffee from wishlist:', error);
        });
    }
  };

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      await deleteCoffeeTaste(coffeeId);
      navigate('/coffeetaste');
    } catch (error) {
      console.error('Error deleting the coffee:', error);
    }
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div>
      <Text
        fontFamily='Gluten'
        marginTop={{ base: '2vh', md: '2vh', lg: '3vh' }}
        marginBottom={{ lg: '3vh' }}
        marginLeft='50px'
        width={{ lg: '80%' }}
        lineHeight={{ base: '1em', md: '1em', lg: '1em' }}
        fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
        textAlign='left'
      >
        Coffee Details
      </Text>

      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        marginTop={{ base: '4vh', md: '4vh', lg: '4vh', xl: '15vh' }}
        marginLeft='50px'
        width={{ base: '90%', lg: '100%' }}
        alignItems='flex-start'
      >
        {/* IMAGE */}
        <Box width={{ base: '90%', lg: '50%' }}>
          <Image
            src={image}
            boxSize={{ base: '70vw', md: '45vw', lg: '40vw' }}
            borderRadius='5px'
            objectFit='contain'
          ></Image>
        </Box>

        {/* COFFEE DETAILS */}
        <Box
          align='left'
          width={{ base: '90%', lg: '30%' }}
          marginLeft={{ base: '0', lg: '2vw' }}
          marginTop={{ base: '3vh', md: '0' }}
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
            {route === 'CoffeeHub' && (
              <div>
                <Button
                  onClick={toggleWishlist}
                  bgColor='transparent'
                  border='1px'
                  marginRight='10px'
                  _hover={{ cursor: 'pointer' }}
                >
                  {isInWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
                </Button>

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
                    Buy coffee
                  </Button>
                </a>
              </div>
            )}

            {route === 'CoffeeTaste' && (
              <div>
                <Box display='flex' flexDirection='row'>
                  <Button
                    onClick={handleShowDeleteModal}
                    width='60%'
                    marginRight='10px'
                    variant='outline'
                    color='#0B0B03'
                    borderColor='#0B0B03'
                    _hover={{
                      bgColor: '#0B0B03',
                      color: '#FFEFD6',
                    }}
                  >
                    Delete
                  </Button>
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
                    <Link to={`/coffeetaste/edit/${coffeeId}`}>Edit</Link>
                  </Button>
                </Box>

                {/* Modal de confirmação de exclusão */}
                <Modal
                  isOpen={showDeleteModal}
                  onClose={handleCloseDeleteModal}
                  className='modal'
                  width={{ lg: '70%', xl: '60%' }}
                  backgroundColor='rgba(250, 220, 175, 1)'
                  marginTop={{ lg: '120px', xl: '60px' }}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader
                      lineHeight='2em'
                      fontSize='lg'
                      fontWeight='700'
                    >
                      Confirm Deletion
                    </ModalHeader>
                    <ModalBody>
                      Are you sure you want to delete the coffee "{coffeeName}"?
                    </ModalBody>
                    <ModalFooter>
                      <Box justifyContent={{ base: 'center', md: 'flex-end' }}>
                        <Button
                          colorScheme='red'
                          onClick={handleDelete}
                          marginRight='10px'
                        >
                          Delete
                        </Button>
                        <Button
                          onClick={handleCloseDeleteModal}
                          variant='outline'
                          marginRight='10px'
                          colorScheme='#028AEB'
                          color='#0B0B03'
                          _hover={{
                            bgColor: '#0B0B03',
                            color: '#FFEFD6',
                          }}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </div>
            )}
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}

export default CoffeeDetails;
