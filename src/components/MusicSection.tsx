
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Heart } from "lucide-react";

const MusicSection = () => {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null);

  const tracks = [
    {
      id: 1,
      title: "Forest Dreams",
      category: "Resting",
      description: "Gentle rainfall with soft piano melodies",
      duration: "45:00",
      icon: "🌙",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Morning Fox Run",
      category: "Working Out",
      description: "Energetic forest sounds with upbeat rhythms",
      duration: "32:15",
      icon: "🏃‍♂️",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Deep Forest Focus",
      category: "Studying",
      description: "Nature sounds with minimal distractions",
      duration: "60:00",
      icon: "📚",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "Sunset Meditation",
      category: "Meditation",
      description: "Peaceful birds and gentle breeze",
      duration: "25:30",
      icon: "🧘‍♀️",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      title: "Creative Stream",
      category: "Creativity",
      description: "Flowing water with inspiring melodies",
      duration: "38:45",
      icon: "🎨",
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 6,
      title: "Pebble's Lullaby",
      category: "Sleep",
      description: "Ultra-soft forest whispers for deep rest",
      duration: "120:00",
      icon: "😴",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  const togglePlay = (trackId: number) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">🎵 Forest Soundscapes 🎵</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Curated audio experiences to enhance every moment of your day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <Card key={track.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${track.color}`} />
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{track.icon}</div>
                <CardTitle className="text-xl font-serif text-gray-800">{track.title}</CardTitle>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {track.category}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center font-light leading-relaxed">
                  {track.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Volume2 className="w-4 h-4" />
                    {track.duration}
                  </span>
                  <Button variant="ghost" size="sm" className="text-pink-500 hover:text-pink-700">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  onClick={() => togglePlay(track.id)}
                  className={`w-full bg-gradient-to-r ${track.color} hover:opacity-90 text-white font-medium`}
                >
                  {playingTrack === track.id ? (
                    <>
                      <Pause className="w-4 h-4 mr-2" />
                      Playing...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Play Track
                    </>
                  )}
                </Button>

                {playingTrack === track.id && (
                  <div className="mt-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <div className="flex items-center gap-2 text-green-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Now playing in the forest...</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-100 to-blue-100 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">🎧 Connect Your Spotify</h3>
              <p className="text-gray-600 mb-6 font-light">
                Link your Spotify account to enjoy these tracks and discover more forest-inspired playlists
              </p>
              <Button className="bg-green-600 hover:bg-green-700 px-8 py-3">
                Connect Spotify
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
