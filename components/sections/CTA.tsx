"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Streamline Your Business Compliance?
                </h2>
                <p className="text-purple-100 text-lg mb-6">
                  Get in touch with our experts today and discover how we can help you navigate the complexities of business registration, licensing, and compliance.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-purple-200" />
                    <span className="text-purple-100">tds.ssc@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-purple-200" />
                    <span className="text-purple-100">+91 8910077904 / +91 7003699264</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-purple-200" />
                    <span className="text-purple-100">Available Monday - Saturday, 10:00 AM - 7:00 PM</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button size="lg" variant="secondary" className="group">
                    <Link href="/contact" className="flex items-center">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Link href="/services">
                      Explore Services
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-purple-500 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent" />
              <div className="h-full bg-[url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;