import { useState, useContext } from 'react';
import { login } from '../api/auth.api';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const user = { email, password };

    try {
      const response = await login(user);
      storeToken(response.data.authToken);
      authenticateUser();
      navigate('/coffeetaste');
    } catch (error) {
      console.log('Error login', error);
      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        ></input>

        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        ></input>
        <button type='submit'>Login</button>
      </form>

      {error && <p>{error}</p>}

      <p>Do not have an account?</p>
      <Link to={'/signup'}>Sign up</Link>
    </div>
  );
}

export default Login;
