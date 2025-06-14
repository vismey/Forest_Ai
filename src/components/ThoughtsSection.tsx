
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, MessageCircle, Share, Lock } from "lucide-react";

const ThoughtsSection = () => {
  const [thought, setThought] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [thoughts, setThoughts] = useState([
    {
      id: 1,
      content: "The forest taught me that growth happens slowly, but it's always happening. 🌱",
      author: "Anonymous Fox Friend",
      hearts: 24,
      time: "2 hours ago"
    },
    {
      id: 2,
      content: "Sometimes I sit by the stream and listen to its wisdom. Water always finds its way. 🌊",
      author: "Wandering Soul",
      hearts: 18,
      time: "4 hours ago"
    },
    {
      id: 3,
      content: "Pebble reminded me today that even the smallest kindness can light up someone's entire forest. ✨",
      author: "Grateful Heart",
      hearts: 32,
      time: "6 hours ago"
    },
    {
      id: 4,
      content: "I used to fear the quiet, but now I understand it's where my truest thoughts live. 🍃",
      author: "Peaceful Traveler",
      hearts: 15,
      time: "8 hours ago"
    }
  ]);

  const shareThought = () => {
    if (thought.trim()) {
      const newThought = {
        id: thoughts.length + 1,
        content: thought,
        author: "You",
        hearts: 0,
        time: "Just now"
      };
      
      // Always add to thoughts array, but only show publicly if not private
      setThoughts([newThought, ...thoughts]);
      setThought('');
    }
  };

  const likeThought = (id: number) => {
    setThoughts(thoughts.map(t => 
      t.id === id ? { ...t, hearts: t.hearts + 1 } : t
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">💭 Forest Thoughts 💭</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Share your heart with the forest community. Every thought plants a seed of connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Share Your Thoughts */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-purple-800 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Share Your Heart
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea
                placeholder="What's growing in your heart today? Share your thoughts with the forest... 🌿✨"
                value={thought}
                onChange={(e) => setThought(e.target.value)}
                className="min-h-[150px] border-purple-200 focus:border-purple-400 text-gray-700"
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="private-mode"
                    checked={isPrivate}
                    onCheckedChange={setIsPrivate}
                  />
                  <Label htmlFor="private-mode" className="flex items-center gap-2 text-gray-600">
                    {isPrivate ? <Lock className="w-4 h-4" /> : <Share className="w-4 h-4" />}
                    {isPrivate ? 'Keep Private' : 'Share with Forest'}
                  </Label>
                </div>
                
                <div className="text-sm text-gray-500">
                  {thought.length}/500 characters
                </div>
              </div>

              <Button
                onClick={shareThought}
                disabled={!thought.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium"
              >
                {isPrivate ? 'Save to Personal Journal' : 'Share with the Forest'}
              </Button>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🦊</div>
                  <div>
                    <p className="font-semibold text-green-800 mb-1">Pebble's Wisdom:</p>
                    <p className="text-green-700 text-sm font-light">
                      "Every thought you share becomes a gift to someone who needs to hear it. 
                      Your words have the power to heal hearts across the forest. 🌟"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Community Thoughts */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-purple-800 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Forest Whispers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 pr-4">
                <div className="space-y-6">
                  {thoughts.map((thoughtItem) => (
                    <div key={thoughtItem.id} className="group">
                      <Card className={`border-purple-100 hover:shadow-md transition-shadow ${thoughtItem.author === 'You' ? 'bg-gradient-to-r from-green-50 to-purple-50 border-green-200' : 'bg-gradient-to-r from-white to-purple-50'}`}>
                        <CardContent className="p-6">
                          <p className="text-gray-700 leading-relaxed mb-4 font-light italic">
                            "{thoughtItem.content}"
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              <div className={`font-medium ${thoughtItem.author === 'You' ? 'text-green-600' : 'text-purple-600'}`}>
                                {thoughtItem.author}
                                {thoughtItem.author === 'You' && (
                                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                    Your thought
                                  </span>
                                )}
                              </div>
                              <div>{thoughtItem.time}</div>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => likeThought(thoughtItem.id)}
                              className="text-pink-500 hover:text-pink-700 hover:bg-pink-50"
                            >
                              <Heart className="w-4 h-4 mr-1" />
                              {thoughtItem.hearts}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="mt-6 text-center">
                <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                  Load More Thoughts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThoughtsSection;
