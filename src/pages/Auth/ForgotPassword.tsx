import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        toast({
          title: "Reset link sent!",
          description: "Please check your email for password reset instructions.",
        });
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="luxury-serif text-2xl text-center">
              Reset Password
            </CardTitle>
            <CardDescription className="text-center">
              {success 
                ? "We've sent you a password reset link"
                : "Enter your email to receive a password reset link"
              }
            </CardDescription>
          </CardHeader>
          {!success ? (
            <form onSubmit={handleResetPassword}>
              <CardContent className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </Button>
                <Link 
                  to="/auth/login" 
                  className="flex items-center justify-center text-sm text-luxury-gold hover:underline"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Sign In
                </Link>
              </CardFooter>
            </form>
          ) : (
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  Please check your email ({email}) for a password reset link. 
                  Click the link in the email to reset your password.
                </AlertDescription>
              </Alert>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Didn't receive the email? Check your spam folder or{' '}
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-luxury-gold hover:underline"
                  >
                    try again
                  </button>
                </p>
                <Link 
                  to="/auth/login" 
                  className="flex items-center justify-center text-sm text-luxury-gold hover:underline"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Sign In
                </Link>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;