import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Brain, 
  Heart, 
  Users, 
  HeartHandshake, 
  Baby, 
  Zap, 
  Clock, 
  Shield,
  ArrowRight 
} from "lucide-react";
import { ArtisticBackground } from "./ArtisticBackground";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your personal mental health journey and goals.",
      features: ["CBT & DBT approaches", "Anxiety & depression", "Trauma recovery"],
      duration: "50 minutes",
      popular: true
    },
    {
      icon: HeartHandshake,
      title: "Couples Therapy",
      description: "Strengthen your relationship with evidence-based couple counseling techniques.",
      features: ["Conflict resolution", "Intimacy building", "Trust rebuilding"],
      duration: "60 minutes",
      popular: false
    },
    {
      icon: Users,
      title: "Group Therapy",
      description: "Connect with others facing similar challenges in a supportive group environment.",
      features: ["Peer support", "Shared experiences", "Cost-effective"],
      duration: "90 minutes",
      popular: false
    },
    {
      icon: Baby,
      title: "Family Therapy",
      description: "Improve family dynamics and communication for healthier relationships.",
      features: ["Parent-child issues", "Sibling conflicts", "Blended families"],
      duration: "60 minutes",
      popular: false
    },
    {
      icon: Zap,
      title: "Crisis Intervention",
      description: "Immediate support for mental health emergencies and crisis situations.",
      features: ["24/7 availability", "Rapid response", "Emergency support"],
      duration: "Variable",
      popular: false
    },
    {
      icon: Heart,
      title: "Wellness Coaching",
      description: "Holistic approach to mental wellness, including lifestyle and mindfulness.",
      features: ["Stress management", "Work-life balance", "Goal setting"],
      duration: "45 minutes",
      popular: false
    }
  ];

  return (
    <section id="services" className="w-full py-20 relative overflow-hidden">
      <ArtisticBackground variant="section">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl text-white">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Our range of evidence-based therapeutic services are designed to meet you wherever you are on your mental health journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/80 backdrop-blur-sm">
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="space-y-4">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-lg flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <IconComponent className="w-6 h-6 text-white relative z-10" />
                  </motion.div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center space-x-2 text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <Clock className="w-4 h-4" />
                    <span>Duration: {service.duration}</span>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-blue-600">Licensed & Certified Therapists</span>
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">Not sure which service is right for you?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a free 15-minute consultation to discuss your needs and find the perfect therapeutic approach for your journey.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule Free Consultation
            </Button>
          </div>
        </motion.div>
      </div>
      </ArtisticBackground>
    </section>
  );
}