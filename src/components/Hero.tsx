
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface FallingItem {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  type: 'mask' | 'light' | 'panel';
  rotation: number;
}

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState<FallingItem[]>([]);

  useEffect(() => {
    setIsVisible(true);
    // Generate falling items
    const generatedItems: FallingItem[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Random x position (0-100%)
      delay: Math.random() * 5, // Random delay (0-5s)
      duration: 7 + Math.random() * 7, // Random duration (7-14s)
      size: 30 + Math.random() * 40, // Random size (30-70px)
      type: ['mask', 'light', 'panel'][Math.floor(Math.random() * 3)] as 'mask' | 'light' | 'panel',
      rotation: Math.random() * 360, // Random rotation (0-360deg)
    }));
    setItems(generatedItems);
  }, []);

  const getItemPath = (type: 'mask' | 'light' | 'panel') => {
    switch (type) {
      case 'mask':
        return (
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            fill="currentColor"
          />
        );
      case 'light':
        return (
          <path
            d="M12 1L15.5 8.5H8.5L12 1ZM12 23L8.5 15.5H15.5L12 23ZM1 12L8.5 8.5V15.5L1 12ZM23 12L15.5 15.5V8.5L23 12Z"
            fill="currentColor"
          />
        );
      case 'panel':
        return (
          <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
        );
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Falling Items Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute transform opacity-20"
            style={{
              left: `${item.x}%`,
              top: '-100px',
              width: `${item.size}px`,
              height: `${item.size}px`,
              animation: `fall ${item.duration}s linear ${item.delay}s infinite`,
              transform: `rotate(${item.rotation}deg)`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className={`w-full h-full ${
                item.type === 'mask'
                  ? 'text-gold-400'
                  : item.type === 'light'
                  ? 'text-gold-300'
                  : 'text-gold-500'
              }`}
            >
              {getItemPath(item.type)}
            </svg>
          </div>
        ))}
      </div>

      {/* Glowing Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-glow animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className={`text-center`}>
          {/* Badge */}
          <div className={`inline-block transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold-100 text-gold-800">
              Discover Light Therapy
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`mt-6 font-playfair transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="block text-4xl sm:text-6xl font-semibold text-gray-900">
              Transform Your Wellness
            </span>
            <span className="block text-xl sm:text-2xl mt-3 text-gray-500">
              Southeast Asia's Premier Light Therapy Solutions
            </span>
          </h1>

          {/* Description */}
          <p className={`mt-6 max-w-2xl mx-auto text-lg text-gray-600 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Experience the future of wellness with our cutting-edge light therapy technology. 
            Scientifically proven, personally transformative.
          </p>

          {/* CTA Buttons */}
          <div className={`mt-10 flex justify-center gap-4 transition-all duration-700 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="group inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gold-500 hover:bg-gold-600 transition-colors">
              Experience the Glow
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-gold-600 bg-gold-50 hover:bg-gold-100 transition-colors">
              Learn More
            </button>
          </div>

          {/* Trust Badges */}
          <div className={`mt-16 transition-all duration-700 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-sm font-medium text-gray-500 mb-4">Trusted by Leading Healthcare Providers</p>
            <div className="flex justify-center space-x-8 opacity-75">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-24 bg-gray-200 rounded-md animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
