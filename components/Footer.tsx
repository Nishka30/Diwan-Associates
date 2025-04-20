import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Scale, Square as GavelSquare } from "lucide-react";
import { 
  BUSINESS_NAME, 
  CONTACT_PHONE, 
  CONTACT_EMAIL, 
  BUSINESS_ADDRESS, 
  SOCIAL_LINKS 
} from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-purple-800 font-bold text-xl">
              <div className="flex items-center justify-center rounded-full bg-purple-800 text-white p-1">
                <Scale className="h-5 w-5" />
                <GavelSquare className="h-5 w-5 ml-[-2px]" />
              </div>
              <span>{BUSINESS_NAME}</span>
            </Link>
            <p className="text-gray-600 text-sm">
              A leading consultancy service providing comprehensive business solutions for registration, compliance, and licenses across India.
            </p>
            <div className="flex space-x-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-purple-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-purple-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-purple-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-purple-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Who It's For
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#business-registration" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Business Registration
                </Link>
              </li>
              <li>
                <Link href="/services#tax-compliance" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Tax & Compliance
                </Link>
              </li>
              <li>
                <Link href="/services#certifications" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/services#licenses" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Specialized Licenses
                </Link>
              </li>
              <li>
                <Link href="/services#trademark-ip" className="text-gray-600 hover:text-purple-700 transition-colors text-sm">
                  Trademark & IP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  {CONTACT_PHONE.map((phone, index) => (
                    <div key={index}>{phone}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  {CONTACT_EMAIL.map((email, index) => (
                    <div key={index}>{email}</div>
                  ))}
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">{BUSINESS_ADDRESS}</span>
              </li>
            </ul>
            <Button variant="outline" className="mt-4 w-full">
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© {year} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;