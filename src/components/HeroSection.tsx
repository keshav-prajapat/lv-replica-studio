import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  textPosition?: 'left' | 'center' | 'right';
  textColor?: 'light' | 'dark';
  height?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  textPosition = 'center',
  textColor = 'light',
  height = 'h-screen'
}: HeroSectionProps) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTextAlignment = () => {
    switch (textPosition) {
      case 'left':
        return 'justify-start text-left';
      case 'right':
        return 'justify-end text-right';
      default:
        return 'justify-center text-center';
    }
  };

  return (
    <section className={`relative ${height} overflow-hidden parallax-container`}>
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-120 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Content */}
      <div className={`relative z-10 flex flex-col ${getTextAlignment()} items-center h-full px-6 py-20`}>
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <p className={`text-sm uppercase tracking-widest mb-4 ${
              textColor === 'light' ? 'text-white/80' : 'text-gray-600'
            }`}>
              {subtitle}
            </p>
          )}
          
          <h1 className={`luxury-serif text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight ${
            textColor === 'light' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h1>
          
          {description && (
            <p className={`text-lg md:text-xl mb-8 max-w-2xl ${
              textColor === 'light' ? 'text-white/90' : 'text-gray-700'
            }`}>
              {description}
            </p>
          )}
          
          <Button
            variant={textColor === 'light' ? 'outline' : 'default'}
            className={`group px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
              textColor === 'light' 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
            onClick={() => window.open(buttonLink, '_self')}
          >
            {buttonText}
            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;