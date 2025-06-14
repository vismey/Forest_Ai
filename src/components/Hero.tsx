
import { Button } from "@/components/ui/button";
import { Play, Leaf, Music, MessageCircle, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-amber-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">Forest</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Meet Pebble, your friendly AI fox companion. Discover focus zones, calming music, 
                and a peaceful space to share your thoughts with our forest community.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                Chat with Pebble
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Explore Dashboard
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Forest Friends</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Music className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Calming Tracks</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Peaceful Space</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Pebble */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-amber-100 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto flex items-center justify-center">
                    <div className="text-white text-2xl">🦊</div>
                  </div>
                  <div className="text-gray-600 font-medium">Hi! I'm Pebble</div>
                  <div className="text-sm text-gray-500">Your AI Fox Companion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
