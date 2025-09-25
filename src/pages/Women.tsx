import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import heroImage from '@/assets/hero-grace-coddington.jpg';
import handbagImage from '@/assets/product-womens-handbag.jpg';
import shoesImage from '@/assets/product-womens-shoes.jpg';
import beautyImage from '@/assets/product-beauty.jpg';

const Women = () => {
  const products = [
    {
      id: '1',
      name: 'Capucines Collection',
      category: 'Handbags',
      image: handbagImage,
      link: '/women/handbags/capucines',
      description: 'Elegant handbags crafted with the finest leather and signature LV hardware.'
    },
    {
      id: '2',
      name: 'Archlight Sneaker',
      category: 'Shoes',
      image: shoesImage,
      link: '/women/shoes/archlight',
      description: 'Contemporary sneakers blending sport and luxury with innovative design.'
    },
    {
      id: '3',
      name: 'Les Parfums Louis Vuitton',
      category: 'Beauty',
      image: beautyImage,
      link: '/women/perfumes',
      description: 'Exclusive fragrances crafted by the world\'s most renowned perfumers.'
    },
  ];

  const accessories = [
    {
      id: '4',
      name: 'Silk Scarves',
      category: 'Accessories',
      image: handbagImage,
      link: '/women/accessories/scarves',
      description: 'Luxurious silk scarves featuring iconic Louis Vuitton motifs.'
    },
    {
      id: '5',
      name: 'Fine Jewelry',
      category: 'Jewelry',
      image: beautyImage,
      link: '/women/jewelry',
      description: 'Exquisite jewelry pieces combining precious metals with signature design elements.'
    },
    {
      id: '6',
      name: 'Leather Goods',
      category: 'Small Leather Goods',
      image: shoesImage,
      link: '/women/leather-goods',
      description: 'Refined wallets and small leather accessories for the discerning woman.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection
          title="Louis Vuitton Travels With Grace Coddington"
          subtitle="Women"
          buttonText="Discover the Collection"
          buttonLink="/women/collection"
          backgroundImage={heroImage}
          textPosition="center"
          textColor="light"
        />

        <ProductGrid
          title="Explore a Selection of the Maison's Creations"
          subtitle="Featured Collections"
          products={products}
          columns={3}
          viewAllLink="/women/all"
        />

        <section className="py-20 bg-luxury-light-gray">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
                Savoir-Faire
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Each Louis Vuitton creation is a testament to exceptional craftsmanship, 
                where traditional techniques meet contemporary innovation. Our artisans 
                dedicate their expertise to creating timeless pieces that embody the 
                Maison's commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        <ProductGrid
          title="Accessories & Fine Jewelry"
          subtitle="Complete Your Look"
          products={accessories}
          columns={3}
          viewAllLink="/women/accessories"
        />
      </main>
    </div>
  );
};

export default Women;