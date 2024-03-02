import { useState } from 'react';
import { addCoffeeTaste, upload } from '../api/coffees.api';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

function CreateCoffee() {
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

      if (image) {
        const uploadData = new FormData();
        uploadData.append('file', image);

        const response = await upload(uploadData);
        console.log(response.data);

        requestBody.coffeeImgUrl = response.data.coffeeImgUrl;
      }
      await addCoffeeTaste(requestBody);

      navigate('/coffeetaste');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add a new Coffee</h1>

      <form onSubmit={handleSubmit}>
        <h2>Coffee Infos</h2>
        <FormLabel>Coffee name:</FormLabel>
        <Input
          type='text'
          name='name'
          id='name'
          value={coffeeName}
          onChange={e => setCoffeeName(e.target.value)}
        ></Input>

        <FormLabel>Origin region:</FormLabel>
        <Input
          type='text'
          name='region'
          id='region'
          value={region}
          onChange={e => setRegion(e.target.value)}
        ></Input>

        <FormLabel>Type of roast:</FormLabel>
        <Input
          type='text'
          name='roast'
          id='roast'
          value={roast}
          onChange={e => setRoast(e.target.value)}
        ></Input>

        <FormLabel>Coffee varieties:</FormLabel>
        <Input
          type='text'
          name='varieties'
          id='varieties'
          value={varieties}
          onChange={e => setVarieties(e.target.value)}
        ></Input>

        <FormLabel>Altitude:</FormLabel>
        <Input
          type='text'
          name='altitude'
          id='altitude'
          value={altitude}
          onChange={e => setAltitude(e.target.value)}
        ></Input>

        <FormLabel>Process:</FormLabel>
        <Input
          type='text'
          name='process'
          id='process'
          value={process}
          onChange={e => setProcess(e.target.value)}
        ></Input>

        <h2>Coffee Details</h2>
        <FormLabel>Aromas:</FormLabel>
        <Input
          type='text'
          name='aromas'
          id='aromas'
          value={aromas}
          onChange={e => setAromas(e.target.value)}
        ></Input>

        <FormLabel>Flavors:</FormLabel>
        <Input
          type='text'
          name='flavor'
          id='flavor'
          value={flavor}
          onChange={e => setFlavor(e.target.value)}
        ></Input>

        <FormLabel>Body:</FormLabel>
        <select
          name='body'
          id='body'
          value={body}
          onChange={e => setBody(e.target.value)}
        >
          <option value='aquoso'>Aquoso</option>
          <option value='unctuous'>Unctuous</option>
          <option value='fatty'>Fatty</option>
        </select>

        <h2>Coffee recipe</h2>
        <FormLabel>Method used:</FormLabel>
        <Input
          type='text'
          name='method'
          id='method'
          value={method}
          onChange={e => setMethod(e.target.value)}
        ></Input>

        <FormLabel>Recipe</FormLabel>
        <Input
          type='text'
          name='recipe'
          id='recipe'
          value={recipe}
          onChange={e => setRecipe(e.target.value)}
        ></Input>

        <h2>General Info</h2>
        <FormLabel>Description:</FormLabel>
        <Input
          type='text'
          name='description'
          id='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></Input>

        <FormLabel>Store:</FormLabel>
        <Input
          type='text'
          name='storeUrl'
          id='storeUrl'
          value={storeUrl}
          onChange={e => setStoreUrl(e.target.value)}
        ></Input>

        <FormLabel>Do you want do share with our community?</FormLabel>
        <select
          name='share'
          id='share'
          value={share}
          onChange={e => setShare(e.target.value)}
        >
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>

        <label>Coffee Image:</label>
        <input type='file' onChange={handleImage}></input>

        <button type='submit'>Create coffee</button>
      </form>
    </div>
  );
}

export default CreateCoffee;
