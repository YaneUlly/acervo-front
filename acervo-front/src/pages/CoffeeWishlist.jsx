import { useWishlist } from '../context/wishlist.context';
import CoffeeCard from '../components/CoffeeCard';

function CoffeeWishlist() {
  const wishlist = useWishlist();

  return (
    <div>
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? (
        <h1>Your wishlist is empty</h1>
      ) : (
        <div>
          {wishlist.map(coffee => {
            const createdBy = coffee.createdBy && coffee.createdBy[0];
            const isInWishlist = true; // Todos os cafés na lista de desejos estão na lista de desejos
            const wishlistId = coffee._id;
            console.log(wishlistId);
            return (
              <div key={coffee._id}>
                <CoffeeCard
                  wishlistId={coffee._id}
                  coffeeId={coffee.coffeeTaste._id}
                  coffeeName={coffee.coffeeTaste.coffeeName}
                  coffeeImgUrl={coffee.coffeeTaste.coffeeImgUrl}
                  region={coffee.coffeeTaste.region}
                  varieties={coffee.coffeeTaste.varieties}
                  process={coffee.coffeeTaste.process}
                  method={coffee.coffeeTaste.method}
                  storeUrl={coffee.coffeeTaste.storeUrl}
                  createdBy={createdBy}
                  share={coffee.share}
                  isInWishlist={isInWishlist}
                  route='CoffeeHub'
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CoffeeWishlist;
