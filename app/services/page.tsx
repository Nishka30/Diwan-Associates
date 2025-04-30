"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Check, 
  ChevronRight, 
  Building, 
  Receipt as ReceiptTax, 
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
  Bookmark as Trademark, 
  ArrowRight,
  FileText,
  ShieldCheck,
  BookOpen,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);

  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" };
    switch (iconName) {
      case "building": return <Building {...iconProps} />;
      case "receiptTax": return <ReceiptTax {...iconProps} />;
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
      case "trademark": return <Trademark {...iconProps} />;
      case "fileText": return <FileText {...iconProps} />;
      case "shieldCheck": return <ShieldCheck {...iconProps} />;
      case "bookOpen": return <BookOpen {...iconProps} />;
      case "globe": return <Globe {...iconProps} />;
      default: return <Check {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700">
              Comprehensive business solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation & Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Category Navigation - Sticky Sidebar */}
            <div className="lg:col-span-3 xl:col-span-2">
              <div className="sticky top-24">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Service Categories
                </h3>
                <nav className="space-y-2">
                  {SERVICE_CATEGORIES.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        activeCategory === category.id
                          ? "bg-purple-100 text-purple-800"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(category.id);
                        document.getElementById(category.id)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {category.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our team of experts is available to help you choose the right services for your business needs.
                  </p>
                  <Button asChild className="w-full" size="sm">
                    <Link href="/contact">
                      Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Services Content */}
            <div className="lg:col-span-9 xl:col-span-10">
              {SERVICE_CATEGORIES.map((category) => (
                <motion.div
                  key={category.id}
                  id={category.id}
                  className="mb-16 scroll-mt-24"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="border-b border-gray-200 pb-6 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service) => (
                      <motion.div
                        key={service.id}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-6">
                          <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                            {getIcon(service.icon)}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-5">
                            {service.description}
                          </p>
                          <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                            <span className="text-purple-800 font-medium">
                              {service.price}
                            </span>
                            <Button variant="outline" size="sm" className="group">
                              Enquire
                              <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Process Section */}
              <div className="mt-16 bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  Our Service Process
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center relative">
                    <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 bg-purple-100 -z-0"></div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
                    <p className="text-sm text-gray-600">
                      Initial discussion to understand your specific business requirements.
                    </p>
                  </div>

                  <div className="text-center relative">
                    <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 bg-purple-100 -z-0"></div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
                    <p className="text-sm text-gray-600">
                      Collection and preparation of all necessary documents.
                    </p>
                  </div>

                  <div className="text-center relative">
                    <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 relative z-10">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 bg-purple-100 -z-0"></div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing</h3>
                    <p className="text-sm text-gray-600">
                      Filing applications and following up with relevant authorities.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-100 text-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold">4</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery</h3>
                    <p className="text-sm text-gray-600">
                      Final delivery of certificates, licenses, or registrations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                  Contact our team for a free consultation and discover how our services can help your business thrive.
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}