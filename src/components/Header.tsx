
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMeetPebble = () => {
    window.open('https://app.relevanceai.com/embed/chat-bubble.js?share-id=d7b62b/8765b50edd92-44a9-9b86-71521727508d/2eae873f-0cac-4a7f-aa24-c1ecde49edcd', '_blank');
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Enhanced Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            {/* Forest background */}
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
              {/* Fox silhouette */}
              <div className="text-orange-400 text-xl">🦊</div>
            </div>
            {/* Berry bush accent */}
            <div className="absolute -bottom-1 -right-1 text-xs">🫐</div>
          </div>
          <div>
            <span className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent font-serif">Forest</span>
            <div className="text-xs text-gray-500 font-light -mt-1">with Pebble 🦊</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#focus" className="text-gray-600 hover:text-green-600 transition-colors font-medium tracking-wide">🌲 Focus Zone</a>
          <a href="#music" className="text-gray-600 hover:text-green-600 transition-colors font-medium tracking-wide">🎵 Music</a>
          <a href="#books" className="text-gray-600 hover:text-green-600 transition-colors font-medium tracking-wide">📚 Books</a>
          <a href="#thoughts" className="text-gray-600 hover:text-green-600 transition-colors font-medium tracking-wide">💭 Thoughts</a>
          <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors font-medium tracking-wide">🌿 About</a>
        </nav>

        {/* Meet Pebble Button */}
        <div className="hidden md:flex items-center">
          <Button 
            onClick={handleMeetPebble}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium shadow-lg"
          >
            Meet Pebble 🦊
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
          <nav className="px-4 py-4 space-y-4">
            <a href="#focus" className="block text-gray-600 hover:text-green-600 font-medium">🌲 Focus Zone</a>
            <a href="#music" className="block text-gray-600 hover:text-green-600 font-medium">🎵 Music</a>
            <a href="#books" className="block text-gray-600 hover:text-green-600 font-medium">📚 Books</a>
            <a href="#thoughts" className="block text-gray-600 hover:text-green-600 font-medium">💭 Thoughts</a>
            <a href="#about" className="block text-gray-600 hover:text-green-600 font-medium">🌿 About</a>
            <Button 
              onClick={handleMeetPebble}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium"
            >
              Meet Pebble 🦊
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
