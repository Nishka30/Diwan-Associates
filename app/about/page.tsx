"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Shield, 
  Users, 
  Clock,
  Award,
  FileCheck,
  Building2,
  Scale
} from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";

export default function AboutPage() {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" };
    switch (iconName) {
      case "briefcase": return <Briefcase {...iconProps} />;
      case "shield": return <Shield {...iconProps} />;
      case "users": return <Users {...iconProps} />;
      case "clock": return <Clock {...iconProps} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Diwan & Associates
            </h1>
            <p className="text-xl text-gray-700">
              Your trusted partner in business compliance and regulatory solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {ABOUT_CONTENT.intro}
              </p>
              <p className="text-lg text-gray-600">
                With a deep understanding of the regulatory landscape and a commitment to client satisfaction, we have established ourselves as a trusted name in the consultancy domain, helping businesses of all sizes navigate complex compliance requirements with ease.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* <motion.div
                className="bg-purple-50 p-6 rounded-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Award className="h-10 w-10 text-purple-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO Certified</h3>
                <p className="text-gray-600">
                  Our services meet the highest international standards for quality management.
                </p>
              </motion.div> */}
              
              {/* <motion.div
                className="bg-purple-50 p-6 rounded-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FileCheck className="h-10 w-10 text-purple-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5-Star Rated</h3>
                <p className="text-gray-600">
                  Consistently rated 5 stars by our satisfied clients across services.
                </p>
              </motion.div> */}
              
              <motion.div
                className="bg-purple-50 p-6 rounded-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Building2 className="h-10 w-10 text-purple-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Solutions</h3>
                <p className="text-gray-600">
                  End-to-end services for all your business registration and compliance needs.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-purple-50 p-6 rounded-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Scale className="h-10 w-10 text-purple-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Expertise</h3>
                <p className="text-gray-600">
                  Backed by deep legal knowledge and industry-specific experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our organization and shape our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center">
                {ABOUT_CONTENT.vision}
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center">
                {ABOUT_CONTENT.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our interactions and service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ABOUT_CONTENT.values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-purple-50 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 mx-auto">
                  {getIcon(value.icon)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}