import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote } from "lucide-react";
import { ArtisticBackground } from "./ArtisticBackground";
import { motion } from "motion/react";
import CountUp from './CountUp'


export function Testimonials() {
  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Dr. Johnson completely transformed my approach to anxiety management. Her techniques are practical and genuinely effective. I feel like I have my life back.",
      highlight: "Life-changing experience"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The couples therapy sessions saved my marriage. Dr. Johnson created a safe space where my partner and I could finally communicate openly and honestly.",
      highlight: "Saved our relationship"
    },
    {
      name: "Sarah Williams",
      role: "Teacher",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "After struggling with depression for years, I finally found the right support. The personalized treatment plan and ongoing care have been incredible.",
      highlight: "Finally found hope"
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "The stress management techniques I learned not only helped my mental health but also improved my performance and relationships.",
      highlight: "Holistic improvement"
    },
    {
      name: "Lisa Park",
      role: "Nurse",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "As a healthcare worker, I was burning out fast. The therapy sessions and coping strategies have been essential for my wellbeing.",
      highlight: "Prevented burnout"
    },
    {
      name: "James Wilson",
      role: "Student",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Group therapy helped me realize I wasn't alone. The peer support and professional guidance created lasting positive changes.",
      highlight: "Found community"
    }
  ];

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <ArtisticBackground variant="dark">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Real stories from real people who have found healing and growth through our services
          </p>
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg text-white">4.9/5</span>
            <span className="text-gray-200">from 2,847 reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-blue-200" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Highlight */}
                <div className="bg-blue-50 rounded-lg p-3">
                  <span className="text-blue-800 font-medium text-sm">"{testimonial.highlight}"</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-blue-600 mb-2"><CountUp
  from={0}
  to={98}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>%</div>
              <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-2"><CountUp
  from={0}
  to={10000}
  separator=","
  direction="up"
  duration={0.2}
  className="count-up-text"
/>+</div>
              <div className="text-sm text-gray-600">Lives Transformed</div>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-2"><CountUp
  from={0}
  to={15}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>+</div>
              <div className="text-sm text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl text-blue-600 mb-2"><CountUp
  from={0}
  to={24}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>/<CountUp
  from={0}
  to={7}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/></div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      </ArtisticBackground>
    </section>
  );
}