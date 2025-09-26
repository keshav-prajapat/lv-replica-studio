import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  services: string[];
  distance?: string;
}

const FindStore = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [stores] = useState<Store[]>([
    {
      id: '1',
      name: 'Louis Vuitton New York Fifth Avenue',
      address: '1 E 57th St',
      city: 'New York, NY 10022',
      phone: '+1 212-758-8877',
      hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-7PM',
      services: ['Personalization', 'Repairs', 'Private Shopping', 'Art of Gifting'],
      distance: '0.2 miles'
    },
    {
      id: '2',
      name: 'Louis Vuitton Beverly Hills',
      address: '295 N Rodeo Dr',
      city: 'Beverly Hills, CA 90210',
      phone: '+1 310-859-0457',
      hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-7PM',
      services: ['Personalization', 'Repairs', 'VIP Services'],
      distance: '1.1 miles'
    },
    {
      id: '3',
      name: 'Louis Vuitton Las Vegas CityCenter',
      address: '3720 Las Vegas Blvd S',
      city: 'Las Vegas, NV 89158',
      phone: '+1 702-262-6189',
      hours: 'Daily: 10AM-11PM',
      services: ['Personalization', 'Art of Gifting', 'Express Services'],
      distance: '2.5 miles'
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
              Find a Store
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover Louis Vuitton boutiques worldwide. Experience our exceptional 
              service and exclusive collections in prestigious locations.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                placeholder="Enter city, state, or zip code"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="flex-1"
              />
              <Button>Search</Button>
            </div>
          </div>

          {/* Store List */}
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {stores.map((store) => (
              <Card key={store.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="luxury-serif text-xl mb-2">{store.name}</CardTitle>
                      <CardDescription className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <p>{store.address}</p>
                          <p>{store.city}</p>
                        </div>
                      </CardDescription>
                    </div>
                    {store.distance && (
                      <Badge variant="secondary">{store.distance}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>{store.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{store.hours}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Services Available</h4>
                    <div className="flex flex-wrap gap-2">
                      {store.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindStore;