"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ABOUT_CONTENT } from "@/lib/constants";

const AboutPreview = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-5 w-5" };
    switch (iconName) {
      case "briefcase": return <Briefcase {...iconProps} />;
      case "shield": return <Shield {...iconProps} />;
      case "users": return <Users {...iconProps} />;
      case "clock": return <Clock {...iconProps} />;
      default: return null;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-2"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-sm">{ABOUT_CONTENT.mission}</p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-2"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-sm">{ABOUT_CONTENT.vision}</p>
              </motion.div>

              {ABOUT_CONTENT.values.slice(0, 2).map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-purple-100 text-purple-800 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                    {getIcon(value.icon)}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-2">
              About Diwan & Associates
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Trusted Partner for Business Success
            </h2>
            <p className="text-lg text-gray-600">
              {ABOUT_CONTENT.intro}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              {ABOUT_CONTENT.values.slice(2, 4).map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-purple-100 text-purple-800 p-2 rounded-full flex-shrink-0 mt-1">
                    {getIcon(value.icon)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="group">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;