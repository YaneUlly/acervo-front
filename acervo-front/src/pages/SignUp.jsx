import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../api/auth.api';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleImage = ({ target }) => {
    setImage(target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const user = { name, email, password };

      if (image) {
        const uploadData = new FormData();
        uploadData.append('File', image);

        const response = await uploadData(uploadData);
        console.log(response.data);

        user.photoUrl = response.data.photoUrl;
      }
      await signup(user);
      navigate('/login');
    } catch (error) {
      console.log('Error signup', error);
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h1> Sign Up </h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>

        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>

        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>

        <label>Profile Photo:</label>
        <input type='file' onChange={handleImage}></input>
        <button type='submit'>Add</button>

        <button type='submit'> Sign up</button>
      </form>

      {error && <p>{error}</p>}

      <p>Already have an account?</p>
      <Link to={'/login'}>Login</Link>
    </div>
  );
}

export default SignUp;
