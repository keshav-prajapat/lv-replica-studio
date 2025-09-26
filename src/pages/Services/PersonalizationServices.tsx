import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Type, Star, Heart, Users, Gift } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import beautyImage from '@/assets/product-beauty.jpg';

const PersonalizationServices = () => {
  const services = [
    {
      icon: Type,
      title: 'Hot Stamping',
      description: 'Add initials or text to your leather goods with our signature hot stamping service.',
      features: ['Gold, silver, and colored foils', 'Multiple font styles', 'Up to 3 initials'],
      timeframe: '2-3 weeks',
      price: 'From $75'
    },
    {
      icon: Palette,
      title: 'Hand Painting',
      description: 'Commission a unique hand-painted design on your Louis Vuitton piece.',
      features: ['Custom artwork', 'Premium paints', 'Artist collaboration'],
      timeframe: '4-6 weeks',
      price: 'From $500'
    },
    {
      icon: Star,
      title: 'Monogram',
      description: 'Create your personal monogram with our exclusive design service.',
      features: ['Custom monogram design', 'Multiple color options', 'Heritage craftsmanship'],
      timeframe: '3-4 weeks',
      price: 'From $150'
    },
    {
      icon: Heart,
      title: 'Special Occasion',
      description: 'Celebrate special moments with commemorative personalization.',
      features: ['Wedding dates', 'Anniversary messages', 'Special symbols'],
      timeframe: '2-4 weeks',
      price: 'From $100'
    },
    {
      icon: Users,
      title: 'Family Crests',
      description: 'Honor your heritage with traditional family crest applications.',
      features: ['Historical research', 'Authentic reproduction', 'Premium materials'],
      timeframe: '6-8 weeks',
      price: 'From $800'
    },
    {
      icon: Gift,
      title: 'Gift Messages',
      description: 'Add a personal touch to gifts with elegant message engraving.',
      features: ['Multiple languages', 'Elegant typography', 'Gift packaging'],
      timeframe: '1-2 weeks',
      price: 'From $50'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        title="Personalization Services"
        subtitle="Make It Uniquely Yours"
        buttonText="Explore Services"
        buttonLink="#services"
        backgroundImage={beautyImage}
        textPosition="center"
        textColor="light"
      />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
              Artisan Personalization
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Transform your Louis Vuitton piece into a personal statement with our 
              exclusive personalization services. Our skilled artisans combine traditional 
              techniques with contemporary creativity to create something truly unique.
            </p>
          </div>

          <div id="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-luxury-light-gray rounded-lg group-hover:bg-luxury-gold group-hover:text-white transition-colors">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <CardTitle className="luxury-serif text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="w-fit mt-1">{service.price}</Badge>
                    </div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-luxury-gold rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Timeframe:</span>
                      <span>{service.timeframe}</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-luxury-light-gray rounded-lg p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="luxury-serif text-3xl font-light mb-4">
                Our Personalization Process
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From concept to completion, we ensure every detail meets our exacting standards.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'Discuss your vision with our specialists' },
                { step: '02', title: 'Design', desc: 'Create and approve your personalized design' },
                { step: '03', title: 'Craftsmanship', desc: 'Our artisans bring your vision to life' },
                { step: '04', title: 'Delivery', desc: 'Receive your uniquely personalized piece' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="luxury-serif text-2xl text-luxury-gold mb-4">{item.step}</div>
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="luxury-serif text-3xl font-light mb-6">
              Ready to Create Something Unique?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation with our personalization specialists to explore 
              the possibilities for your Louis Vuitton piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Book Consultation</Button>
              <Button variant="outline" size="lg">View Portfolio</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PersonalizationServices;