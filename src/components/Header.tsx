
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
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-amber-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-2xl font-bold text-gray-900">Forest</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#focus" className="text-gray-600 hover:text-green-600 transition-colors">Focus Zone</a>
          <a href="#music" className="text-gray-600 hover:text-green-600 transition-colors">Music</a>
          <a href="#chat" className="text-gray-600 hover:text-green-600 transition-colors">Chat</a>
          <a href="#thoughts" className="text-gray-600 hover:text-green-600 transition-colors">Thoughts</a>
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Pebble</span>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            Start Journey
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
            <a href="#focus" className="block text-gray-600 hover:text-green-600">Focus Zone</a>
            <a href="#music" className="block text-gray-600 hover:text-green-600">Music</a>
            <a href="#chat" className="block text-gray-600 hover:text-green-600">Chat</a>
            <a href="#thoughts" className="block text-gray-600 hover:text-green-600">Thoughts</a>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Start Journey
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
