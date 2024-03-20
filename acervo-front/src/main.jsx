import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWraper } from './context/auth.context.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { CoffeeQuizProvider } from './context/coffeequiz.context.jsx';
import { WishlistProvider } from './context/wishlist.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWraper>
        <CoffeeQuizProvider>
          <WishlistProvider>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </WishlistProvider>
        </CoffeeQuizProvider>
      </AuthProviderWraper>
    </Router>
  </React.StrictMode>
);
