import { createContext, useState, useEffect } from 'react';
import { verify } from '../api/auth.api';

const AuthContext = createContext();

function AuthProviderWraper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ isLoading, isLoggedIn, user }}>
      {' '}
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWraper, AuthContext };
