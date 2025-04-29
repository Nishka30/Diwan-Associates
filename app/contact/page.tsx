"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  Loader2,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BUSINESS_NAME,
  CONTACT_PHONE,
  CONTACT_EMAIL,
  BUSINESS_ADDRESS
} from "@/lib/constants";

interface EmailJSResult {
  text: string;
  status: number;
}

interface EmailJSError {
  text: string;
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_egn4tpf',
      'template_w4y2l6m',
      formRef.current,
      'Ikw2TubUE8EKzzi80'
    )
    .then((result: EmailJSResult) => {
      console.log('Email successfully sent!', result.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (formRef.current) formRef.current.reset();
    })
    .catch((error: EmailJSError) => {
      console.error('Failed to send email:', error.text);
      setIsSubmitting(false);
      setFormError('Failed to send your message. Please try again later.');
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-700">
              We're here to answer your questions and provide the support you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions or need assistance? Reach out to our team using any of the contact methods below, and we'll be happy to help.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-purple-100 text-purple-800 p-3 rounded-full flex-shrink-0 mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <div className="text-gray-600">
                      {CONTACT_PHONE.map((phone, index) => (
                        <p key={index}>{phone}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-purple-100 text-purple-800 p-3 rounded-full flex-shrink-0 mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <div className="text-gray-600">
                      {CONTACT_EMAIL.map((email, index) => (
                        <p key={index}>{email}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-purple-100 text-purple-800 p-3 rounded-full flex-shrink-0 mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      {BUSINESS_ADDRESS}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-purple-100 text-purple-800 p-3 rounded-full flex-shrink-0 mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                    </p>
                    <p className="text-gray-600">
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 p-6 bg-purple-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Need Urgent Assistance?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  For urgent inquiries, please call our support line directly.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`tel:${CONTACT_PHONE[0]}`}>
                    Call Support
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and our team will get back to you promptly.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                >
                  <div className="bg-green-100 text-green-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your message has been sent successfully. We will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {formError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 mb-6 flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <p>{formError}</p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="service_type"
                        name="service_type"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="Company Formation">Company Formation</option>
                        <option value="GST Registration">GST Registration</option>
                        <option value="Income Tax Return">Income Tax Return</option>
                        <option value="Trademark Registration">Trademark Registration</option>
                        <option value="Other Services">Other Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Please describe your requirements..."
                      required
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office at {BUSINESS_ADDRESS}
            </p>
          </div>

          <div className="bg-white p-2 rounded-xl shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14724.565786850026!2d88.34268745!3d22.6857778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89ceae67aa86f%3A0xd8d8ffe586bc5db5!2sHindmotor%2C%20Uttarpara%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1745959543273!5m2!1sen!2sin"
              className="w-full h-96 rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}