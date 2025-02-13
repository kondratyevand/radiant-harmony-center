
import { useState, useEffect } from "react";
import { Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-playfair font-semibold text-neutral-900">PRESENT FUTURE LAB</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#science">Science</NavLink>
            <NavLink href="#business">For Business</NavLink>
            <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-inter">
              Shop Now
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-neutral-600 hover:text-neutral-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl border-t">
            <div className="px-4 pt-2 pb-6 space-y-4">
              <MobileNavLink href="#products">Products</MobileNavLink>
              <MobileNavLink href="#science">Science</MobileNavLink>
              <MobileNavLink href="#business">For Business</MobileNavLink>
              <button className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-inter">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-neutral-700 hover:text-neutral-900 font-inter font-medium transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block py-3 text-neutral-700 hover:text-neutral-900 font-inter font-medium border-b border-neutral-100"
  >
    {children}
  </a>
);

export default Navbar;
