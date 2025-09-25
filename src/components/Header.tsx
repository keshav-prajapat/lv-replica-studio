import { useState } from 'react';
import { Menu, Search, Phone, User, ShoppingBag, X, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const navigate = useNavigate();

  type MenuCategory = {
    name: string;
    sections: {
      [key: string]: {
        name: string;
        items: string[];
      };
    };
  };

  type MenuCategories = {
    [key: string]: MenuCategory;
  };

  const menuCategories: MenuCategories = {
    'gifts-personalization': {
      name: 'Gifts and Personalization',
      sections: {
        'gifts': {
          name: 'Art of Gifting',
          items: ['Gifts for Women', 'Gifts for Men', 'Gifts for Children', 'Gift Cards']
        },
        'personalization': {
          name: 'Personalization',
          items: ['My LV Heritage', 'My LV World Tour', 'Hot Stamping', 'Engraving']
        }
      }
    },
    'new': {
      name: 'New',
      sections: {
        'latest': {
          name: 'Latest',
          items: ['New for Women', 'New for Men', 'New in Watches', 'New in Jewelry']
        }
      }
    },
    'bags-leather': {
      name: 'Bags and Small Leather Goods',
      sections: {
        'womens-bags': {
          name: "Women's Bags",
          items: ['All Handbags', 'LV Icons', 'Newness', 'Monogram Signature', 'Capucines', 'Twist', 'Neverfull', 'Speedy', 'OnTheGo', 'Petite Malle']
        },
        'womens-leather': {
          name: "Women's Wallets and Small Leather Goods",
          items: ['All Small Leather Goods', 'Wallets', 'Card Holders', 'Pouches', 'Phone Cases']
        },
        'mens-bags': {
          name: "Men's Bags",
          items: ['All Bags', 'Briefcases', 'Messenger Bags', 'Backpacks', 'Travel Bags', 'Shoulder Bags']
        },
        'mens-leather': {
          name: "Men's Wallets and Small Leather Goods",
          items: ['All Small Leather Goods', 'Wallets', 'Card Holders', 'Belts', 'Key Holders']
        }
      }
    },
    'women': {
      name: 'Women',
      sections: {
        'highlights': {
          name: 'Highlights',
          items: ['Louis Vuitton Travels With Grace Coddington', 'LV x Murakami', 'Capucines Collection']
        },
        'handbags': {
          name: 'Handbags',
          items: ['All Handbags', 'LV Icons', 'Newness', 'Monogram Signature', 'Capucines', 'Twist', 'Neverfull', 'Speedy', 'OnTheGo', 'Petite Malle']
        },
        'leather-goods': {
          name: 'Wallets and Small Leather Goods',
          items: ['All Small Leather Goods', 'Wallets', 'Card Holders', 'Pouches', 'Phone Cases']
        },
        'travel': {
          name: 'Travel',
          items: ['All Travel', 'Rolling Luggage', 'Soft Luggage', 'Travel Accessories', 'Luggage Sets']
        },
        'accessories': {
          name: 'Accessories',
          items: ['All Accessories', 'Silk Scarves', 'Shawls', 'Hats and Gloves', 'Hair Accessories', 'Technology']
        },
        'jewelry': {
          name: 'Fashion Jewelry',
          items: ['All Fashion Jewelry', 'Necklaces', 'Earrings', 'Bracelets', 'Rings']
        },
        'ready-to-wear': {
          name: 'Ready to Wear',
          items: ['All Ready to Wear', 'Dresses', 'Tops', 'Jackets', 'Knitwear', 'Pants', 'Skirts']
        },
        'shoes': {
          name: 'Shoes',
          items: ['All Shoes', 'Sneakers', 'Boots', 'Sandals', 'Loafers', 'Pumps', 'Ballerinas']
        }
      }
    },
    'men': {
      name: 'Men',
      sections: {
        'highlights': {
          name: 'Highlights',
          items: ['LV Fall Collection', 'Quilted Monogram Overshirt', 'Trio Messenger', 'Only LV Cap']
        },
        'bags': {
          name: 'Bags',
          items: ['All Bags', 'Briefcases', 'Messenger Bags', 'Backpacks', 'Travel Bags', 'Shoulder Bags']
        },
        'leather-goods': {
          name: 'Wallets and Small Leather Goods',
          items: ['All Small Leather Goods', 'Wallets', 'Card Holders', 'Belts', 'Key Holders']
        },
        'ready-to-wear': {
          name: 'Ready to Wear',
          items: ['All Ready to Wear', 'Jackets', 'Shirts', 'T-Shirts', 'Knitwear', 'Pants', 'Shorts']
        },
        'shoes': {
          name: 'Shoes',
          items: ['All Shoes', 'Sneakers', 'Boots', 'Loafers', 'Sandals', 'Formal Shoes']
        },
        'accessories': {
          name: 'Accessories',
          items: ['All Accessories', 'Ties', 'Pocket Squares', 'Hats', 'Sunglasses', 'Technology']
        }
      }
    },
    'beauty': {
      name: 'Perfumes and Beauty',
      sections: {
        'highlights': {
          name: 'Available Now',
          items: ['La Beauté Louis Vuitton', 'LV Rouge - Matte Lipstick', 'LV Baume - Lip Balm', 'LV Ombres - Eyeshadow Palette']
        },
        'perfumes': {
          name: 'Perfumes',
          items: ['All Perfumes', "Women's Perfumes", "Men's Perfumes", 'Unisex Perfumes', 'Travel Size']
        },
        'makeup': {
          name: 'Makeup',
          items: ['All Makeup', 'Lipsticks', 'Foundation', 'Eyeshadows', 'Mascara', 'Nail Polish']
        }
      }
    },
    'jewelry': {
      name: 'Jewelry',
      sections: {
        'fine-jewelry': {
          name: 'Fine Jewelry',
          items: ['All Fine Jewelry', 'Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Watches']
        }
      }
    },
    'watches': {
      name: 'Watches',
      sections: {
        'collections': {
          name: 'Collections',
          items: ['All Watches', 'Tambour', 'Escale', 'Emprise', 'Voyagez']
        }
      }
    }
  };

  return (
    <>
      <header className="relative bg-background border-b border-border z-50">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(true)}
              className="p-0 hover:bg-transparent"
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="p-0 hover:bg-transparent"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>

          {/* Center Logo */}
          <Link to="/" className="luxury-serif text-2xl font-semibold tracking-wider">
            LOUIS VUITTON
          </Link>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-sm">
              Call Us
            </Button>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 overflow-hidden">
          <div className="h-screen flex">
            {/* Left Panel - Main Categories */}
            <div className="w-80 bg-background border-r border-border p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="luxury-serif text-2xl font-semibold">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveCategory(null);
                    setActiveSubCategory(null);
                  }}
                  className="p-0 hover:bg-transparent"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <nav className="space-y-1">
                {Object.entries(menuCategories).map(([key, category]) => (
                  <button
                    key={key}
                    className={`w-full text-left p-3 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground flex items-center justify-between ${
                      activeCategory === key ? 'bg-accent text-accent-foreground' : ''
                    }`}
                    onMouseEnter={() => {
                      setActiveCategory(key);
                      setActiveSubCategory(null);
                    }}
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </nav>

              {/* Footer Links */}
              <div className="mt-8 pt-8 border-t border-border space-y-2">
                <Link to="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
                <Link to="/maison" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">The Maison Louis Vuitton</Link>
                <Link to="/help" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Can we help you?</Link>
                <Link to="/sustainability" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Sustainability</Link>
                <Link to="/stores" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Find a Store</Link>
              </div>
            </div>

            {/* Middle Panel - Subcategories */}
            {activeCategory && (
              <div className="w-80 bg-muted/30 p-8 overflow-y-auto">
                <h3 className="luxury-serif text-xl font-semibold mb-6">
                  {menuCategories[activeCategory].name}
                </h3>
                
                <nav className="space-y-1">
                  {Object.entries(menuCategories[activeCategory].sections).map(([sectionKey, section]) => (
                    <button
                      key={sectionKey}
                      className={`w-full text-left p-3 rounded-md transition-colors hover:bg-background hover:shadow-sm flex items-center justify-between ${
                        activeSubCategory === sectionKey ? 'bg-background shadow-sm' : ''
                      }`}
                      onMouseEnter={() => setActiveSubCategory(sectionKey)}
                    >
                      <span className="text-sm font-medium">{section.name}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Right Panel - Items */}
            {activeCategory && activeSubCategory && (
              <div className="flex-1 p-8 overflow-y-auto">
                <h4 className="luxury-serif text-lg font-semibold mb-6">
                  {menuCategories[activeCategory].sections[activeSubCategory].name}
                </h4>
                
                <nav className="grid grid-cols-1 gap-2">
                  {menuCategories[activeCategory].sections[activeSubCategory].items.map((item) => (
                    <Link
                      key={item}
                      to={`/${activeCategory}/${activeSubCategory}/${item.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                      className="block p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveCategory(null);
                        setActiveSubCategory(null);
                      }}
                    >
                      <span className="text-sm">{item}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-background z-50">
          <div className="min-h-screen px-6 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Search Header */}
              <div className="flex justify-between items-center mb-12">
                <h2 className="luxury-serif text-3xl font-semibold">Search</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-0 hover:bg-transparent"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Search Input */}
              <div className="relative mb-8">
                <Input
                  placeholder="Search for products, collections..."
                  className="w-full text-lg py-6 pl-6 pr-12 border-0 border-b border-border bg-transparent focus:ring-0 focus:border-luxury-gold rounded-none"
                  autoFocus
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              </div>

              {/* Search Suggestions */}
              <div className="space-y-4">
                <h3 className="font-medium text-muted-foreground text-sm uppercase tracking-wide">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {['Neverfull', 'Speedy', 'Capucines', 'Twist', 'OnTheGo', 'Pochette Métis'].map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;