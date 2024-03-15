import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Navigate } from 'react-router-dom';

function IsPrivate(props) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    <p>Loading</p>;
  }

  if (!isLoggedIn) {
    // if the user it's not logged in
    return <Navigate to={'/login'} />;
  } else {
    // if the user is logged in, allow it to see the page
    return props.children;
  }
}

export default IsPrivate;
