"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Heart, Menu, X, Image as ImageIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/public/ccrm-logo.jpeg";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Programs", path: "/programs" },
    { label: "Gallery", path: "/gallery", icon: ImageIcon },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
    { label: "Donate", path: "/donate", icon: Heart },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-3 bg-white shadow-md" : "py-5 bg-white"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-20 w-28 flex items-center justify-center">
            <Image src={Logo} alt="CCRM Logo" className="w-full" />
          </div>
          {/* <span className="font-display font-bold text-ccrm-blue text-xl hidden sm:inline-block animate-fade-in">
            Children's Creative Resource Ministry
          </span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-1",
                location === item.path
                  ? "text-blue-500 bg-ccrm-yellow/10"
                  : isScrolled
                  ? "text-ccrm-blue hover:bg-gray-500"
                  : "text-black hover:text-ccrm-blue hover:bg-gray-500"
              )}
            >
              {item.icon && <item.icon size={16} />}
              {item.label}
              {item.path === "/donate" && (
                <span className="bg-[#FBBF24] text-[#0A1768] text-xs px-2 py-0.5 rounded-full ml-1">
                  Support
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-ccrm-blue p-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect bg-white shadow-md animate-fade-in">
          <div className="py-4 px-6 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2",
                  location === item.path
                    ? "text-ccrm-blue bg-ccrm-yellow/20"
                    : "text-gray-700 hover:text-ccrm-blue hover:bg-gray-100"
                )}
              >
                {item.icon && <item.icon size={18} />}
                {item.label}
                {item.path === "/donate" && (
                  <span className="bg-[#FBBF24] text-[#0A1768] text-xs px-2 py-0.5 rounded-full ml-1">
                    Support
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
