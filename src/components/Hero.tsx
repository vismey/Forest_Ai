
import { Button } from "@/components/ui/button";
import { Play, Leaf, Music, MessageCircle, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight font-serif">
                Welcome to <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Forest</span>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed font-light">
                Meet <span className="text-orange-600 font-medium">Pebble</span>, your wise fox companion. 
                Discover mindful focus zones, calming soundscapes, and a peaceful space to share your heart 
                with our gentle forest community. 🦊✨
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg px-8 py-4 font-medium shadow-xl">
                🦊 Chat with Pebble
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-300 hover:bg-green-50 font-medium">
                <Play className="w-5 h-5 mr-2" />
                🌲 Explore Forest
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 font-serif">10K+</div>
                <div className="text-sm text-gray-600 font-light">Forest Friends</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Music className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 font-serif">500+</div>
                <div className="text-sm text-gray-600 font-light">Calming Tracks</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 font-serif">24/7</div>
                <div className="text-sm text-gray-600 font-light">Peaceful Space</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Pebble */}
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-green-100">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 via-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 text-2xl animate-bounce">🌿</div>
                  <div className="absolute top-8 right-8 text-lg animate-pulse">🍃</div>
                  <div className="absolute bottom-8 left-8 text-sm animate-bounce delay-300">✨</div>
                  <div className="absolute bottom-4 right-4 text-xl animate-pulse delay-500">🌸</div>
                </div>
                
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto flex items-center justify-center shadow-lg animate-pulse">
                    <div className="text-white text-4xl">🦊</div>
                  </div>
                  <div>
                    <div className="text-gray-700 font-bold text-2xl font-serif mb-2">Hello! I'm Pebble</div>
                    <div className="text-gray-600 font-light text-lg mb-4">Your Wise Fox Companion</div>
                    <div className="text-gray-500 text-sm font-light italic max-w-xs mx-auto leading-relaxed">
                      "Ready to explore the peaceful depths of your mind and connect with nature's wisdom? 
                      Let's wander through the forest together... 🌲✨"
                    </div>
                  </div>
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
