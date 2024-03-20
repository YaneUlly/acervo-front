import { createContext, useContext, useEffect, useState } from 'react';
import { getWishlist } from '../api/coffees.api';

// Context
const WishlistContext = createContext();

// Access the context
const useWishlist = () => {
  return useContext(WishlistContext);
};

// Provide the context
const WishlistProvider = props => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await getWishlist();
        setWishlist(response.data);
      } catch (error) {
        console.log('error fetching the wishlist', error);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={wishlist}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export { useWishlist, WishlistProvider };
