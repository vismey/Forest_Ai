
import { Button } from "@/components/ui/button";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 healthcare-gradient rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-2xl font-bold text-gray-900">InfiHeal</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
          <a href="#doctors" className="text-gray-600 hover:text-blue-600 transition-colors">Find Doctors</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-4">
            <a href="#services" className="block text-gray-600 hover:text-blue-600">Services</a>
            <a href="#doctors" className="block text-gray-600 hover:text-blue-600">Find Doctors</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
