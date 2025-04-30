"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Check, 
  ChevronRight,
  Building,
  Award,
  Store,
  Briefcase,
  CreditCard,
  ClipboardCheck,
  Landmark,
  FileBarChart,
  Wallet,
  PenTool,
  Utensils,
  Ship,
  Flame,
  Pill,
  ShoppingBag,
  ArrowRight,
  FileText,
  ShieldCheck,
  BookOpen,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES } from "@/lib/constants";

const ServiceHighlights = () => {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-5 w-5" };
    switch (iconName) {
      case "building": return <Building {...iconProps} />;
      case "receiptTax": return <CreditCard {...iconProps} />;
      case "award": return <Award {...iconProps} />;
      case "store": return <Store {...iconProps} />;
      case "briefcase": return <Briefcase {...iconProps} />;
      case "certificate": return <CreditCard {...iconProps} />;
      case "clipboardCheck": return <ClipboardCheck {...iconProps} />;
      case "landmark": return <Landmark {...iconProps} />;
      case "fileBarChart": return <FileBarChart {...iconProps} />;
      case "wallet": return <Wallet {...iconProps} />;
      case "penTool": return <PenTool {...iconProps} />;
      case "utensils": return <Utensils {...iconProps} />;
      case "ship": return <Ship {...iconProps} />;
      case "flame": return <Flame {...iconProps} />;
      case "pill": return <Pill {...iconProps} />;
      case "shoppingBag": return <ShoppingBag {...iconProps} />;
      case "trademark": return <Briefcase {...iconProps} />;
      case "fileText": return <FileText {...iconProps} />;
      case "shieldCheck": return <ShieldCheck {...iconProps} />;
      case "bookOpen": return <BookOpen {...iconProps} />;
      case "globe": return <Globe {...iconProps} />;
      default: return <Check {...iconProps} />;
    }
  };

  const activeServiceCategory = SERVICE_CATEGORIES.find(
    (category) => category.id === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of consultancy services tailored to meet your business needs and ensure complete compliance with regulatory requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="bg-gray-50 rounded-xl p-4 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 px-2">
                Service Categories
              </h3>
              <nav className="space-y-1">
                {SERVICE_CATEGORIES.map((category) => (
                  <motion.button
                    key={category.id}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between",
                      activeCategory === category.id
                        ? "bg-purple-100 text-purple-800"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                    onClick={() => setActiveCategory(category.id)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{category.title}</span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        activeCategory === category.id ? "rotate-90" : ""
                      )}
                    />
                  </motion.button>
                ))}
              </nav>

              <div className="mt-8 p-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl text-white">
                <h4 className="font-semibold mb-3">Need Expert Guidance?</h4>
                <p className="text-sm text-purple-100 mb-4">
                  Our team of specialists is ready to help you choose the perfect solutions for your business requirements.
                </p>
                <Button asChild variant="secondary" size="sm" className="w-full">
                  <Link href="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="lg:col-span-8 xl:col-span-9">
            {activeServiceCategory && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div 
                  className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-6"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {activeServiceCategory.title}
                  </h3>
                  <p className="text-gray-600">
                    {activeServiceCategory.description}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeServiceCategory.services.map((service) => (
                    <motion.div
                      key={service.id}
                      className={cn(
                        "bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300",
                        hoveredService === service.id ? "shadow-lg transform -translate-y-1" : "hover:shadow-md"
                      )}
                      variants={itemVariants}
                      onHoverStart={() => setHoveredService(service.id)}
                      onHoverEnd={() => setHoveredService(null)}
                    >
                      <div className="p-6">
                        <div className="bg-purple-100 text-purple-800 p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                          {getIcon(service.icon)}
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-purple-800 font-medium text-sm">
                            {service.price}
                          </span>
                          <Link 
                            href={`/services#${service.id}`}
                            className="text-sm font-medium text-purple-700 hover:text-purple-900 flex items-center group"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="mt-8 text-center"
                  variants={itemVariants}
                >
                  <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    <Link href="/services">
                      View All Services <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;