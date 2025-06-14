
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
  const [moodGif, setMoodGif] = useState('');

  const moods = [
    { value: 'happy', label: '😊 Happy', color: 'text-yellow-600', gif: '🌞✨🦋' },
    { value: 'sad', label: '😢 Sad', color: 'text-blue-600', gif: '🌧️💙🤗' },
    { value: 'excited', label: '🤩 Excited', color: 'text-orange-600', gif: '🎉⭐🎊' },
    { value: 'anxious', label: '😰 Anxious', color: 'text-red-600', gif: '🌸🕯️🫂' },
    { value: 'calm', label: '😌 Calm', color: 'text-green-600', gif: '🍃💚🧘‍♀️' },
    { value: 'tired', label: '😴 Tired', color: 'text-purple-600', gif: '🌙💤🛌' }
  ];

  const handleMoodSelect = (selectedMood: string) => {
    setMood(selectedMood);
    setShowPebbleChat(true);
    
    const selectedMoodData = moods.find(m => m.value === selectedMood);
    setMoodGif(selectedMoodData?.gif || '');
    
    const responses = {
      happy: "Oh, what a radiant soul you are today! 🦊✨ Your happiness is like sunshine breaking through the forest canopy, warming every creature's heart. Tell me, sweet friend, what beautiful moment has painted this joy across your spirit? Let's celebrate together! 🌞🎉",
      sad: "My dear gentle heart, I'm right here beside you in this quiet moment. 🦊💙 Even the mightiest oak trees bend in storms, and your sadness is valid and beautiful. Would you like to share what's weighing on your precious heart? Sometimes the forest listens better than words can heal. 🌧️🤗",
      excited: "Your energy is absolutely magical! 🦊⭐ I can feel your excitement dancing through the entire forest - even the fireflies are twinkling brighter! The woodland creatures are gathering to hear about this wonderful thing that has your spirit soaring. Please, share your joy with us! 🎊🌟",
      anxious: "Breathe with me, beautiful soul. 🦊🌸 Feel the gentle forest breeze carrying away your worries. You're safe here in our sacred grove. Let's ground ourselves together - can you feel the earth beneath your feet? I'm here to help you find your inner peace, one breath at a time. 🕯️💚",
      calm: "What a gift you bring to our forest today! 🦊🍃 Your serenity flows like a gentle stream, bringing peace to every corner of our woodland home. You radiate the same tranquil energy as morning dew on flower petals. Would you like to share this beautiful calm with others, or shall we simply bask in this sacred stillness together? 🧘‍♀️💚",
      tired: "Oh, precious soul, rest is one of nature's greatest gifts. 🦊🌙 Even the forest sleeps deeply, recharging for tomorrow's magic. Your tiredness tells a story of giving, of living fully. Shall I guide you through some gentle forest breathing, or would you prefer I simply sit with you in comfortable silence? 💤✨"
    };
    
    setPebbleResponse(responses[selectedMood as keyof typeof responses]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">🌲 Sacred Focus Grove 🌲</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Welcome to your peaceful sanctuary, dear soul. Let Pebble guide you through mindful moments of self-discovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mood Poll */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif text-green-800">How is your beautiful heart feeling today?</CardTitle>
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
                <div className="mt-6 p-6 bg-green-100 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🦊</div>
                    <div className="flex-1">
                      <p className="font-semibold text-green-800 mb-2">Pebble whispers gently:</p>
                      {/* Animated mood response */}
                      <div className="text-4xl mb-3 text-center animate-pulse">
                        {moodGif}
                      </div>
                      <p className="text-green-700 font-light leading-relaxed">{pebbleResponse}</p>
                      <div className="mt-4 space-y-2">
                        <Button size="sm" variant="outline" className="mr-2">Tell me more 💫</Button>
                        <Button size="sm" variant="outline">I need guidance 🌟</Button>
                      </div>
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
                Sacred Forest Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96 pr-4">
                <div className="space-y-6">
                  {/* Journal Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-pink-500" />
                      <h3 className="font-semibold text-gray-800">Soul Journal 📖</h3>
                    </div>
                    <Textarea
                      placeholder="Pour your heart onto these sacred pages... What whispers does your soul want to share today? 🌿✨"
                      value={journalEntry}
                      onChange={(e) => setJournalEntry(e.target.value)}
                      className="min-h-[100px] border-green-200 focus:border-green-400"
                    />
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      🌸 Save to Sacred Journal
                    </Button>
                  </div>

                  {/* Music Controls */}
                  <div className="space-y-3 pt-4 border-t border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Music className="w-5 h-5 text-blue-500" />
                        <h3 className="font-semibold text-gray-800">Forest Symphony 🎵</h3>
                      </div>
                      <Switch
                        checked={musicEnabled}
                        onCheckedChange={setMusicEnabled}
                      />
                    </div>
                    {musicEnabled && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700 mb-2">🎵 Nature's healing melody flows gently...</p>
                        <div className="space-y-2">
                          <div className="text-xs text-blue-600 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            🌊 Babbling Brook Whispers
                          </div>
                          <div className="text-xs text-blue-600 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></span>
                            🐦 Dawn Chorus Melodies
                          </div>
                          <div className="text-xs text-blue-600 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></span>
                            🍃 Gentle Wind Songs
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Focus Timer */}
                  <div className="space-y-3 pt-4 border-t border-green-200">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-gray-800">Mindful Moments ⏰</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm" className="text-xs">🌸 5 min</Button>
                      <Button variant="outline" size="sm" className="text-xs">🌿 15 min</Button>
                      <Button variant="outline" size="sm" className="text-xs">🌳 30 min</Button>
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
