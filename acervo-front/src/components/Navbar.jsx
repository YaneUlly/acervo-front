import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

function Navbar() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/howtotaste'>How to taste</Link>
      <Link to='/coffeequiz'>Coffee Quiz</Link>

      {isLoggedIn && (
        <>
          <Link to='/coffeehub'>Coffee Hub</Link>
          <Link to='/coffeetaste'>My Coffee Track</Link>
          <Link to='/coffeetaste/create'>Create New Track</Link>
          <button onClick={logoutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to='signup'>
            <button>SignUp</button>
          </Link>
          <Link to='/login'>Login</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
