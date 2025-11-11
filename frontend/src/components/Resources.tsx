import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  BookOpen, 
  Headphones, 
  Video, 
  Download, 
  ExternalLink,
  Clock,
  Users,
  Heart,
  Brain,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArtisticBackground } from "./ArtisticBackground";
import { motion } from "motion/react";

export function Resources() {
  const resources = [
    {
      type: "article",
      title: "Understanding Anxiety: Complete Guide",
      description: "Learn about anxiety symptoms, causes, and evidence-based coping strategies.",
      icon: BookOpen,
      category: "Educational",
      readTime: "8 min read",
      featured: true
    },
    {
      type: "audio",
      title: "Guided Meditation for Sleep",
      description: "A 20-minute guided meditation to help you relax and fall asleep peacefully.",
      icon: Headphones,
      category: "Meditation",
      readTime: "20 min",
      featured: false
    },
    {
      type: "video",
      title: "Breathing Exercises for Stress Relief",
      description: "Learn simple breathing techniques you can use anywhere to manage stress.",
      icon: Video,
      category: "Techniques",
      readTime: "5 min",
      featured: false
    },
    {
      type: "download",
      title: "Daily Mood Tracker Worksheet",
      description: "Track your daily emotions and identify patterns in your mental health.",
      icon: Download,
      category: "Worksheets",
      readTime: "Daily use",
      featured: false
    },
    {
      type: "article",
      title: "Building Healthy Relationships",
      description: "Tips for improving communication and building stronger connections.",
      icon: Users,
      category: "Relationships",
      readTime: "12 min read",
      featured: false
    },
    {
      type: "video",
      title: "Mindfulness in Daily Life",
      description: "Practical ways to incorporate mindfulness into your everyday routine.",
      icon: Brain,
      category: "Mindfulness",
      readTime: "15 min",
      featured: true
    }
  ];

  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential support"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 crisis support via text"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Mental health and substance abuse help"
    }
  ];

  return (
    <section id="resources" className="w-full py-20 relative overflow-hidden">
      <ArtisticBackground variant="section">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl text-white">
            Mental Health Resources
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Access helpful tools, guides, and exercises to support your mental health journey between sessions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Resource */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-0 shadow-xl overflow-hidden bg-white/90 backdrop-blur-sm">
              <div className="relative h-64">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573285702030-f7952e595655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjBjYWxtfGVufDF8fHx8MTc1NzQ5NTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Meditation and mindfulness"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  Featured
                </Badge>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl mb-2">Self-Care Toolkit</h3>
                  <p className="text-sm opacity-90">
                    A comprehensive collection of mental health resources, worksheets, and guided exercises
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Worksheets</Badge>
                  <Badge variant="secondary">Audio Guides</Badge>
                  <Badge variant="secondary">Video Content</Badge>
                  <Badge variant="secondary">Progress Tracking</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Access Toolkit
                    <Download className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Preview Content
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Crisis Resources */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full border-red-200 bg-red-50/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-red-600" />
                  <CardTitle className="text-red-800">Crisis Support</CardTitle>
                </div>
                <CardDescription className="text-red-700">
                  Immediate help when you need it most
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {crisisResources.map((resource, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-red-200">
                    <div className="text-sm text-red-800">{resource.name}</div>
                    <div className="text-lg text-red-900">{resource.number}</div>
                    <div className="text-xs text-red-600">{resource.description}</div>
                  </div>
                ))}
                <p className="text-xs text-red-700 mt-4">
                  If you're experiencing a mental health emergency, please call 911 or go to your nearest emergency room.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm ${resource.featured ? 'ring-2 ring-blue-200' : ''}`}>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    {resource.featured && (
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <Badge variant="outline">{resource.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{resource.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200">
                    Access Resource
                    <ExternalLink className="ml-2 w-4 h-4" />
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
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl mb-4 text-gray-900">Need Personalized Support?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              While these resources are helpful, nothing replaces personalized care. Schedule a session to get support tailored specifically to your needs.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Your Session
            </Button>
          </div>
        </motion.div>
      </div>
      </ArtisticBackground>
    </section>
  );
}