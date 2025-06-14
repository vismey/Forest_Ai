
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Focus, Music, MessageCircle, Heart, Timer, Headphones } from "lucide-react";

const Services = () => {
  const features = [
    {
      icon: Focus,
      title: "Focus Zone",
      description: "Create your perfect focus environment with ambient sounds and distraction-free tools",
      color: "text-green-600"
    },
    {
      icon: Music,
      title: "Calming Music",
      description: "Curated playlists of nature sounds, lo-fi beats, and peaceful melodies",
      color: "text-blue-600"
    },
    {
      icon: MessageCircle,
      title: "Chat with Pebble",
      description: "Your friendly AI fox companion is here to listen and offer gentle guidance",
      color: "text-orange-600"
    },
    {
      icon: Heart,
      title: "Thoughts Sharing",
      description: "A safe space to express your feelings and connect with the forest community",
      color: "text-pink-600"
    },
    {
      icon: Timer,
      title: "Mindful Sessions",
      description: "Guided meditation and breathing exercises to help you find inner peace",
      color: "text-purple-600"
    },
    {
      icon: Headphones,
      title: "Audio Escapes",
      description: "Immersive forest soundscapes to transport you to nature's embrace",
      color: "text-teal-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Forest Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a peaceful digital sanctuary designed to nurture your mind, 
            spark creativity, and foster meaningful connections.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${feature.color} bg-gray-50 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
