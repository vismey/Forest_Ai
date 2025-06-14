
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Shield,
  Award
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 healthcare-gradient rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">InfiHeal</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted healthcare partner providing quality medical services through innovative technology. Making healthcare accessible, affordable, and available 24/7.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-blue-600">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-blue-600">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-blue-600">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-blue-600">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Consultations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lab Tests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Pharmacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Health Checkups</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mental Health</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Specializations</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cardiology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dermatology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pediatrics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Orthopedics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Neurology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">General Medicine</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">support@infiheal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Healthcare Ave, Medical District, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Health Newsletter</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">SSL Secured</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              All consultations are secure and confidential
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 InfiHeal. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
