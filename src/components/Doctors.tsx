
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Award, Users } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      experience: "15 years",
      rating: 4.9,
      reviews: 234,
      location: "New York, NY",
      availability: "Available Today",
      image: "/placeholder.svg",
      languages: ["English", "Spanish"],
      qualifications: "MD, FACC",
      consultationFee: "$150"
    },
    {
      name: "Dr. Michael Chen",
      specialization: "Dermatologist",
      experience: "12 years",
      rating: 4.8,
      reviews: 189,
      location: "Los Angeles, CA",
      availability: "Available Tomorrow",
      image: "/placeholder.svg",
      languages: ["English", "Mandarin"],
      qualifications: "MD, FAAD",
      consultationFee: "$120"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialization: "Pediatrician",
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      location: "Chicago, IL",
      availability: "Available Today",
      image: "/placeholder.svg",
      languages: ["English", "Spanish"],
      qualifications: "MD, FAAP",
      consultationFee: "$130"
    },
    {
      name: "Dr. James Wilson",
      specialization: "Orthopedic Surgeon",
      experience: "18 years",
      rating: 4.7,
      reviews: 298,
      location: "Houston, TX",
      availability: "Available in 2 days",
      image: "/placeholder.svg",
      languages: ["English"],
      qualifications: "MD, FAAOS",
      consultationFee: "$200"
    },
    {
      name: "Dr. Priya Patel",
      specialization: "General Medicine",
      experience: "8 years",
      rating: 4.8,
      reviews: 145,
      location: "San Francisco, CA",
      availability: "Available Today",
      image: "/placeholder.svg",
      languages: ["English", "Hindi"],
      qualifications: "MD, FAAFP",
      consultationFee: "$100"
    },
    {
      name: "Dr. David Kim",
      specialization: "Psychiatrist",
      experience: "14 years",
      rating: 4.9,
      reviews: 187,
      location: "Seattle, WA",
      availability: "Available Tomorrow",
      image: "/placeholder.svg",
      languages: ["English", "Korean"],
      qualifications: "MD, Psychiatry",
      consultationFee: "$180"
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with certified and experienced doctors across various specializations. Book your consultation with just a few clicks.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 bg-white border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Doctor Image & Availability */}
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      doctor.availability === 'Available Today' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-orange-500 hover:bg-orange-600'
                    }`}
                  >
                    {doctor.availability}
                  </Badge>
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                    <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center bg-green-50 px-2 py-1 rounded-full mr-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">({doctor.reviews} reviews)</span>
                  </div>

                  {/* Experience & Location */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {doctor.languages.map((lang, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>

                  {/* Consultation Fee & Book Button */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">Consultation</p>
                      <p className="text-lg font-bold text-gray-900">{doctor.consultationFee}</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Doctors Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            <Users className="w-5 h-5 mr-2" />
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
