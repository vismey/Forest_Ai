
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Heart, Share } from "lucide-react";

const QuotesSection = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    {
      text: "In every walk with nature, one receives far more than they seek.",
      author: "John Muir",
      category: "Nature's Wisdom",
      color: "from-green-500 to-emerald-600"
    },
    {
      text: "The quieter you become, the more you are able to hear.",
      author: "Rumi",
      category: "Inner Peace",
      color: "from-blue-500 to-cyan-600"
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
      category: "Self Discovery",
      color: "from-purple-500 to-pink-600"
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      category: "Authenticity",
      color: "from-orange-500 to-red-500"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
      category: "Growth",
      color: "from-teal-500 to-green-600"
    },
    {
      text: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama",
      category: "Joy",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">✨ Forest Wisdom ✨</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Timeless wisdom to nourish your soul and inspire your journey
          </p>
        </div>

        {/* Featured Quote */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${currentQuote.color}`} />
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="text-6xl mb-6">💎</div>
                <blockquote className="text-3xl font-light text-gray-800 leading-relaxed mb-6 font-serif italic">
                  "{currentQuote.text}"
                </blockquote>
                <div className="text-xl text-gray-600 font-medium">
                  — {currentQuote.author}
                </div>
                <div className={`inline-block mt-4 px-4 py-2 bg-gradient-to-r ${currentQuote.color} text-white rounded-full text-sm font-medium`}>
                  {currentQuote.category}
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <Button
                  onClick={nextQuote}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  New Wisdom
                </Button>
                <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.slice(0, 6).map((quote, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm ${
                index === currentQuoteIndex ? 'ring-2 ring-green-400 shadow-xl' : ''
              }`}
              onClick={() => setCurrentQuoteIndex(index)}
            >
              <div className={`h-1 bg-gradient-to-r ${quote.color}`} />
              <CardContent className="p-6">
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${quote.color} text-white rounded-full text-xs font-medium mb-4`}>
                  {quote.category}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-3 font-light italic">
                  "{quote.text.substring(0, 100)}{quote.text.length > 100 ? '...' : ''}"
                </blockquote>
                <div className="text-sm text-gray-600 font-medium">
                  — {quote.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pebble's Daily Inspiration */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🦊</div>
                <div>
                  <h3 className="text-2xl font-serif text-gray-800 mb-3">Pebble's Daily Inspiration</h3>
                  <p className="text-gray-700 leading-relaxed font-light italic mb-4">
                    "Remember, dear friend, wisdom isn't about knowing all the answers. 
                    It's about asking the right questions and being open to the magic that unfolds. 
                    Each quote is a seed—plant it in your heart and watch how it grows. 🌱✨"
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Get Personal Daily Quote
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
