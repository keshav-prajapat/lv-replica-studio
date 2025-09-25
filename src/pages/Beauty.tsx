import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import beautyImage from '@/assets/product-beauty.jpg';

const Beauty = () => {
  const fragrances = [
    {
      id: '1',
      name: 'L\'Immensité',
      category: 'Men\'s Fragrance',
      image: beautyImage,
      link: '/beauty/fragrances/limmensité',
      description: 'A fresh and luminous fragrance that captures the essence of wide open spaces.'
    },
    {
      id: '2',
      name: 'Attrape-Rêves',
      category: 'Women\'s Fragrance',
      image: beautyImage,
      link: '/beauty/fragrances/attrape-reves',
      description: 'An enchanting floral fragrance inspired by dreams and imagination.'
    },
    {
      id: '3',
      name: 'California Dream',
      category: 'Unisex Fragrance',
      image: beautyImage,
      link: '/beauty/fragrances/california-dream',
      description: 'A vibrant and energetic scent capturing the spirit of the Golden State.'
    },
  ];

  const makeup = [
    {
      id: '4',
      name: 'Rouge à Lèvres',
      category: 'Lipstick',
      image: beautyImage,
      link: '/beauty/makeup/lipstick',
      description: 'Luxurious lipsticks with intense color and long-lasting wear.'
    },
    {
      id: '5',
      name: 'Les Pinceaux',
      category: 'Brushes',
      image: beautyImage,
      link: '/beauty/makeup/brushes',
      description: 'Professional makeup brushes crafted with the finest materials.'
    },
    {
      id: '6',
      name: 'Éclat Minute',
      category: 'Foundation',
      image: beautyImage,
      link: '/beauty/makeup/foundation',
      description: 'Radiant foundation that provides natural coverage with a luminous finish.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection
          title="Louis Vuitton Beauty"
          subtitle="Perfumes & Cosmetics"
          description="Discover our exclusive beauty collections where luxury meets artistry in every formula."
          buttonText="Explore All Beauty"
          buttonLink="/beauty/all"
          backgroundImage={beautyImage}
          textPosition="center"
          textColor="dark"
          height="h-[80vh]"
        />

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
                The Art of Fragrance
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Louis Vuitton perfumes are created by the world's most renowned perfumers, 
                each fragrance telling a unique story through carefully selected ingredients 
                and exceptional craftsmanship. From fresh and floral to woody and oriental, 
                discover scents that capture the essence of luxury.
              </p>
            </div>
          </div>
        </section>

        <ProductGrid
          title="Signature Fragrances"
          subtitle="Les Parfums Louis Vuitton"
          products={fragrances}
          columns={3}
          viewAllLink="/beauty/fragrances"
        />

        <section className="py-20 bg-luxury-light-gray">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={beautyImage}
                  alt="Louis Vuitton Makeup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
                  Makeup Artistry
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  Louis Vuitton makeup combines the Maison's aesthetic vision 
                  with cutting-edge formulations. Each product is designed to 
                  enhance natural beauty while reflecting the luxury and 
                  sophistication that defines the brand.
                </p>
                <p className="text-lg leading-relaxed">
                  From vibrant lipsticks to flawless foundations, discover 
                  makeup that transforms beauty routines into rituals of elegance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid
          title="Luxury Makeup Collection"
          subtitle="Beauty Essentials"
          products={makeup}
          columns={3}
          viewAllLink="/beauty/makeup"
        />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
              Personalization Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Make your Louis Vuitton fragrance uniquely yours with our exclusive 
              personalization services. Add a personal touch with custom engraving 
              or create a bespoke scent experience tailored to your preferences.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8">
                <h3 className="luxury-serif text-xl font-medium mb-4">Custom Engraving</h3>
                <p className="text-muted-foreground">
                  Personalize your fragrance bottle with custom engraving services.
                </p>
              </div>
              <div className="p-8">
                <h3 className="luxury-serif text-xl font-medium mb-4">Fragrance Consultation</h3>
                <p className="text-muted-foreground">
                  Receive expert guidance to find your perfect signature scent.
                </p>
              </div>
              <div className="p-8">
                <h3 className="luxury-serif text-xl font-medium mb-4">Gift Sets</h3>
                <p className="text-muted-foreground">
                  Curated beauty collections presented in luxury Louis Vuitton packaging.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Beauty;