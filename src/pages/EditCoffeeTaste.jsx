import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {
  getCoffeeTaste,
  updateCoffeeTaste,
  deleteCoffeeTaste,
  upload,
} from '../api/coffees.api';
import {
  Input,
  Select,
  Text,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import ProgressBar from '../components/ProgressBar.jsx';
import editcoffee from '../assets/editcoffee.png';
import '../index.css';

function EditCoffeeTaste() {
  const [coffeeName, setCoffeeName] = useState('');
  const [region, setRegion] = useState('africa');
  const [country, setCountry] = useState('');
  const [roast, setRoast] = useState('light roast');
  const [caffeine, setCaffeine] = useState('regular');
  const [varieties, setVarieties] = useState([]);
  const [altitude, setAltitude] = useState([]);
  const [process, setProcess] = useState([]);
  const [aromas, setAromas] = useState([]);
  const [flavor, setFlavor] = useState('sweet');
  const [body, setBody] = useState('aquoso');
  const [method, setMethod] = useState('espresso-machine');
  const [recipe, setRecipe] = useState('');
  const [description, setDescription] = useState('');
  const [share, setShare] = useState(false);
  const [storeUrl, setStoreUrl] = useState('');
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { coffeeId } = useParams();
  // console.log(coffeeId);

  const navigate = useNavigate();

  const handleImage = ({ target }) => {
    setImage(target.files[0]);
    // console.log(target.files[0]);
    // console.log('Setting image', handleImage);
  };

  const getSingleCoffee = async () => {
    try {
      const response = await getCoffeeTaste(coffeeId);
      // console.log('response getCoffee', response.data);

      setCoffeeName(response.data.coffeeName);
      setRegion(response.data.region);
      setCountry(response.data.country);
      setRoast(response.data.roast);
      setCaffeine(response.data.caffeine);
      setMethod(response.data.method);
      setVarieties(response.data.varieties);
      setAltitude(response.data.altitude);
      setProcess(response.data.process);
      setAromas(response.data.aromas);
      setFlavor(response.data.flavor);
      setBody(response.data.body);
      setRecipe(response.data.recipe);
      setDescription(response.data.description);
      setShare(response.data.share);
      setStoreUrl(response.data.storeUrl);
      setImageUrl(response.data.coffeeImgUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCoffeeTaste(coffeeId);
      navigate('/coffeetaste');
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  useEffect(() => {
    // console.log('useEffect triggered');
    getSingleCoffee();
  }, []);

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const requestBody = {
        _id: coffeeId,
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
      };

      // console.log('Form submitted');

      if (image) {
        const uploadData = new FormData();
        uploadData.append('file', image);

        const response = await upload(uploadData);
        // console.log('Response Upload Data', response.data);

        // console.log('Image URL:', response.data.coffeeImgUrl);
        requestBody.coffeeImgUrl = response.data.coffeeImgUrl;
      }

      // console.log('Request body:', requestBody);

      await updateCoffeeTaste(requestBody);
      setShowModal(true);
      // console.log('Coffee taste updated successfully');

      // navigate(`/coffeetaste/${coffeeId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const totalSteps = 4;

  const handleNextStep = () => {
    setProgress(prevProgress => Math.min(prevProgress + 1, totalSteps));
  };

  const handlePrevStep = () => {
    setProgress(prevProgress => Math.max(prevProgress - 1, 0));
  };

  return (
    <div>
      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        justifyContent='center'
        marginBottom={{ base: '50px', md: '40px', lg: '50px' }}
        marginTop={{ base: '20px', lg: '50px', xl: '60px' }}
      >
        <Flex
          flexDirection='column'
          justifyContent='left'
          marginLeft={{ base: '45px', md: '95px', lg: '0', xl: '20px' }}
          width={{ base: '75%', lg: '50%', xl: '40%' }}
        >
          <Breadcrumb fontSize='14px' marginTop='25px'>
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
            marginTop={{ base: '20px', md: '20px', lg: '45px' }}
            marginBottom={{ lg: '20px' }}
            width={{ lg: '80%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
            textAlign='left'
          >
            <span style={{ color: '#028AEB', fontFamily: 'Gluten' }}>Edit</span>{' '}
            Coffee
          </Text>

          <Text
            textAlign='left'
            fontSize='16px'
            width={{ base: '100%', md: '100%', lg: '70%' }}
            marginBottom='18px'
          >
            Here is your coffee editing zone! Where, you can refine your coffee
            details, adjust your recipe, delete it and decide whether to share
            it with our community or keep it to yourself!
          </Text>
        </Flex>

        <Image
          src={editcoffee}
          display={{ base: 'none', md: 'none', lg: 'flex' }}
          width='300px'
          height='320px'
        ></Image>
      </Box>

      {/* STARTING THE FORM */}
      <Flex
        flexDirection='column'
        alignItems='center'
        width='100%'
        marginBottom='100px'
      >
        <ProgressBar progress={progress} totalSteps={totalSteps} />
        <form
          onSubmit={handleSubmit}
          className='form'
          style={{
            backgroundColor: '#FADCAF',
            borderRadius: '5px',
            marginTop: '20px',
          }}
        >
          {progress === 0 && (
            <Box
              display='flex'
              flexDirection='column'
              alignItems='left'
              marginTop='20px'
              padding='20px'
            >
              {/* FIRST STEP */}
              <Text align='left' marginBottom='10px'>
                Step 1/5
              </Text>
              <Text
                fontSize='2xl'
                align='left'
                paddingBottom='10px'
                fontFamily='Gluten'
                color='#F08229'
              >
                Coffee Infos
              </Text>

              <FormControl isRequired>
                <FormLabel>Coffee name:</FormLabel>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  borderColor='#0B0B03'
                  marginBottom='12px'
                  value={coffeeName}
                  onChange={e => setCoffeeName(e.target.value)}
                ></Input>
                <FormErrorMessage>Coffee name is required.</FormErrorMessage>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Origin region:</FormLabel>
                <Select
                  name='region'
                  id='region'
                  borderColor='#0B0B03'
                  marginBottom='12px'
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                >
                  <option value='central america'>Central America</option>
                  <option value='south america'>South America</option>
                  <option value='asia'>Asia</option>
                  <option value='africa'>Africa</option>
                  <option value='arabia'>Arabia</option>
                </Select>
                <FormErrorMessage>Coffee origin is required.</FormErrorMessage>
              </FormControl>

              <FormLabel>Country:</FormLabel>
              <Input
                type='text'
                name='country'
                id='country'
                value={country}
                borderColor='#0B0B03'
                marginBottom='12px'
                onChange={e => setCountry(e.target.value)}
              ></Input>

              <FormControl isRequired>
                <FormLabel>Type of roast:</FormLabel>
                <Select
                  name='roast'
                  id='roast'
                  value={roast}
                  borderColor='#0B0B03'
                  marginBottom='12px'
                  onChange={e => setRoast(e.target.value)}
                >
                  <option value='light roast'>Light Roast</option>
                  <option value='medium roast'>Medium Roast</option>
                  <option value='dark roast'>Dark Roast</option>
                </Select>
                <FormErrorMessage>Coffee roast is required.</FormErrorMessage>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Type:</FormLabel>
                <Select
                  name='type'
                  id='type'
                  borderColor='#0B0B03'
                  marginBottom='12px'
                  value={caffeine}
                  onChange={e => setCaffeine(e.target.value)}
                >
                  <option value='regular'>Regular</option>
                  <option value='decaf'>Decaf</option>
                </Select>
                <FormErrorMessage>Coffee type is required.</FormErrorMessage>
              </FormControl>

              <FormLabel>Coffee varieties:</FormLabel>
              <Input
                type='text'
                name='varieties'
                id='varieties'
                borderColor='#0B0B03'
                marginBottom='12px'
                value={varieties}
                onChange={e => setVarieties(e.target.value)}
              ></Input>

              <FormLabel>Altitude:</FormLabel>
              <Input
                type='text'
                name='altitude'
                id='altitude'
                borderColor='#0B0B03'
                marginBottom='12px'
                value={altitude}
                onChange={e => setAltitude(e.target.value)}
              ></Input>

              <FormLabel>Process:</FormLabel>
              <Input
                type='text'
                name='process'
                id='process'
                borderColor='#0B0B03'
                value={process}
                onChange={e => setProcess(e.target.value)}
              ></Input>

              <Box
                display='flex'
                justifyContent={{ base: 'center', md: 'right', lg: 'right' }}
              >
                <Button
                  onClick={handleNextStep}
                  marginTop='40px'
                  width={{ base: '100%', md: '20%', lg: '20%' }}
                  variant='outline'
                  bgColor='#FFB82E'
                  borderColor='#0B0B03'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}

          {/* SECOND STEP */}
          {progress === 1 && (
            <Box paddingBottom='70px' marginTop='20px' padding='20px'>
              <Text align='left' marginBottom='10px'>
                Step 2/5
              </Text>
              <Text
                fontSize='3xl'
                align='left'
                paddingBottom='10px'
                fontFamily='Gluten'
                color='#F08229'
              >
                Coffee recipe
              </Text>

              <FormControl isRequired>
                <FormLabel>Method used:</FormLabel>
                <Select
                  name='method'
                  id='method'
                  borderColor='#0B0B03'
                  marginBottom='12px'
                  value={method}
                  onChange={e => setMethod(e.target.value)}
                >
                  <option value='espresso-machine'>Espresso Machine</option>
                  <option value='moka-pot'>Moka Pot</option>
                  <option value='french-press'>French Press</option>
                  <option value='aeropress'>Aeropress</option>
                  <option value='V60'>V60</option>
                  <option value='chemex'>Chemex</option>
                  <option value='cold-brew'>Cold Brew</option>
                  <option value='other'>Other</option>
                </Select>
                <FormErrorMessage>Brewing method is required.</FormErrorMessage>
              </FormControl>

              <FormLabel>Recipe</FormLabel>
              <Input
                type='text'
                name='recipe'
                id='recipe'
                borderColor='#0B0B03'
                marginBottom='12px'
                value={recipe}
                onChange={e => setRecipe(e.target.value)}
              ></Input>

              <Box
                display='flex'
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
              >
                <Button
                  onClick={handlePrevStep}
                  marginTop='40px'
                  width={{ base: '100%', md: '20%', lg: '20%' }}
                  variant='outline'
                  borderColor='#0B0B03'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNextStep}
                  marginTop={{ base: '10px', md: '40px' }}
                  width={{ base: '100%', md: '20%' }}
                  variant='outline'
                  bgColor='#FFB82E'
                  borderColor='#0B0B03'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}

          {/* THIRD STEP */}
          {progress === 2 && (
            <Box paddingBottom='70px' marginTop='20px' padding='20px'>
              <Text align='left' marginBottom='10px'>
                Step 3/5
              </Text>
              <Text
                fontSize='3xl'
                align='left'
                paddingBottom='10px'
                fontFamily='Gluten'
                color='#F08229'
              >
                Coffee Details
              </Text>

              <FormLabel>Aromas:</FormLabel>
              <Input
                type='text'
                name='aromas'
                id='aromas'
                borderColor='#0B0B03'
                marginBottom='12px'
                value={aromas}
                onChange={e => setAromas(e.target.value)}
              ></Input>

              <FormControl isRequired>
                <FormLabel>Flavors:</FormLabel>
                <Select
                  name='flavor'
                  id='flavor'
                  borderColor='#0B0B03'
                  marginBottom='12px'
                  value={flavor}
                  onChange={e => setFlavor(e.target.value)}
                >
                  <option value='sweet'>Sweet</option>
                  <option value='floral'>Floral</option>
                  <option value='fruity'>Fruity</option>
                  <option value='roasted'>Roasted</option>
                  <option value='spices'>Spices</option>
                  <option value='nutty-cocoa'>Nutty/Cocoa</option>
                  <option value='sour-fermented'>Sour/Fermented</option>
                  <option value='green-vegetative'>Green Vegetative</option>
                </Select>
                <FormErrorMessage>Coffee flavor is required.</FormErrorMessage>
              </FormControl>

              <FormLabel>Body:</FormLabel>
              <Select
                name='body'
                id='body'
                borderColor='#0B0B03'
                marginBottom='12px'
                value={body}
                onChange={e => setBody(e.target.value)}
              >
                <option value='aquoso'>Aquoso</option>
                <option value='unctuous'>Unctuous</option>
                <option value='fatty'>Fatty</option>
              </Select>

              <FormLabel>Description:</FormLabel>
              <Input
                type='text'
                name='description'
                id='description'
                borderColor='#0B0B03'
                marginBottom='12px'
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></Input>

              <Box
                display='flex'
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                marginTop='40px'
              >
                <Button
                  onClick={handlePrevStep}
                  width={{ base: '100%', md: '20%' }}
                  variant='outline'
                  colorScheme='#028AEB'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNextStep}
                  width={{ base: '100%', md: '20%' }}
                  marginTop={{ base: '10px' }}
                  variant='outline'
                  bgColor='#FFB82E'
                  borderColor='#0B0B03'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}

          {/* FOURTH STEP */}
          {progress === 3 && (
            <Box paddingBottom='70px' marginTop='20px' padding='20px'>
              <Text align='left' marginBottom='10px'>
                Step 4/5
              </Text>
              <Text
                fontSize='2xl'
                align='left'
                paddingBottom='10px'
                fontFamily='Gluten'
                color='#F08229'
              >
                General Info
              </Text>

              <FormLabel>Store:</FormLabel>
              <Input
                type='text'
                name='storeUrl'
                id='storeUrl'
                borderColor='#0B0B03'
                marginBottom='12px'
                value={storeUrl}
                onChange={e => setStoreUrl(e.target.value)}
              ></Input>

              <FormLabel>
                Do you want do share your coffee with our community?
              </FormLabel>
              <Select
                name='share'
                id='share'
                borderColor='#0B0B03'
                marginBottom='12px'
                value={share}
                onChange={e => setShare(e.target.value)}
              >
                <option value='true'>Yes</option>
                <option value='false'>No</option>
              </Select>

              <FormLabel>Coffee Image:</FormLabel>
              <input
                type='file'
                onChange={handleImage}
                className='custom-file-input'
                style={{ display: 'none' }}
                id='coffeeImage'
              />

              <label htmlFor='coffeeImage' className='custom-file-button'>
                Upload Image
              </label>
              {image && (
                <Text fontSize='sm' color='green.500' marginTop='5'>
                  Photo uploaded successfully!
                </Text>
              )}

              <Box
                display='flex'
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                marginTop='40px'
              >
                <Button
                  onClick={handlePrevStep}
                  width={{ base: '100%', md: '20%' }}
                  variant='outline'
                  colorScheme='#028AEB'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleNextStep}
                  width={{ base: '100%', md: '20%' }}
                  marginTop={{ base: '10px' }}
                  variant='outline'
                  bgColor='#FFB82E'
                  borderColor='#0B0B03'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}

          {progress === totalSteps && (
            <Box
              paddingBottom='70px'
              marginTop='20px'
              padding='20px'
              align='center'
            >
              <Flex justifyContent='flex-start'>
                <Button
                  onClick={handlePrevStep}
                  width={{ base: '100%', md: '20%' }}
                  colorScheme='#028AEB'
                  variant='outline'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Back Editing
                </Button>
              </Flex>
              <Text
                fontSize='3xl'
                paddingBottom='20px'
                paddingTop='50px'
                fontFamily='Gluten'
                color='#F08229'
              >
                Ready to share your new coffee creation?
              </Text>
              <Text width={{ base: '100%', md: '80%' }} paddingBottom='50px'>
                If you need to make any adjustments, you can always go back a
                step. Otherwise, proceed ahead and bring your new recipe to
                life!
              </Text>

              <Box
                display='flex'
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                alignItems='center'
                gap={{ base: '5', md: '20' }}
              >
                <Button
                  onClick={handleShowDeleteModal}
                  width={{ base: '100%', md: '25%', lg: '20%' }}
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
                  type='submit'
                  width={{ base: '100%', md: '25%', lg: '20%' }}
                  variant='outline'
                  bgColor='#FFB82E'
                  borderColor='#0B0B03'
                  color='#0B0B03'
                  _hover={{
                    bgColor: '#0B0B03',
                    color: '#FFEFD6',
                  }}
                >
                  Confirm Edition
                </Button>
              </Box>
            </Box>
          )}
        </form>
      </Flex>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={handleModalClose}
        width={{ lg: '70%', xl: '60%' }}
        backgroundColor='rgba(250, 220, 175, 1)'
        marginTop={{ lg: '120px', xl: '60px' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader lineHeight='2em' fontSize='lg' fontWeight='700'>
            Coffee Updated Succesfully!
          </ModalHeader>
          <ModalBody>
            Your coffee has been successfully created! You now have the ability
            to edit and delete it at any time. Feel free to explore your new
            coffee creation, or continue to craft additional coffee recipes.
          </ModalBody>
          <ModalFooter>
            <Button
              variant='outline'
              marginRight='10px'
              colorScheme='#028AEB'
              color='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
            >
              <Link to='/coffeetaste/create'>New coffee</Link>
            </Button>
            <Button
              bgColor='#FFB82E'
              color='#0B0B03'
              variant='outline'
              borderColor='#0B0B03'
              _hover={{
                bgColor: '#0B0B03',
                color: '#FFEFD6',
              }}
            >
              <Link to='/coffeetaste'>My track</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal
        isOpen={showDeleteModal}
        onClose={handleCloseDeleteModal}
        width={{ lg: '70%', xl: '60%' }}
        backgroundColor='rgba(250, 220, 175, 1)'
        marginTop={{ lg: '120px', xl: '60px' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader lineHeight='2em' fontSize='lg' fontWeight='700'>
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
  );
}

export default EditCoffeeTaste;
