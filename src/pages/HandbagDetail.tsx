import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, ChevronLeft, ChevronRight, Plus, Minus, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import handbagImage from '@/assets/product-womens-handbag.jpg';
import beautyImage from '@/assets/product-beauty.jpg';
import shoesImage from '@/assets/product-womens-shoes.jpg';

const HandbagDetail = () => {
  const { productId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('MM');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in real app this would come from API
  const product = {
    id: productId,
    name: 'Neverfull MM',
    collection: 'LV Icons',
    price: '$2,030',
    description: 'The emblematic Neverfull MM tote is fashioned from classic Monogram canvas. Designed by Louis Vuitton Artistic Director Nicolas Ghesquiere, the Neverfull is an ideal everyday bag.',
    features: [
      'Monogram coated canvas',
      'Natural cowhide leather trim',
      'Textile lining',
      'Gold-color hardware',
      'Interior zipped pocket',
      'D-ring for keys and accessories'
    ],
    dimensions: '32 x 29 x 17 cm (Length x Height x Width)',
    modelWears: 'The model is 1m77 and wears size MM',
    availableSizes: ['PM', 'MM', 'GM'],
    images: [handbagImage, beautyImage, shoesImage, handbagImage],
    careInstructions: [
      'Avoid prolonged exposure to direct sunlight',
      'Avoid contact with water and humidity',
      'Clean with a soft, dry cloth',
      'Store in dust bag when not in use'
    ]
  };

  const relatedProducts = [
    {
      id: '1',
      name: 'Speedy Bandoulière 25',
      price: '$1,760',
      image: beautyImage
    },
    {
      id: '2',
      name: 'Alma PM',
      price: '$2,290',
      image: shoesImage
    },
    {
      id: '3',
      name: 'Capucines MM',
      price: '$6,200',
      image: handbagImage
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        {/* Breadcrumb */}
        <section className="px-6 mb-8">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-muted-foreground flex items-center space-x-2">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/women" className="hover:text-foreground transition-colors">Women</Link>
              <span>/</span>
              <Link to="/handbags" className="hover:text-foreground transition-colors">Handbags</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Detail */}
        <section className="px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={product.images[currentImageIndex]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-foreground' : 'bg-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail images */}
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <Badge variant="secondary" className="mb-4">{product.collection}</Badge>
                  <h1 className="luxury-serif text-4xl font-light mb-4">{product.name}</h1>
                  <p className="text-3xl font-light mb-6">{product.price}</p>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="font-medium mb-4">Size</h3>
                  <div className="flex space-x-2">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 border rounded-md transition-colors ${
                          selectedSize === size 
                            ? 'border-primary bg-primary text-primary-foreground' 
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{product.modelWears}</p>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="font-medium mb-4">Quantity</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-border rounded-md hover:bg-accent"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border border-border rounded-md hover:bg-accent"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Bag
                  </Button>
                  
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="flex-1"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                    >
                      <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                      {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
                    </Button>
                    <Button variant="outline" size="lg">
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6 pt-8 border-t border-border">
                  <div>
                    <h3 className="font-medium mb-4">Product Details</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Dimensions</h3>
                    <p className="text-sm text-muted-foreground">{product.dimensions}</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Care Instructions</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.careInstructions.map((instruction, index) => (
                        <li key={index}>• {instruction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="luxury-serif text-3xl font-light text-center mb-12">You Might Also Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/handbags/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-muted-foreground">{relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HandbagDetail;