import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import heroImage from '@/assets/hero-mens-fall.jpg';
import shoesImage from '@/assets/product-mens-shoes.jpg';
import handbagImage from '@/assets/product-womens-handbag.jpg';

const Men = () => {
  const products = [
    {
      id: '1',
      name: 'Keepall Bandoulière',
      category: 'Travel',
      image: handbagImage,
      link: '/men/bags/keepall',
      description: 'Iconic travel bag reimagined with contemporary functionality and timeless style.'
    },
    {
      id: '2',
      name: 'LV Trainer Sneaker',
      category: 'Shoes',
      image: shoesImage,
      link: '/men/shoes/lv-trainer',
      description: 'Luxury sneakers combining craftsmanship with contemporary street style.'
    },
    {
      id: '3',
      name: 'Quilted Monogram Overshirt',
      category: 'Ready-to-Wear',
      image: heroImage,
      link: '/men/ready-to-wear/overshirt',
      description: 'Sophisticated outerwear featuring the iconic monogram in a modern silhouette.'
    },
  ];

  const accessories = [
    {
      id: '4',
      name: 'Damier Graphite Wallets',
      category: 'Small Leather Goods',
      image: shoesImage,
      link: '/men/wallets',
      description: 'Sleek wallets in the signature Damier Graphite canvas with premium leather trim.'
    },
    {
      id: '5',
      name: 'Tambour Watches',
      category: 'Watches',
      image: handbagImage,
      link: '/men/watches',
      description: 'Swiss-made timepieces combining Louis Vuitton\'s design heritage with horological excellence.'
    },
    {
      id: '6',
      name: 'Monogram Eclipse Belt',
      category: 'Accessories',
      image: heroImage,
      link: '/men/belts',
      description: 'Refined belt featuring the LV buckle and signature Monogram Eclipse canvas.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection
          title="LV Fall"
          subtitle="Men's Collection"
          description="Discover the new season's essentials, where contemporary design meets timeless craftsmanship."
          buttonText="Explore Collection"
          buttonLink="/men/fall-collection"
          backgroundImage={heroImage}
          textPosition="left"
          textColor="light"
        />

        <ProductGrid
          title="Essential Creations for the Modern Man"
          subtitle="Featured Products"
          products={products}
          columns={3}
          viewAllLink="/men/all"
        />

        <section className="py-20 bg-luxury-black text-luxury-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
                  Crafted for Excellence
                </h2>
                <p className="text-lg leading-relaxed mb-8">
                  Every piece in our men's collection represents the pinnacle of 
                  luxury craftsmanship. From the finest materials to meticulous 
                  attention to detail, each creation embodies the Maison's 
                  unwavering commitment to excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  Discover how traditional savoir-faire meets contemporary innovation 
                  in designs that transcend time and trends.
                </p>
              </div>
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={shoesImage}
                  alt="Louis Vuitton Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <ProductGrid
          title="Signature Accessories"
          subtitle="Complete Your Style"
          products={accessories}
          columns={3}
          viewAllLink="/men/accessories"
        />
      </main>
    </div>
  );
};

export default Men;