"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Clock 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Business Registration Made Simple",
      description: "Streamline your company formation process with expert guidance and support.",
      buttonText: "Start Registration",
      icon: "ShieldCheck",
    },
    {
      title: "Tax & Compliance Solutions",
      description: "Stay compliant with all tax regulations and statutory requirements.",
      buttonText: "Explore Tax Services",
      icon: "BarChart3",
    },
    {
      title: "Specialized Business Licenses",
      description: "Obtain all required licenses and permits for your specific business needs.",
      buttonText: "Get Licensed",
      icon: "CheckCircle2",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6" />;
      case "BarChart3":
        return <BarChart3 className="h-6 w-6" />;
      case "CheckCircle2":
        return <CheckCircle2 className="h-6 w-6" />;
      default:
        return <Clock className="h-6 w-6" />;
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-2">
              Premier Business Consultancy Services
            </div>
            
            <div className="h-[120px] md:h-[144px] relative overflow-hidden">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={cn("absolute inset-0 transition-all duration-500", 
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                    {slide.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <Button size="lg" className="group">
                {slides[currentSlide].buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            <div className="pt-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-indigo-100 rounded-3xl opacity-30 transform -rotate-3" />
            <div className="relative bg-white shadow-xl rounded-3xl p-6 md:p-8 transform rotate-1 border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                {slides.map((slide, index) => (
                  <motion.div
                    key={index}
                    className={cn(
                      "bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100",
                      index === 0 ? "col-span-2" : "col-span-1"
                    )}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {getIcon(slide.icon)}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {slide.description}
                    </p>
                  </motion.div>
                ))}
                <motion.div
                  className="bg-purple-800 text-white p-4 md:p-6 rounded-xl shadow-sm border border-purple-700 col-span-2"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Ready to get started?</h3>
                      <p className="text-sm text-purple-200">Schedule a free consultation today</p>
                    </div>
                    <Button variant="secondary" size="sm" className="text-purple-800">
                      Book Now
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center lg:justify-start mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-300",
                currentSlide === index ? "bg-purple-600" : "bg-purple-200"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;