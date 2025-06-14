
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Star, Clock } from "lucide-react";

const BooksSection = () => {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  const books = [
    {
      id: 1,
      title: "Morning Dew Whispers",
      category: "Joy & Happiness",
      description: "A gentle collection of sunrise meditations to awaken your inner light and spark daily joy.",
      readTime: "15 mins",
      mood: "happy",
      icon: "🌅",
      color: "from-yellow-400 to-orange-500",
      preview: "Today, I choose to see the world through eyes of wonder. Like morning dew catching the first rays of sun, every moment holds the potential for magic...",
      chapters: ["The Dance of Dawn", "Gratitude Garden", "Smile Seeds", "Light Within"]
    },
    {
      id: 2,
      title: "Healing Rain Stories",
      category: "Comfort & Healing",
      description: "Tender stories that embrace your sadness and guide you gently toward inner peace and self-compassion.",
      readTime: "20 mins",
      mood: "sad",
      icon: "🌧️",
      color: "from-blue-400 to-indigo-500",
      preview: "Your tears are not weakness, dear one. They are the rain that nourishes the garden of your soul, preparing it for new growth...",
      chapters: ["Embracing the Storm", "Rivers of Release", "The Art of Gentle Healing", "Tomorrow's Rainbow"]
    },
    {
      id: 3,
      title: "Lightning Dreams",
      category: "Energy & Passion",
      description: "High-energy tales that channel your excitement into purposeful action and sustained motivation.",
      readTime: "12 mins",
      mood: "excited",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      preview: "Your excitement is pure electricity, a force of nature waiting to illuminate the world. Let's harness this beautiful energy...",
      chapters: ["Spark of Inspiration", "Thunder Courage", "Electric Dreams", "Power Within"]
    },
    {
      id: 4,
      title: "Calm Forest Paths",
      category: "Peace & Grounding",
      description: "Soothing walks through anxiety into tranquility, with practical steps for finding your center.",
      readTime: "18 mins",
      mood: "anxious",
      icon: "🌿",
      color: "from-green-400 to-teal-500",
      preview: "Breathe, beautiful soul. In this moment, you are safe. Let the forest teach you the art of simply being...",
      chapters: ["Roots of Calm", "Breathing Trees", "Still Waters", "Inner Sanctuary"]
    },
    {
      id: 5,
      title: "Twilight Serenity",
      category: "Mindfulness & Presence",
      description: "Peaceful reflections that honor your calm state and deepen your connection to the present moment.",
      readTime: "25 mins",
      mood: "calm",
      icon: "🌙",
      color: "from-indigo-400 to-purple-500",
      preview: "In stillness, we find everything. You have discovered the sacred space where peace lives. Let's explore it together...",
      chapters: ["Evening Reflections", "Sacred Silence", "Moon Meditations", "Eternal Now"]
    },
    {
      id: 6,
      title: "Rest & Renewal",
      category: "Recovery & Self-Care",
      description: "Gentle wisdom for tired souls, offering permission to rest and practical tools for restoration.",
      readTime: "10 mins",
      mood: "tired",
      icon: "🛌",
      color: "from-purple-400 to-blue-500",
      preview: "Rest is not laziness, dear one. It is the sacred pause that allows your soul to catch up with your spirit...",
      chapters: ["Permission to Rest", "Sacred Sleep", "Gentle Recovery", "Renewed Energy"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">📚 Pebble's Wisdom Library 📚</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Curated soul-nourishing stories and wisdom for every mood and moment of your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <Card 
              key={book.id} 
              className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden cursor-pointer ${selectedBook === book.id ? 'ring-2 ring-orange-400' : ''}`}
              onClick={() => setSelectedBook(selectedBook === book.id ? null : book.id)}
            >
              <div className={`h-2 bg-gradient-to-r ${book.color}`} />
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{book.icon}</div>
                <CardTitle className="text-xl font-serif text-gray-800">{book.title}</CardTitle>
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  {book.category}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center font-light leading-relaxed">
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {book.readTime}
                  </span>
                  <Button variant="ghost" size="sm" className="text-pink-500 hover:text-pink-700">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {selectedBook === book.id && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border-l-4 border-orange-400">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Preview
                      </h4>
                      <p className="text-sm text-gray-700 font-light italic leading-relaxed">
                        "{book.preview}"
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-medium text-gray-800 text-sm">Chapters:</h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {book.chapters.map((chapter, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Star className="w-3 h-3 text-orange-400" />
                              {chapter}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  className={`w-full bg-gradient-to-r ${book.color} hover:opacity-90 text-white font-medium`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {selectedBook === book.id ? 'Start Reading' : 'Open Book'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-100 to-amber-100 border-0">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🦊</div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Personalized Reading with Pebble</h3>
              <p className="text-gray-600 mb-6 font-light">
                Let me recommend the perfect book based on your current mood and needs. I'll guide you through each chapter with gentle wisdom.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 px-8 py-3">
                🌟 Get My Personal Recommendation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
