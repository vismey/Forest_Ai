
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'pebble';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello, beautiful soul! 🦊✨ I'm Pebble, your gentle forest companion. I'm here to listen, support, and share this peaceful moment with you. What's on your heart today?",
      sender: 'pebble',
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generatePebbleResponse = (userMessage: string): string => {
    const responses = [
      "What a beautiful thought to share with me! 🦊💚 Your words touch my forest heart deeply. Tell me more about what's inspiring you today, dear friend.",
      "I can feel the warmth in your message, sweet soul! 🌸✨ The woodland creatures are gathering around to listen too. What else would you like to explore together?",
      "Your gentle spirit shines through every word! 🦊🍃 I'm here in this sacred grove, ready to walk alongside you on whatever path you're traveling today.",
      "Oh, how your message makes the fireflies dance with joy! ⭐🦊 You bring such light to our forest sanctuary. What other wonders are blooming in your heart?",
      "Thank you for trusting me with your thoughts, precious friend! 🌿💙 Every word you share helps our forest grow more beautiful. I'm listening with my whole heart.",
      "What a gift your presence is to our woodland home! 🦊🌺 Your thoughts are like morning dew on flower petals - pure and refreshing. Please, share more if your heart calls you to."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    
    // Show fox animation
    setShowAnimation(true);
    setIsTyping(true);

    // Hide animation after 2 seconds and show Pebble's response
    setTimeout(() => {
      setShowAnimation(false);
      
      const pebbleMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generatePebbleResponse(currentMessage),
        sender: 'pebble',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, pebbleMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-gentle-float">🌲</div>
        <div className="absolute top-40 right-20 text-4xl animate-gentle-pulse">🍃</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-gentle-float">🌸</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-gentle-pulse">🦋</div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Forest
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="text-4xl">🦊</div>
            <div>
              <h1 className="text-3xl font-bold text-green-800 font-serif">Chat with Pebble</h1>
              <p className="text-green-600 font-light">Your gentle forest companion</p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center border-b border-green-100">
            <CardTitle className="text-2xl font-serif text-green-800 flex items-center justify-center gap-2">
              🌿 Sacred Forest Conversation 🌿
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0">
            {/* Messages Area */}
            <ScrollArea className="h-96 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-green-600 text-white'
                          : 'bg-green-100 text-green-800 border border-green-200'
                      }`}
                    >
                      {message.sender === 'pebble' && (
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">🦊</span>
                          <span className="text-xs font-semibold text-green-700">Pebble</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <div className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Animated Fox - Shows when user sends message */}
                {showAnimation && (
                  <div className="flex justify-center py-8">
                    <div className="text-center">
                      <div className="text-8xl animate-bounce mb-4">🦊</div>
                      <div className="text-2xl animate-pulse">✨ 💭 ✨</div>
                      <p className="text-green-700 font-light mt-2">Pebble is thinking...</p>
                    </div>
                  </div>
                )}
                
                {/* Typing Indicator */}
                {isTyping && !showAnimation && (
                  <div className="flex justify-start">
                    <div className="bg-green-100 text-green-800 border border-green-200 px-4 py-3 rounded-2xl max-w-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🦊</span>
                        <span className="text-xs font-semibold text-green-700">Pebble</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="border-t border-green-100 p-6">
              <div className="flex gap-3">
                <Textarea
                  placeholder="Share your thoughts with Pebble... 🌸"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 min-h-[60px] border-green-200 focus:border-green-400 resize-none"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim() || isTyping}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 h-auto"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-green-600 mt-2 text-center">
                Press Enter to send • Shift + Enter for new line
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
