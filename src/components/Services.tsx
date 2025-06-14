
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, TestTube, Pill, Calendar, Video, Truck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Online Consultation",
      description: "Connect with certified doctors from the comfort of your home",
      color: "text-blue-600"
    },
    {
      icon: TestTube,
      title: "Lab Tests",
      description: "Book lab tests and get reports delivered digitally",
      color: "text-green-600"
    },
    {
      icon: Pill,
      title: "Medicine Delivery",
      description: "Order medicines online and get them delivered to your doorstep",
      color: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "Appointment Booking",  
      description: "Easy online booking system for in-person consultations",
      color: "text-orange-600"
    },
    {
      icon: Stethoscope,
      title: "Health Monitoring",
      description: "Track your health metrics and get personalized insights",
      color: "text-red-600"
    },
    {
      icon: Truck,
      title: "Emergency Services",
      description: "24/7 emergency medical assistance and ambulance services",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to make medical care accessible, 
            convenient, and affordable for everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.color} bg-gray-50 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
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
