import { useState } from 'react';
import { addCoffeeTaste, upload } from '../api/coffees.api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import createcoffee from '../assets/createcoffee.png';
import finalForm from '../assets/final-form.png';
import ProgressBar from '../components/ProgressBar.jsx';
import '../index.css';

function CreateCoffee() {
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
  const [image, setImage] = useState();
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  const handleImage = ({ target }) => {
    setImage(target.files[0]);
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      const requestBody = {
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

      if (image) {
        const uploadData = new FormData();
        uploadData.append('file', image);

        const response = await upload(uploadData);
        console.log('Response Upload Data', response.data);

        requestBody.coffeeImgUrl = response.data.coffeeImgUrl;
      }
      await addCoffeeTaste(requestBody);

      navigate('/coffeetaste');
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
      <Breadcrumb marginLeft='20px' fontSize='14px' marginTop='25px'>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/coffeetaste'>
            Coffee Taste Track
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'column', lg: 'row' }}
        justifyContent='space-around'
        marginBottom={{ base: '50px', md: '50px', lg: '0px' }}
      >
        <Flex flexDirection='column' justifyContent='left' marginLeft='20px'>
          <Text
            fontFamily='Gluten'
            marginTop={{ base: '20px', md: '20px', lg: '45px' }}
            marginBottom={{ lg: '20px' }}
            width={{ lg: '80%' }}
            lineHeight={{ base: '1em', md: '1m', lg: '1em' }}
            fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
            textAlign='left'
          >
            Create your coffee recipe!
          </Text>
          <Text
            textAlign='left'
            fontSize='16px'
            width={{ base: '100%', md: '100%', lg: '70%' }}
            marginBottom='18px'
          >
            Welcome to our coffee recipe builder! Explore the world of
            personalized coffee crafting by designing your own unique recipe and
            sharing additional coffee-related insights with us through our form.
            If you need help filling the form, you can take a look at our
            Tasting Page for further instructions.
          </Text>
          <Button
            width={{ base: '30%', md: '30%', lg: '20%' }}
            bgColor='#028AEB'
            color='#FFEFD6'
            _hover={{
              bgColor: '#0B0B03',
            }}
            borderColor='#028AEB'
          >
            <Link to='/howtotaste'>Learn more</Link>
          </Button>
        </Flex>

        <Image
          src={createcoffee}
          display={{ base: 'none', md: 'none', lg: 'flex' }}
        ></Image>
      </Box>

      {/* STARTING THE FORM */}
      <Flex flexDirection='column' alignItems='center' width='100%'>
        <ProgressBar progress={progress} totalSteps={totalSteps} />
        <form onSubmit={handleSubmit} className='form'>
          {progress === 0 && (
            <Box
              display='flex'
              flexDirection='column'
              alignItems='left'
              marginTop='50px'
              paddingBottom='70px'
            >
              {/* FIRST STEP */}
              <Text align='left' marginBottom='10px'>
                Step 1/5
              </Text>
              <Text
                fontSize='3xl'
                align='left'
                paddingBottom='10px'
                fontFamily='Gluten'
                color='#F08229'
              >
                Coffee Info
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
                  bgColor='#028AEB'
                  color='#FFEFD6'
                  _hover={{
                    bgColor: '#0B0B03',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}

          {/* SECOND STEP */}
          {progress === 1 && (
            <Box paddingBottom='70px' marginTop='50px'>
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
                Coffee Recipe
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
                size='lg'
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
                  marginTop={{ base: '10px', md: '40px' }}
                  width={{ base: '100%', md: '20%' }}
                  bgColor='#028AEB'
                  color='#FFEFD6'
                  _hover={{
                    bgColor: '#0B0B03',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}

          {/* THIRD STEP */}

          {progress === 2 && (
            <Box paddingBottom='70px' marginTop='50px'>
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
                Coffee Tasting
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
                  bgColor='#028AEB'
                  color='#FFEFD6'
                  _hover={{
                    bgColor: '#0B0B03',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}

          {/* FOURTH STEP */}
          {progress === 3 && (
            <Box paddingBottom='70px' marginTop='50px'>
              <Text align='left' marginBottom='10px'>
                Step 4/5
              </Text>
              <Text
                fontSize='3xl'
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
              <label htmlFor='coffeeImage' className='custom-file-button'>
                Upload Image
              </label>
              <input
                type='file'
                onChange={handleImage}
                className='custom-file-input'
              ></input>

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
                  bgColor='#028AEB'
                  color='#FFEFD6'
                  _hover={{
                    bgColor: '#0B0B03',
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}

          {progress === totalSteps && (
            <Box paddingBottom='70px' marginTop='40px' align='center'>
              <Text
                fontSize='3xl'
                paddingBottom='20px'
                fontFamily='Gluten'
                color='#F08229'
              >
                Ready to share your new coffee creation?
              </Text>
              <Text width={{ base: '100%', md: '80%' }}>
                If you need to make any adjustments, you can always go back a
                step. Otherwise, proceed ahead and bring your new recipe to
                life!
              </Text>
              <Image
                src={finalForm}
                display={{ base: 'none', md: 'flex' }}
                width='50%'
              ></Image>

              <Box
                display='flex'
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                marginTop='20px'
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
                  width={{ base: '100%', md: '25%', lg: '20%' }}
                  marginTop={{ base: '10px' }}
                  bgColor='#028AEB'
                  color='#FFEFD6'
                  _hover={{
                    bgColor: '#0B0B03',
                  }}
                  type='submit'
                >
                  Create coffee
                </Button>
              </Box>
            </Box>
          )}
        </form>
      </Flex>
    </div>
  );
}

export default CreateCoffee;
