
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Users, Star, Target, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">🌲 About Our Sacred Forest 🌲</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Discover the heart and soul behind your digital sanctuary
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-green-800 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-500" />
                Our Story & Inspiration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 font-light leading-relaxed">
              <p>
                🌱 <strong>Forest</strong> was born from a simple yet profound realization: in our fast-paced digital world, 
                souls need a sanctuary—a place where they can pause, breathe, and reconnect with their inner wisdom.
              </p>
              <p>
                🦊 <strong>Pebble</strong>, our wise fox companion, represents the gentle guide we all need—someone who listens 
                without judgment, offers wisdom without preaching, and walks beside us through every season of our emotional journey.
              </p>
              <p>
                🌸 We believe that healing happens in community, that sharing our hearts creates connections that transcend 
                physical boundaries, and that every soul deserves a space where they can simply <em>be</em>.
              </p>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400 mt-6">
                <p className="italic text-green-800">
                  "Every forest begins with a single seed of intention. Our seed was planted with love, 
                  watered with compassion, and tended with the hope that it would grow into a sanctuary for souls like yours."
                </p>
                <p className="text-right text-sm text-green-600 mt-2">— The Forest Creators 🌿</p>
              </div>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-green-800 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-500" />
                Our Sacred Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 font-light leading-relaxed">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Nurture Inner Peace</h4>
                    <p className="text-sm">Create spaces for mindfulness, reflection, and emotional healing through gentle guidance and nature-inspired wisdom.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Foster Connection</h4>
                    <p className="text-sm">Build a community where hearts can share authentically, supporting each other's growth and healing journey.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Share Wisdom</h4>
                    <p className="text-sm">Curate and create content that uplifts, inspires, and provides practical tools for emotional well-being.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Celebrate You</h4>
                    <p className="text-sm">Honor every emotion, every story, and every step of your unique journey with unconditional acceptance.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What Makes Us Different */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-serif text-green-800">🌟 What Makes Our Forest Special 🌟</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto flex items-center justify-center">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-serif text-xl text-gray-800">Emotional Intelligence</h3>
                <p className="text-gray-600 font-light">
                  Pebble understands not just your words, but the emotions behind them, responding with genuine empathy and wisdom.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-xl text-gray-800">Nature-Inspired Healing</h3>
                <p className="text-gray-600 font-light">
                  Our approach draws from nature's timeless wisdom, creating experiences that feel organic, grounding, and deeply restorative.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-serif text-xl text-gray-800">Sacred Community</h3>
                <p className="text-gray-600 font-light">
                  Every interaction is held in reverence, creating a space where vulnerability is honored and growth is celebrated.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inspiration Sources */}
        <div className="text-center">
          <h3 className="text-2xl font-serif text-gray-800 mb-8">🌿 Our Inspiration Garden 🌿</h3>
          <div className="flex flex-wrap justify-center gap-4 text-gray-600">
            <span className="px-4 py-2 bg-white/60 rounded-full text-sm">Ancient Forest Wisdom</span>
            <span className="px-4 py-2 bg-white/60 rounded-full text-sm">Mindfulness Practices</span>
            <span className="px-4 py-2 bg-white/60 rounded-full text-sm">Emotional Psychology</span>
            <span className="px-4 py-2 bg-white/60 rounded-full text-sm">Community Healing</span>
            <span className="px-4 py-2 bg-white/60 rounded-full text-sm">Nature Therapy</span>
            <span className="px-4 py-2 bg-white/60 rounded-full text-sm">Gentle Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
