import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
} from '@chakra-ui/react';

function EditCoffeeTaste() {
  const [coffeeName, setCoffeeName] = useState('');
  const [region, setRegion] = useState('');
  const [roast, setRoast] = useState('');
  const [varieties, setVarieties] = useState([]);
  const [altitude, setAltitude] = useState([]);
  const [process, setProcess] = useState([]);
  const [aromas, setAromas] = useState([]);
  const [flavor, setFlavor] = useState([]);
  const [body, setBody] = useState('aquoso');
  const [method, setMethod] = useState('');
  const [recipe, setRecipe] = useState('');
  const [description, setDescription] = useState('');
  const [share, setShare] = useState(false);
  const [storeUrl, setStoreUrl] = useState('');
  const [image, setImage] = useState();

  const { coffeeId } = useParams();
  // console.log(coffeeId);

  const navigate = useNavigate();

  const handleImage = ({ target }) => {
    setImage(target.files[0]);
  };

  const getSingleCoffee = async () => {
    try {
      if (image) {
        const uploadData = new FormData();
        uploadData.append('file', image);

        const response = await upload(uploadData);
        // console.log('Response Upload Data', response.data);

        setImage(response.data.coffeeImgUrl);
      }

      const response = await getCoffeeTaste(coffeeId);
      // console.log('response getCoffee', response.data);

      setCoffeeName(response.data.coffeeName);
      setRegion(response.data.region);
      setRoast(response.data.roast);
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

  useEffect(() => {
    getSingleCoffee();
  }, []);

  const handleSubmit = async e => {
    try {
      e.preventDefault();

      // console.log('Form submitted');

      const requestBody = {
        _id: coffeeId,
        coffeeName,
        region,
        roast,
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

      // console.log('Request body:', requestBody);

      await updateCoffeeTaste(requestBody);

      // console.log('Coffee taste updated successfully');

      navigate(`/coffeetaste/${coffeeId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex flexDirection='column' alignItems='center' marginTop='30px'>
      <Text fontFamily='Gluten' marginBottom='20px' fontSize='5xl'>
        Edit Coffee
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
            <Input
              type='text'
              name='region'
              id='region'
              borderColor='#0B0B03'
              marginBottom='12px'
              value={region}
              onChange={e => setRegion(e.target.value)}
            ></Input>
            <FormErrorMessage>Coffee origin is required.</FormErrorMessage>
          </FormControl>

          <FormLabel>Type of roast:</FormLabel>
          <Input
            type='text'
            name='roast'
            id='roast'
            value={roast}
            borderColor='#0B0B03'
            marginBottom='12px'
            onChange={e => setRoast(e.target.value)}
          ></Input>

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

          <FormLabel>Flavors:</FormLabel>
          <Input
            type='text'
            name='flavor'
            id='flavor'
            borderColor='#0B0B03'
            marginBottom='12px'
            value={flavor}
            onChange={e => setFlavor(e.target.value)}
          ></Input>

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
          <FormLabel>Method used:</FormLabel>
          <Input
            type='text'
            name='method'
            id='method'
            borderColor='#0B0B03'
            marginBottom='12px'
            value={method}
            onChange={e => setMethod(e.target.value)}
          ></Input>

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
          type='submit'
          width='100%'
          marginBottom='10px'
          bgColor='#028AEB'
          color='#FFEFD6'
          _hover={{
            bgColor: '#0B0B03',
          }}
        >
          Confirm Edition
        </Button>

        <Button
          width='100%'
          variant='outline'
          colorScheme='#028AEB'
          color='#0B0B03'
          _hover={{
            bgColor: '#0B0B03',
            color: '#FFEFD6',
          }}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </form>
    </Flex>
  );
}

export default EditCoffeeTaste;
