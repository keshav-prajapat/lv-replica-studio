import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isAvailable: boolean;
}

const Wishlist = () => {
  const { toast } = useToast();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: '1',
      name: 'Capucines PM',
      price: 2400,
      image: '/src/assets/product-womens-handbag.jpg',
      category: 'Handbags',
      isAvailable: true
    },
    {
      id: '2',
      name: 'LV Trainer Sneaker',
      price: 1200,
      image: '/src/assets/product-mens-shoes.jpg',
      category: 'Shoes',
      isAvailable: true
    },
    {
      id: '3',
      name: 'Coussin PM',
      price: 2100,
      image: '/src/assets/product-womens-handbag.jpg',
      category: 'Handbags',
      isAvailable: false
    }
  ]);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const addToBag = (item: WishlistItem) => {
    toast({
      title: "Added to bag",
      description: `${item.name} has been added to your shopping bag.`,
    });
  };

  const totalItems = wishlistItems.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Heart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge 
              variant="secondary" 
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="luxury-serif text-xl">Wishlist</SheetTitle>
          <SheetDescription>
            {totalItems === 0 ? "Your wishlist is empty" : `${totalItems} item${totalItems > 1 ? 's' : ''} in your wishlist`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {wishlistItems.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Save your favorite items to keep track of them
                </p>
                <Button>Explore Collections</Button>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      {!item.isAvailable && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center">
                          <span className="text-white text-xs">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                          <p className="font-medium mt-1">${item.price.toLocaleString()}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="mt-3 space-y-2">
                        {item.isAvailable ? (
                          <>
                            <Button
                              size="sm"
                              className="w-full"
                              onClick={() => addToBag(item)}
                            >
                              <ShoppingBag className="h-4 w-4 mr-2" />
                              Add to Bag
                            </Button>
                            <Button variant="outline" size="sm" className="w-full">
                              View Details
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" size="sm" className="w-full" disabled>
                            Out of Stock
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Wishlist;