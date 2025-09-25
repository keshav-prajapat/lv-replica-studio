import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import handbagImage from '@/assets/product-womens-handbag.jpg';
import beautyImage from '@/assets/product-beauty.jpg';
import shoesImage from '@/assets/product-womens-shoes.jpg';

const Handbags = () => {
  const lvIconsProducts = [
    {
      id: '1',
      name: 'Neverfull MM',
      category: 'LV Icons',
      image: handbagImage,
      link: '/handbags/neverfull-mm',
      description: 'The emblematic Neverfull MM tote is crafted from Monogram canvas with natural cowhide leather trim.',
      price: '$2,030'
    },
    {
      id: '2',
      name: 'Speedy Bandoulière 25',
      category: 'LV Icons',
      image: beautyImage,
      link: '/handbags/speedy-25',
      description: 'This Speedy Bandoulière 25 in classic Monogram canvas is a compact and versatile handbag.',
      price: '$1,760'
    },
    {
      id: '3',
      name: 'Alma PM',
      category: 'LV Icons',
      image: shoesImage,
      link: '/handbags/alma-pm',
      description: 'The Alma PM handbag is made from Epi leather in an elegant structured silhouette.',
      price: '$2,290'
    }
  ];

  const capucinesProducts = [
    {
      id: '4',
      name: 'Capucines MM',
      category: 'Capucines',
      image: handbagImage,
      link: '/handbags/capucines-mm',
      description: 'The Capucines MM handbag in supple Taurillon leather embodies understated elegance.',
      price: '$6,200'
    },
    {
      id: '5',
      name: 'Capucines BB',
      category: 'Capucines',
      image: beautyImage,
      link: '/handbags/capucines-bb',
      description: 'The compact Capucines BB in Taurillon leather features the iconic LV closure.',
      price: '$5,500'
    },
    {
      id: '6',
      name: 'Capucines PM',
      category: 'Capucines',
      image: shoesImage,
      link: '/handbags/capucines-pm',
      description: 'The Capucines PM strikes the perfect balance between elegance and practicality.',
      price: '$5,800'
    }
  ];

  const newnessProducts = [
    {
      id: '7',
      name: 'OnTheGo GM',
      category: 'Newness',
      image: handbagImage,
      link: '/handbags/onthego-gm',
      description: 'The OnTheGo GM in Monogram Giant canvas is a spacious and contemporary tote.',
      price: '$3,100'
    },
    {
      id: '8',
      name: 'Twist MM',
      category: 'Newness',
      image: beautyImage,
      link: '/handbags/twist-mm',
      description: 'The Twist MM handbag features the signature LV turn-lock closure in Epi leather.',
      price: '$4,400'
    },
    {
      id: '9',
      name: 'Coussin PM',
      category: 'Newness',
      image: shoesImage,
      link: '/handbags/coussin-pm',
      description: 'The Coussin PM in Monogram Puffy Lambskin offers a contemporary take on luxury.',
      price: '$3,900'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection
          title="Women's Handbags"
          subtitle="Discover Louis Vuitton's iconic handbag collections"
          buttonText="Explore All Handbags"
          buttonLink="/handbags/all"
          backgroundImage={handbagImage}
          textPosition="center"
          textColor="light"
        />

        {/* Breadcrumb */}
        <section className="py-6 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-muted-foreground">
              <span>Women</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">Handbags</span>
            </nav>
          </div>
        </section>

        {/* LV Icons Collection */}
        <ProductGrid
          title="LV Icons"
          subtitle="Timeless designs that define Louis Vuitton heritage"
          products={lvIconsProducts}
          columns={3}
          viewAllLink="/handbags/lv-icons"
        />

        {/* Capucines Collection */}
        <section className="py-20 bg-muted/30">
          <ProductGrid
            title="Capucines Collection"
            subtitle="Named after the street where Louis Vuitton opened his first store"
            products={capucinesProducts}
            columns={3}
            viewAllLink="/handbags/capucines"
          />
        </section>

        {/* Newness Collection */}
        <ProductGrid
          title="New Arrivals"
          subtitle="The latest additions to our handbag collections"
          products={newnessProducts}
          columns={3}
          viewAllLink="/handbags/new"
        />

        {/* Savoir-Faire Section */}
        <section className="py-20 bg-luxury-light-gray">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
                  The Art of Leather Craftsmanship
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Each Louis Vuitton handbag represents hours of meticulous craftsmanship. 
                  Our artisans use traditional techniques passed down through generations, 
                  combined with modern innovation to create pieces that stand the test of time.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the selection of the finest leathers to the precision of every stitch, 
                  every detail reflects our commitment to excellence and luxury.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={handbagImage} 
                  alt="Craftsmanship" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Handbags;