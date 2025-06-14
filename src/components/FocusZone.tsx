
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Heart, Music, BookOpen, Target } from "lucide-react";

const FocusZone = () => {
  const [mood, setMood] = useState('');
  const [showPebbleChat, setShowPebbleChat] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [pebbleResponse, setPebbleResponse] = useState('');

  const moods = [
    { value: 'happy', label: '😊 Happy', color: 'text-yellow-600' },
    { value: 'sad', label: '😢 Sad', color: 'text-blue-600' },
    { value: 'excited', label: '🤩 Excited', color: 'text-orange-600' },
    { value: 'anxious', label: '😰 Anxious', color: 'text-red-600' },
    { value: 'calm', label: '😌 Calm', color: 'text-green-600' },
    { value: 'tired', label: '😴 Tired', color: 'text-purple-600' }
  ];

  const handleMoodSelect = (selectedMood: string) => {
    setMood(selectedMood);
    setShowPebbleChat(true);
    
    const responses = {
      happy: "That's wonderful! 🦊 Your joy brightens the whole forest. What's making you feel so happy today?",
      sad: "I'm here with you, friend. 🦊 Even the tallest trees have rainy days. Would you like to share what's on your heart?",
      excited: "Your energy is contagious! 🦊 The forest creatures can feel your excitement. Tell me what's got you so thrilled!",
      anxious: "Take a deep breath with me. 🦊 Feel the forest's calm embrace. I'm here to help you find peace.",
      calm: "How beautiful. 🦊 You're radiating the same serenity as a quiet forest morning. Let's savor this moment together.",
      tired: "Rest is sacred, dear friend. 🦊 Even the forest sleeps. Would you like me to guide you through some gentle breathing?"
    };
    
    setPebbleResponse(responses[selectedMood as keyof typeof responses]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">🌲 Focus Zone 🌲</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Welcome to your peaceful sanctuary. Let Pebble guide you through mindful moments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mood Poll */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-green-800">How are you feeling today?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={mood} onValueChange={handleMoodSelect} className="grid grid-cols-2 gap-4">
                {moods.map((moodOption) => (
                  <div key={moodOption.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={moodOption.value} id={moodOption.value} />
                    <Label htmlFor={moodOption.value} className={`cursor-pointer ${moodOption.color} font-medium`}>
                      {moodOption.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {showPebbleChat && (
                <div className="mt-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🦊</div>
                    <div>
                      <p className="font-semibold text-green-800 mb-2">Pebble says:</p>
                      <p className="text-green-700 font-light leading-relaxed">{pebbleResponse}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Interactive Features */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-green-800 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Forest Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 pr-4">
                <div className="space-y-6">
                  {/* Journal Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <h3 className="font-semibold text-gray-800">Digital Journal</h3>
                    </div>
                    <Textarea
                      placeholder="Share your thoughts with the forest... 🌿"
                      value={journalEntry}
                      onChange={(e) => setJournalEntry(e.target.value)}
                      className="min-h-[100px] border-green-200 focus:border-green-400"
                    />
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Save to Journal
                    </Button>
                  </div>

                  {/* Music Controls */}
                  <div className="space-y-3 pt-4 border-t border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Music className="w-5 h-5 text-blue-500" />
                        <h3 className="font-semibold text-gray-800">Forest Sounds</h3>
                      </div>
                      <Switch
                        checked={musicEnabled}
                        onCheckedChange={setMusicEnabled}
                      />
                    </div>
                    {musicEnabled && (
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">🎵 Forest ambiance playing softly...</p>
                        <div className="mt-2 space-y-1">
                          <div className="text-xs text-blue-600">🌊 River Sounds</div>
                          <div className="text-xs text-blue-600">🐦 Bird Songs</div>
                          <div className="text-xs text-blue-600">🍃 Gentle Wind</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Focus Timer */}
                  <div className="space-y-3 pt-4 border-t border-green-200">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-gray-800">Focus Timer</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm">5 min</Button>
                      <Button variant="outline" size="sm">15 min</Button>
                      <Button variant="outline" size="sm">30 min</Button>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FocusZone;
