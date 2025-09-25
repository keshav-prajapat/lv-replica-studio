import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import heroWomenImage from '@/assets/hero-grace-coddington.jpg';
import heroMenImage from '@/assets/hero-mens-fall.jpg';
import handbagImage from '@/assets/product-womens-handbag.jpg';
import beautyImage from '@/assets/product-beauty.jpg';
import shoesImage from '@/assets/product-womens-shoes.jpg';
import menssShoesImage from '@/assets/product-mens-shoes.jpg';

const Index = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Beauty & Perfumes',
      category: 'Beauty',
      image: beautyImage,
      link: '/beauty',
      description: 'Discover our exclusive fragrances and luxury makeup collections.'
    },
    {
      id: '2',
      name: 'Women\'s Handbags',
      category: 'Women',
      image: handbagImage,
      link: '/women',
      description: 'Iconic handbags crafted with exceptional savoir-faire and timeless elegance.'
    },
    {
      id: '3',
      name: 'Women\'s Shoes',
      category: 'Women',
      image: shoesImage,
      link: '/women/shoes',
      description: 'Sophisticated footwear combining comfort with Louis Vuitton\'s signature style.'
    },
    {
      id: '4',
      name: 'Men\'s Bags',
      category: 'Men',
      image: handbagImage,
      link: '/men',
      description: 'Contemporary bags designed for the modern man who appreciates luxury.'
    },
    {
      id: '5',
      name: 'Men\'s Shoes',
      category: 'Men',
      image: menssShoesImage,
      link: '/men/shoes',
      description: 'Premium footwear that reflects refined taste and exceptional craftsmanship.'
    },
    {
      id: '6',
      name: 'Perfumes',
      category: 'Fragrance',
      image: beautyImage,
      link: '/beauty/fragrances',
      description: 'Exclusive scents created by the world\'s most renowned perfumers.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Women's Hero Section */}
        <HeroSection
          title="Louis Vuitton Travels With Grace Coddington"
          subtitle="Women"
          buttonText="Discover the Collection"
          buttonLink="/women"
          backgroundImage={heroWomenImage}
          textPosition="center"
          textColor="light"
        />

        {/* Featured Products Section */}
        <ProductGrid
          title="Explore a Selection of the Maison's Creations"
          products={featuredProducts}
          columns={3}
          showViewAll={false}
        />

        {/* Men's Hero Section */}
        <section className="relative h-screen overflow-hidden parallax-container">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroMenImage})`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 py-20">
            <div className="max-w-4xl ml-16">
              <p className="text-sm uppercase tracking-widest mb-4 text-white/80">
                Men
              </p>
              
              <h2 className="luxury-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-white">
                LV Fall
              </h2>
              
              <div className="mb-8">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300"
                  onClick={() => window.open('/men', '_self')}
                >
                  Explore Collection
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Heritage Section */}
        <section className="py-20 bg-luxury-light-gray">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
                Since 1854
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Louis Vuitton has been synonymous with luxury, innovation, and exceptional craftsmanship 
                for over 160 years. From our legendary trunks to our contemporary leather goods, 
                each creation embodies the Maison's commitment to excellence and its passion for 
                travel and discovery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="luxury-serif text-3xl font-light mb-4 text-luxury-gold">160+</div>
                <h3 className="font-medium mb-2">Years of Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  A legacy of innovation and craftsmanship that continues to inspire.
                </p>
              </div>
              <div className="text-center">
                <div className="luxury-serif text-3xl font-light mb-4 text-luxury-gold">460+</div>
                <h3 className="font-medium mb-2">Boutiques Worldwide</h3>
                <p className="text-muted-foreground text-sm">
                  Experience Louis Vuitton in prestigious locations around the globe.
                </p>
              </div>
              <div className="text-center">
                <div className="luxury-serif text-3xl font-light mb-4 text-luxury-gold">100%</div>
                <h3 className="font-medium mb-2">Artisan Craftsmanship</h3>
                <p className="text-muted-foreground text-sm">
                  Every piece is meticulously crafted by skilled artisans in our ateliers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
                Louis Vuitton Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our exclusive services designed to enhance your Louis Vuitton experience.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="group text-center p-8 border border-border transition-all duration-300 hover:border-luxury-gold hover:shadow-lg">
                <h3 className="luxury-serif text-xl font-medium mb-4 group-hover:text-luxury-gold transition-colors">
                  Personalization
                </h3>
                <p className="text-muted-foreground text-sm">
                  Make your Louis Vuitton piece uniquely yours with our personalization services.
                </p>
              </div>
              
              <div className="group text-center p-8 border border-border transition-all duration-300 hover:border-luxury-gold hover:shadow-lg">
                <h3 className="luxury-serif text-xl font-medium mb-4 group-hover:text-luxury-gold transition-colors">
                  Art of Gifting
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover our exquisite gift wrapping and exclusive packaging options.
                </p>
              </div>
              
              <div className="group text-center p-8 border border-border transition-all duration-300 hover:border-luxury-gold hover:shadow-lg">
                <h3 className="luxury-serif text-xl font-medium mb-4 group-hover:text-luxury-gold transition-colors">
                  Leather Care
                </h3>
                <p className="text-muted-foreground text-sm">
                  Expert care and repair services to preserve the beauty of your pieces.
                </p>
              </div>
              
              <div className="group text-center p-8 border border-border transition-all duration-300 hover:border-luxury-gold hover:shadow-lg">
                <h3 className="luxury-serif text-xl font-medium mb-4 group-hover:text-luxury-gold transition-colors">
                  Client Services
                </h3>
                <p className="text-muted-foreground text-sm">
                  Personalized assistance from our dedicated client advisors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;