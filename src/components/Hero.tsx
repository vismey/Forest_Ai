import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Leaf, Music, MessageCircle, Users, Volume2, VolumeX, Sun, Moon, Trees } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

const Hero = () => {
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'forest'>('forest');

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'forest') => {
    setTheme(newTheme);
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight font-serif">
                🌲 Welcome to Your <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Sacred Sanctuary</span> 🌲
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed font-light">
                Where <span className="text-orange-600 font-medium">Pebble the Fox</span> awaits to guide your soul through 
                mindful adventures. Discover inner peace, share your heart, and let nature's wisdom embrace your spirit. ✨🦊
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link to="/chat">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg px-8 py-4 font-medium shadow-xl">
                  🦊 Meet Pebble
                </Button>
              </Link>
            </div>

            {/* Controls Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-green-100 shadow-lg">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                <Trees className="w-5 h-5 text-green-600" />
                Customize Your Forest Experience
              </h3>
              
              {/* Music Control */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {musicEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
                  <span className="text-gray-700">Forest Ambiance</span>
                </div>
                <Switch
                  checked={musicEnabled}
                  onCheckedChange={setMusicEnabled}
                />
              </div>

              {/* Theme Selection */}
              <div className="space-y-2">
                <span className="text-gray-700 text-sm">Forest Theme</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleThemeChange('light')}
                    className={`p-2 rounded-lg transition-all ${theme === 'light' ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    <Sun className="w-5 h-5 text-yellow-600" />
                  </button>
                  <button
                    onClick={() => handleThemeChange('dark')}
                    className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'bg-gray-800 border-2 border-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    <Moon className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={() => handleThemeChange('forest')}
                    className={`p-2 rounded-lg transition-all ${theme === 'forest' ? 'bg-green-100 border-2 border-green-400' : 'bg-gray-100 hover:bg-gray-200'}`}
                  >
                    <Trees className="w-5 h-5 text-green-600" />
                  </button>
                </div>
              </div>
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
                <div className="text-sm text-gray-600 font-light">Forest Souls</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Music className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 font-serif">500+</div>
                <div className="text-sm text-gray-600 font-light">Healing Melodies</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 font-serif">24/7</div>
                <div className="text-sm text-gray-600 font-light">Sacred Space</div>
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
                    <div className="text-gray-700 font-bold text-2xl font-serif mb-2">Greetings, Dear Soul! I'm Pebble</div>
                    <div className="text-gray-600 font-light text-lg mb-4">Your Gentle Fox Guide 🦊</div>
                    <div className="text-gray-500 text-sm font-light italic max-w-xs mx-auto leading-relaxed">
                      "Welcome to our sacred grove where hearts heal and spirits soar. 
                      I'm here to walk beside you through every season of your journey... 🌟🌲"
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
