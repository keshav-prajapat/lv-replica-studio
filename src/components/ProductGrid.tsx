import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  link: string;
  description?: string;
}

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  columns?: 2 | 3 | 4;
  showViewAll?: boolean;
  viewAllLink?: string;
}

const ProductGrid = ({ 
  title, 
  subtitle, 
  products, 
  columns = 3, 
  showViewAll = true,
  viewAllLink = "#"
}: ProductGridProps) => {
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              {subtitle}
            </p>
          )}
          <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
            {title}
          </h2>
          {showViewAll && (
            <Button
              variant="outline"
              className="group px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open(viewAllLink, '_self')}
            >
              View All
              <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>

        {/* Products Grid */}
        <div className={`grid ${getGridCols()} gap-8`}>
          {products.map((product) => (
            <div
              key={product.id}
              className="group product-card-hover"
              onClick={() => window.open(product.link, '_self')}
            >
              {/* Product Image */}
              <div className="relative aspect-square mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="image-overlay" />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="luxury-serif text-xl font-medium group-hover:text-luxury-gold transition-colors duration-300">
                  {product.name}
                </h3>
                {product.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Hover Indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center text-sm font-medium">
                  <span>Explore Collection</span>
                  <ChevronRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;