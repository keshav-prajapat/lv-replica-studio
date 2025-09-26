import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="luxury-serif text-4xl md:text-5xl font-light mb-8">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're here to assist you. Whether you have questions about our products, 
              need personalization services, or require support, our team is ready to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="luxury-serif text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({...formData, subject: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="order">Order Support</SelectItem>
                        <SelectItem value="personalization">Personalization Services</SelectItem>
                        <SelectItem value="repair">Repair Services</SelectItem>
                        <SelectItem value="store">Store Information</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="luxury-serif text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Client Services</h3>
                    <p className="text-muted-foreground">+1 866 VUITTON (884-8866)</p>
                    <p className="text-muted-foreground">Monday - Saturday: 9 AM - 11 PM EST</p>
                    <p className="text-muted-foreground">Sunday: 10 AM - 9 PM EST</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Email Support</h3>
                    <p className="text-muted-foreground">contactus@louisvuitton.com</p>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Live Chat</h3>
                    <p className="text-muted-foreground">Available 24/7 for immediate assistance</p>
                    <Button variant="outline" className="mt-2">
                      Start Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="luxury-serif text-xl">Visit Our Stores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Experience Louis Vuitton in person at one of our boutiques worldwide.
                  </p>
                  <Button variant="outline" className="w-full">
                    Find a Store Near You
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="luxury-serif text-xl">Exclusive Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium">Personalization</h4>
                    <p className="text-sm text-muted-foreground">Make your pieces uniquely yours</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Repair Services</h4>
                    <p className="text-sm text-muted-foreground">Expert restoration and care</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Private Shopping</h4>
                    <p className="text-sm text-muted-foreground">One-on-one consultation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;