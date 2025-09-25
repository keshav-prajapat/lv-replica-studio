import { useState } from 'react';
import { Menu, Search, Phone, User, ShoppingBag, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Women', path: '/women' },
    { name: 'Men', path: '/men' },
    { name: 'Handbags', path: '/handbags' },
    { name: 'Leather Goods', path: '/leather-goods' },
    { name: 'Shoes', path: '/shoes' },
    { name: 'Watches & Jewelry', path: '/watches-jewelry' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Perfumes & Beauty', path: '/beauty' },
    { name: 'Art of Living', path: '/art-of-living' },
  ];

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
        <div className="fixed inset-0 bg-background z-50 overflow-y-auto luxury-scrollbar">
          <div className="min-h-screen px-6 py-8">
            {/* Menu Header */}
            <div className="flex justify-between items-center mb-12">
              <h2 className="luxury-serif text-3xl font-semibold">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
                className="p-0 hover:bg-transparent"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Menu Items */}
            <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <h3 className="luxury-serif text-2xl font-medium mb-2 transition-colors duration-300 group-hover:text-luxury-gold">
                    {item.name}
                  </h3>
                  <div className="h-px bg-border group-hover:bg-luxury-gold transition-colors duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </Link>
              ))}
            </nav>

            {/* Menu Footer */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                  <h4 className="font-medium mb-4">Customer Services</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
                    <li><Link to="/size-guide" className="hover:text-foreground transition-colors">Size Guide</Link></li>
                    <li><Link to="/shipping" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">About Louis Vuitton</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><Link to="/about" className="hover:text-foreground transition-colors">Our Heritage</Link></li>
                    <li><Link to="/craftsmanship" className="hover:text-foreground transition-colors">Savoir-Faire</Link></li>
                    <li><Link to="/sustainability" className="hover:text-foreground transition-colors">Sustainability</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Services</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><Link to="/personalization" className="hover:text-foreground transition-colors">Personalization</Link></li>
                    <li><Link to="/art-of-gifting" className="hover:text-foreground transition-colors">Art of Gifting</Link></li>
                    <li><Link to="/care" className="hover:text-foreground transition-colors">Care Instructions</Link></li>
                  </ul>
                </div>
              </div>
            </div>
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