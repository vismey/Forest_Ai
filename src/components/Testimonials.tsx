
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Adams",
      condition: "Hypertension Management",
      rating: 5,
      text: "InfiHeal has been a game-changer for managing my blood pressure. The doctors are incredibly knowledgeable and the online consultations are so convenient. I can get my check-ups without taking time off work.",
      location: "San Francisco, CA"
    },
    {
      name: "Robert Chen",
      condition: "Diabetes Care",
      rating: 5,
      text: "As a diabetic, regular monitoring is crucial. The doctors here helped me create a perfect management plan. The lab test booking feature is fantastic - results come quickly and are easy to understand.",
      location: "New York, NY"
    },
    {
      name: "Maria Gonzalez",
      condition: "Pediatric Care",
      rating: 5,
      text: "Finding a good pediatrician was challenging until I found InfiHeal. Dr. Rodriguez is amazing with my kids, and the video consultations work perfectly when they're feeling unwell.",
      location: "Los Angeles, CA"
    },
    {
      name: "Thomas Wilson",
      condition: "Mental Health Support",
      rating: 5,
      text: "The mental health support I've received has been outstanding. The psychiatrists are compassionate and professional. Online therapy sessions have made it so much easier to maintain regular appointments.",
      location: "Chicago, IL"
    },
    {
      name: "Sarah Johnson",
      condition: "Dermatology Treatment",
      rating: 5,
      text: "I was skeptical about online dermatology consultations, but the doctors here are thorough. They helped diagnose my skin condition quickly and the prescribed treatment worked perfectly.",
      location: "Houston, TX"
    },
    {
      name: "Michael Brown",
      condition: "General Health",
      rating: 5,
      text: "InfiHeal makes healthcare accessible and affordable. The doctors are professional, the platform is easy to use, and getting medicines delivered is incredibly convenient. Highly recommended!",
      location: "Phoenix, AZ"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who have experienced quality healthcare through our platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-blue-200" />
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-600">{testimonial.condition}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1,000+</div>
              <div className="text-gray-600">Expert Doctors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
