
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold">Forest</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your peaceful digital sanctuary where Pebble the fox guides you through 
              mindful moments, creative inspiration, and meaningful connections.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#focus" className="text-gray-300 hover:text-white transition-colors">Focus Zone</a></li>
              <li><a href="#music" className="text-gray-300 hover:text-white transition-colors">Calming Music</a></li>
              <li><a href="#chat" className="text-gray-300 hover:text-white transition-colors">Chat with Pebble</a></li>
              <li><a href="#thoughts" className="text-gray-300 hover:text-white transition-colors">Thoughts Sharing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mindful Sessions</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Chat with Pebble 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">hello@forest.app</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-300">
                  Deep in the Digital Forest<br />
                  Where peace meets technology<br />
                  Everywhere & Nowhere ✨
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Forest. All rights reserved. | Growing mindfulness in the digital age, one peaceful moment at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
