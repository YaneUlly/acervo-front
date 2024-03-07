import { useState } from 'react';
import { addCoffeeTaste, upload } from '../api/coffees.api';
import { useNavigate } from 'react-router-dom';
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
} from '@chakra-ui/react';

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

  return (
    <Flex flexDirection='column' alignItems='center' marginTop='30px'>
      <Text fontFamily='Gluten' marginBottom='20px' fontSize='5xl'>
        Add a new Coffee
      </Text>

      <form onSubmit={handleSubmit}>
        <Box paddingTop='10px' paddingBottom='70px'>
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
        </Box>

        <Box paddingBottom='70px'>
          <Text
            fontSize='2xl'
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
        </Box>

        <Box paddingBottom='70px'>
          <Text
            fontSize='2xl'
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
        </Box>

        <Box paddingBottom='70px'>
          <Text
            fontSize='2xl'
            align='left'
            paddingBottom='10px'
            fontFamily='Gluten'
            color='#F08229'
          >
            General Info
          </Text>
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
          <input type='file' onChange={handleImage}></input>
        </Box>

        <Button
          width='100%'
          bgColor='#028AEB'
          color='#FFEFD6'
          _hover={{
            bgColor: '#0B0B03',
          }}
          type='submit'
        >
          Create coffee
        </Button>
      </form>
    </Flex>
  );
}

export default CreateCoffee;
