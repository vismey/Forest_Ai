
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  TestTube, 
  Pill, 
  Heart, 
  Brain, 
  Baby, 
  Stethoscope,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Video,
      title: "Online Consultations",
      description: "Connect with certified doctors via video call from the comfort of your home",
      features: ["24/7 Availability", "Secure Video Calls", "Digital Prescriptions"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TestTube,
      title: "Lab Tests",
      description: "Book lab tests online and get reports delivered digitally",
      features: ["Home Sample Collection", "Digital Reports", "150+ Tests Available"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Pill,
      title: "Online Pharmacy",
      description: "Order medicines online with prescription and get home delivery",
      features: ["Prescription Upload", "Home Delivery", "Genuine Medicines"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const specializations = [
    { icon: Heart, title: "Cardiology", count: "120+ Doctors" },
    { icon: Brain, title: "Neurology", count: "85+ Doctors" },
    { icon: Baby, title: "Pediatrics", count: "95+ Doctors" },
    { icon: Stethoscope, title: "General Medicine", count: "200+ Doctors" },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From online consultations to medicine delivery, we provide complete healthcare solutions tailored to your needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Popular Specializations</h3>
            <p className="text-gray-600">Find expert doctors across various medical specialties</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <spec.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{spec.title}</h4>
                  <p className="text-sm text-gray-600">{spec.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 mr-2" />
              <span className="font-semibold">Available 24/7</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Need Immediate Consultation?</h3>
            <p className="mb-4 opacity-90">Connect with our on-call doctors right now</p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
