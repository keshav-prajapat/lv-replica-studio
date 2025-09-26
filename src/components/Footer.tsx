import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Help',
      links: [
        { name: 'FAQ', href: '/help/faq' },
        { name: 'Product Care', href: '/help/product-care' },
        { name: 'Stores', href: '/stores' },
        { name: 'Size Guide', href: '/help/size-guide' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Book an Appointment', href: '/appointment' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Repairs', href: '/services/repairs' },
        { name: 'Personalization', href: '/services/personalization' },
        { name: 'Art of Gifting', href: '/services/gifting' },
        { name: 'Download our Apps', href: '/mobile-app' }
      ]
    },
    {
      title: 'About Louis Vuitton',
      links: [
        { name: 'Fashion Shows', href: '/fashion-shows' },
        { name: 'Arts & Culture', href: '/arts-culture' },
        { name: 'La Maison', href: '/la-maison' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Latest News', href: '/news' },
        { name: 'Careers', href: '/careers' },
        { name: 'Foundation Louis Vuitton', href: '/foundation' }
      ]
    }
  ];

  return (
    <footer className="bg-background border-t">
      {/* Newsletter Section */}
      <div className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="luxury-serif text-3xl font-light mb-4">
              Email Sign-up
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sign up for Louis Vuitton emails and receive the latest news from the Maison, 
              including exclusive online pre-launches and new collections
            </p>
          </div>
          <div className="max-w-md mx-auto flex gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Link to="/" className="luxury-serif text-2xl font-light block mb-4">
                LOUIS VUITTON
              </Link>
              <p className="text-sm text-muted-foreground mb-6">
                Since 1854, Louis Vuitton has been synonymous with unique design, 
                technical innovation and craftmanship, built on a tradition of excellence.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Youtube className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link to="/sitemap" className="hover:text-foreground">
                Sitemap
              </Link>
              <Link to="/legal" className="hover:text-foreground">
                Legal & Privacy
              </Link>
              <Link to="/cookies" className="hover:text-foreground">
                Cookies
              </Link>
              <Link to="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
            </div>
            
            <div className="text-sm text-muted-foreground">
              International (English)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;