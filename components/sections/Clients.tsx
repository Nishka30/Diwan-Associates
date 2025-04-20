"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Store, 
  Building, 
  Briefcase,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLIENT_CATEGORIES } from "@/lib/constants";

const Clients = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" };
    switch (iconName) {
      case "rocket": return <Rocket {...iconProps} />;
      case "store": return <Store {...iconProps} />;
      case "building": return <Building {...iconProps} />;
      case "briefcase": return <Briefcase {...iconProps} />;
      default: return null;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our services are tailored to meet the unique needs of various business types and stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                {getIcon(category.icon)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-5">
                {category.description}
              </p>
              <ul className="space-y-2 mb-6">
                {category.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" asChild className="w-full group">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't see your specific business type? Our services can be customized to meet your unique requirements.
          </p>
          <Button asChild size="lg">
            <Link href="/clients">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;