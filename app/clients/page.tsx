"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, 
  Building, 
  Store, 
  Briefcase, 
  Check, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLIENT_CATEGORIES } from "@/lib/constants";

export default function ClientsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h1>
            <p className="text-xl text-gray-700">
              Tailored solutions for businesses at every stage of growth.
            </p>
          </div>
        </div>
      </section>

      {/* Client Categories Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Diwan & Associates, we serve a diverse range of clients, providing specialized services tailored to meet their unique business needs.
            </p>
          </div>

          <div className="space-y-16">
            {CLIENT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                  <div className="bg-purple-50 p-8 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-0"></div>
                    <div className="relative z-10">
                      <div className="bg-white text-purple-800 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                        {category.id === "startups" && <Users className="h-8 w-8" />}
                        {category.id === "small-business" && <Store className="h-8 w-8" />}
                        {category.id === "established" && <Building className="h-8 w-8" />}
                        {category.id === "professionals" && <Briefcase className="h-8 w-8" />}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {category.title}
                      </h3>
                      <p className="text-gray-700 mb-6">
                        {category.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Benefits:</h4>
                        <ul className="space-y-2">
                          {category.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Solutions for {category.title}
                    </h3>
                    
                    {category.id === "startups" && (
                      <>
                        <p className="text-gray-600">
                          Starting a new business comes with numerous regulatory challenges. Our expert team helps entrepreneurs navigate the complexities of business formation, ensuring compliance from day one.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">Popular Services for Startups:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Company Formation (Private Limited, LLP, OPC)</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>MSME Registration</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>GST Registration</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Trademark Registration</span>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}

                    {category.id === "small-business" && (
                      <>
                        <p className="text-gray-600">
                          Small and medium businesses need efficient compliance solutions that don't strain resources. We provide cost-effective services that ensure your business meets all regulatory requirements while you focus on growth.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">Popular Services for SMBs:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Income Tax Return Filing</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>GST Return Filing</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Trade License</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Shop & Establishment Registration</span>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}

                    {category.id === "established" && (
                      <>
                        <p className="text-gray-600">
                          Established enterprises require comprehensive compliance management across multiple functions. Our tailored solutions help larger businesses maintain regulatory adherence while optimizing their compliance processes.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">Popular Services for Enterprises:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Tax Audit</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>ISO Certification</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Import Export License</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>GEM Portal Registration</span>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}

                    {category.id === "professionals" && (
                      <>
                        <p className="text-gray-600">
                          Independent professionals and consultants need specific registrations and compliance solutions. We help professionals fulfill their regulatory obligations efficiently, allowing them to focus on serving their clients.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-3">Popular Services for Professionals:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Professional Tax Registration</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Digital Signature Certificate</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>Income Tax Return Filing</span>
                            </li>
                            <li className="flex items-center">
                              <Check className="h-5 w-5 text-purple-600 mr-2" />
                              <span>GST Registration for Service Providers</span>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}

                    <Button asChild className="group mt-4">
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions our clients ask about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does the company registration process take?
              </h3>
              <p className="text-gray-600">
                The company registration process typically takes 10-15 working days once all required documents are submitted correctly. However, processing times may vary based on government department workloads and specific registration requirements.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What documents are needed for GST registration?
              </h3>
              <p className="text-gray-600">
                For GST registration, you'll need PAN, Aadhaar, business registration documents, address proof, bank account details, and photographs. The specific requirements may vary based on your business type and structure.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer post-registration support?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive post-registration support including compliance management, return filing, and ongoing advisory services to ensure your business maintains regulatory compliance throughout its operation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can I track the progress of my application?
              </h3>
              <p className="text-gray-600">
                We provide regular updates on your application status through email and phone. Additionally, clients can contact their dedicated account manager anytime for real-time updates on their application progress.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/contact">
                Ask Us a Question
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}