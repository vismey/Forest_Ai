import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Leaf, Music, MessageCircle, Users, Volume2, VolumeX, Sun, Moon, Trees } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Hero = () => {
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'forest'>('forest');

  useEffect(() => {
    // Apply theme changes to the document
    document.documentElement.classList.remove('light', 'dark', 'forest');
    document.documentElement.classList.add(theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    // Handle calming rain ambiance sound
    let audioContext: AudioContext | null = null;
    let rainInterval: NodeJS.Timeout | null = null;
    
    if (musicEnabled) {
      // Create calming rain sound using Web Audio API
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Create calming rain sound
      const createCalmingRainSound = () => {
        const oscillator = audioContext!.createOscillator();
        const gain = audioContext!.createGain();
        const filter = audioContext!.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gain);
        gain.connect(audioContext!.destination);
        
        // Softer, more calming frequency range
        oscillator.frequency.setValueAtTime(Math.random() * 800 + 200, audioContext!.currentTime);
        oscillator.type = 'sine'; // Smoother wave type
        
        // Low-pass filter for gentle rain effect
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, audioContext!.currentTime);
        filter.Q.setValueAtTime(0.5, audioContext!.currentTime);
        
        // Much softer volume for calming effect
        gain.gain.setValueAtTime(0.008, audioContext!.currentTime);
        
        oscillator.start();
        
        // Longer, gentler duration for each rain drop
        setTimeout(() => {
          gain.gain.exponentialRampToValueAtTime(0.001, audioContext!.currentTime + 0.3);
          setTimeout(() => oscillator.stop(), 300);
        }, Math.random() * 400 + 200);
      };
      
      // Create continuous but sparse calming rain effect
      rainInterval = setInterval(createCalmingRainSound, 120);
      
      // Clean up function
      return () => {
        if (rainInterval) clearInterval(rainInterval);
        if (audioContext) {
          audioContext.close();
        }
      };
    }
  }, [musicEnabled]);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'forest') => {
    setTheme(newTheme);
  };

  const getThemeStyles = () => {
    switch (theme) {
      case 'light':
        return {
          background: 'bg-gradient-to-br from-gray-50 via-white to-blue-50',
          textPrimary: 'text-gray-900',
          textSecondary: 'text-gray-600'
        };
      case 'dark':
        return {
          background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900',
          textPrimary: 'text-white',
          textSecondary: 'text-gray-300'
        };
      default: // forest
        return {
          background: 'bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50',
          textPrimary: 'text-gray-900',
          textSecondary: 'text-gray-600'
        };
    }
  };

  const styles = getThemeStyles();

  return (
    <section className={`${styles.background} py-20 relative overflow-hidden transition-all duration-500`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className={`text-5xl lg:text-7xl font-bold ${styles.textPrimary} leading-tight font-serif transition-colors duration-500`}>
                🌲 <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Grow Through What You Go Through</span> 🌲
              </h1>
              <p className={`text-2xl ${styles.textSecondary} leading-relaxed font-light transition-colors duration-500`}>
                Where <span className="text-orange-600 font-medium">Pebble the Fox</span> awaits to guide your soul through 
                mindful adventures. Discover inner peace, share your heart, and let nature's wisdom embrace your spirit. ✨🦊
              </p>
            </div>

            {/* Controls Section */}
            <div className={`${theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-6 space-y-4 border ${theme === 'dark' ? 'border-gray-700' : 'border-green-100'} shadow-lg transition-all duration-500`}>
              <h3 className={`font-semibold ${styles.textPrimary} flex items-center gap-2 transition-colors duration-500`}>
                <Trees className="w-5 h-5 text-green-600" />
                Customize Your Forest Experience
              </h3>
              
              {/* Music Control */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {musicEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
                  <span className={`${styles.textSecondary} transition-colors duration-500`}>Calming Rain 🌧️</span>
                </div>
                <Switch
                  checked={musicEnabled}
                  onCheckedChange={setMusicEnabled}
                />
              </div>

              {/* Theme Selection */}
              <div className="space-y-2">
                <span className={`${styles.textSecondary} text-sm transition-colors duration-500`}>Forest Theme</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleThemeChange('light')}
                    className={`p-2 rounded-lg transition-all duration-300 ${theme === 'light' ? 'bg-yellow-100 border-2 border-yellow-400 scale-110' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                  >
                    <Sun className={`w-5 h-5 text-yellow-600 ${theme === 'light' ? 'animate-spin' : ''}`} />
                  </button>
                  <button
                    onClick={() => handleThemeChange('dark')}
                    className={`p-2 rounded-lg transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 border-2 border-gray-600 scale-110' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                  >
                    <Moon className={`w-5 h-5 text-gray-700 dark:text-gray-300 ${theme === 'dark' ? 'animate-pulse' : ''}`} />
                  </button>
                  <button
                    onClick={() => handleThemeChange('forest')}
                    className={`p-2 rounded-lg transition-all duration-300 ${theme === 'forest' ? 'bg-green-100 border-2 border-green-400 scale-110' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                  >
                    <Trees className={`w-5 h-5 text-green-600 ${theme === 'forest' ? 'animate-bounce' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center transition-colors duration-500">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${styles.textPrimary} font-serif transition-colors duration-500`}>10K+</div>
                <div className={`text-sm ${styles.textSecondary} font-light transition-colors duration-500`}>Forest Souls</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center transition-colors duration-500">
                    <Music className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${styles.textPrimary} font-serif transition-colors duration-500`}>500+</div>
                <div className={`text-sm ${styles.textSecondary} font-light transition-colors duration-500`}>Healing Melodies</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center transition-colors duration-500">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${styles.textPrimary} font-serif transition-colors duration-500`}>24/7</div>
                <div className={`text-sm ${styles.textSecondary} font-light transition-colors duration-500`}>Sacred Space</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced Pebble */}
          <div className="relative">
            <div className={`${theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-3xl shadow-2xl p-8 border ${theme === 'dark' ? 'border-gray-700' : 'border-green-100'} transition-all duration-500`}>
              <div className={`w-full h-96 bg-gradient-to-br ${theme === 'dark' ? 'from-gray-700 via-gray-600 to-blue-900' : 'from-green-100 via-emerald-100 to-blue-100'} rounded-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500`}>
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
                    <div className={`${styles.textPrimary} font-bold text-2xl font-serif mb-2 transition-colors duration-500`}>Hello, I'm Pebble</div>
                    <div className={`${styles.textSecondary} font-light text-lg mb-4 transition-colors duration-500`}>Your Gentle Companion 🦊</div>
                    <div className={`${styles.textSecondary} text-sm font-light italic max-w-xs mx-auto leading-relaxed transition-colors duration-500`}>
                      "Welcome to this tranquil space where you can find moments of peace and reflection. 
                      I'm here to accompany you on your journey toward inner calm and mindfulness... 🌟🌲"
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
