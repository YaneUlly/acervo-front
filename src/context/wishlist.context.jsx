import { createContext, useEffect, useState } from 'react';
import { getWishlist } from '../api/coffees.api';

// Context
const WishlistContext = createContext();

// Provide the context
const WishlistProvider = props => {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();
      console.log('wishilist:', response);
      setWishlist(response.data);
    } catch (error) {
      console.log('error fetching the wishlist', error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, fetchWishlist }}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export { WishlistContext, WishlistProvider };
