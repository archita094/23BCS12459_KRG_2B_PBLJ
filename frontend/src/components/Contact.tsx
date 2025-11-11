import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Shield,
  CheckCircle,
  ArrowRight,
  Users
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArtisticBackground } from "./ArtisticBackground";
import { motion } from "motion/react";

export function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team directly",
      value: "(555) 123-4567",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message anytime",
      value: "contact@mindfulcare.com",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our comfortable office location",
      value: "123 Wellness Ave, San Francisco, CA",
      action: "Get Directions"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    { day: "Holidays", hours: "Emergency appointments only" }
  ];

  return (
    <section id="contact" className="w-full py-20 relative overflow-hidden">
      <ArtisticBackground variant="section">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl text-white">
            Contact Us
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team to learn more about our services or to ask any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Quick Contact Form */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-cyan-300/30 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>
                <CardDescription className="text-gray-300">
                  Send us a message and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Name</label>
                    <Input placeholder="Your name" className="bg-black/20 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-black/20 border-gray-600 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Message</label>
                  <Textarea 
                    placeholder="How can we help you?"
                    className="min-h-[120px] bg-black/20 border-gray-600 text-white"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Office */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="border-cyan-300/30 bg-black/40 backdrop-blur-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm text-white">{method.title}</h4>
                          <p className="text-xs text-gray-300 mb-2">{method.description}</p>
                          <p className="text-sm text-gray-200 mb-2">{method.value}</p>
                          <Button variant="outline" size="sm" className="text-xs border-cyan-300/50 text-cyan-300 hover:bg-cyan-400/10">
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Office Hours */}
            <Card className="border-emerald-400/30 bg-black/40 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <CardTitle className="text-lg text-white">Office Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-200">{schedule.day}</span>
                    <span className="text-emerald-300">{schedule.hours}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-emerald-400/30">
                  <div className="flex items-center space-x-2 text-xs text-emerald-300">
                    <CheckCircle className="w-3 h-3" />
                    <span>Same-day appointments available</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Image */}
            <Card className="overflow-hidden border-purple-400/30 bg-black/40 backdrop-blur-sm">
              <div className="relative h-48">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709696704054-46d65913b9ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwZ3JvdXAlMjBjaXJjbGV8ZW58MXx8fHwxNzU3NTk1MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Support group meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-sm">Our welcoming office environment</p>
                </div>
              </div>
            </Card>

            {/* Insurance */}
            <Card className="border-purple-400/30 bg-black/40 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h4 className="text-sm text-white mb-1">Insurance Accepted</h4>
                <p className="text-xs text-gray-300 mb-3">
                  We accept most major insurance plans including Blue Cross, Aetna, Cigna, and more.
                </p>
                <Button variant="outline" size="sm" className="text-xs border-purple-400/50 text-purple-300 hover:bg-purple-400/10">
                  Check Coverage
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-6 text-center backdrop-blur-sm">
          <h3 className="text-lg text-red-300 mb-2">Mental Health Emergency?</h3>
          <p className="text-red-200 mb-4">
            If you're experiencing a mental health crisis or having thoughts of self-harm, please seek immediate help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Call 911
            </Button>
            <Button variant="outline" className="border-red-400/50 text-red-300 hover:bg-red-600/10">
              National Suicide Prevention Lifeline: 988
            </Button>
          </div>
        </div>
      </div>
      </ArtisticBackground>
    </section>
  );
}