"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Scale, Square as GavelSquare } from "lucide-react";
import { BUSINESS_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Who It's For", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ];

  // Always use white background for non-homepage routes or when scrolled
  const navbarBg = (!isHomePage || scrolled) 
    ? "bg-white/95 backdrop-blur-sm shadow-sm" 
    : "bg-transparent";

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-3",
        navbarBg
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-purple-800 font-bold text-xl"
          >
            <div className="flex items-center justify-center rounded-full bg-purple-800 text-white p-1">
              <Scale className="h-5 w-5" />
              <GavelSquare className="h-5 w-5 ml-[-2px]" />
            </div>
            <span className="text-purple-800">
              {BUSINESS_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-purple-50 text-gray-800 hover:text-purple-800",
                  pathname === link.href && "bg-purple-50 text-purple-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="ml-2" size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md overflow-hidden transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-50 hover:text-purple-800",
                  pathname === link.href && "bg-purple-50 text-purple-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-2 w-full" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;