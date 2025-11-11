import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import CountUp from "./CountUp";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function About() {
  const stats = [
    { icon: Users, label: "Clients Helped", value: 10000, suffix: "+" },
    { icon: Clock, label: "Years of Experience", value: 15, suffix: "+" },
    { icon: Star, label: "Client Satisfaction", value: 4.9, suffix: "/5" },
    { icon: Award, label: "Certifications", value: 12, suffix: "+" }
  ];

  const credentials = [
    "Licensed Clinical Social Worker (LCSW)",
    "Cognitive Behavioral Therapy (CBT) Certified",
    "Dialectical Behavior Therapy (DBT) Trained",
    "Trauma-Informed Care Specialist",
    "EMDR Therapy Certified",
    "Couples Therapy Certified"
  ];

  return (
    <section
      id="about"
      className="w-full py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f1419 0%, #1e3a4e 20%, #2563eb 40%, #06b6d4 60%, #0891b2 80%, #0f172a 100%)",
      }}
    >
      {/* Artistic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl text-white">
            Meet Dr. Sarah Johnson
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            A compassionate mental health professional dedicated to helping you achieve lasting wellness and personal growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Professional Image */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl transform"
                animate={{ rotate: [-6, -2, -6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-3xl transform"
                animate={{ rotate: [4, -4, 4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653289755901-313cae66a49a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBwcm9mZXNzaW9uYWwlMjB0aGVyYXBpc3R8ZW58MXx8fHwxNzU3NTk1MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dr. Sarah Johnson, Mental Health Professional"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-blue-100 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-lg text-gray-900">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>123 Wellness Avenue, San Francisco, CA 94102</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>contact@mindfulcare.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-black-600" />
                <span className="text-lg text-black-600">Professional Background</span>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
With over 15 years of experience in mental health care, Dr. Sarah Johnson brings a wealth of knowledge and compassion to her practice. She specializes in evidence-based therapies and takes a holistic approach to mental wellness, tailoring her methods to meet the unique needs of each client.                </p>
                <p>
Dr. Johnson earned her Ph.D. in Clinical Psychology from Stanford University and completed her residency at UCSF Medical Center. Her therapeutic approach is client-centered, combining cognitive-behavioral techniques with mindfulness-based interventions, and she is committed to creating a safe, non-judgmental space for clients to explore their thoughts and feelings.                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h4 className="text-lg text-gray-900">Credentials & Certifications</h4>
              <div className="grid grid-cols-1 gap-2">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <motion.div 
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg text-gray-900 mb-3">Treatment Philosophy</h4>
              <p className="text-gray-700 italic">
                "I believe that every person has the innate capacity for healing and growth. My role is to provide the tools, support, and safe space needed for that transformation to occur. Together, we'll work towards not just managing symptoms, but building a life of meaning and fulfillment."
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Schedule Appointment
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                View Credentials
              </Button>
            </div>

            {/* View Other Professionals */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">
                Looking for a different therapist or specialty? We have a team of qualified professionals.
              </p>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                <Users className="w-4 h-4 mr-2" />
                View All Our Professionals
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats with CountUp */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl text-gray-900 flex items-center justify-center">
                    <CountUp
                      from={0}
                      to={stat.value}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
