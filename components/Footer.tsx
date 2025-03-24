"use client";

import React from "react";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ccrm-blue text-white">
      <div className="container mx-auto pt-16 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">CCRM</h3>
            <p className="text-gray-300 mb-4">
              Children's Creative Resource Ministry is dedicated to the
              salvation and holistic development of children through creative
              programs and resources.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1JUd8RDpPk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FBBF24] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:ccrmjuly2022@gmail.com"
                className="text-white hover:text-ccrm-yellow transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              Our Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs#bible-clubs"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Children's Bible Clubs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#holiday-camps"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Holiday Camps
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#game-outreach"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Game Outreach
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#easter-outreach"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Easter Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs#christmas-outreach"
                  className="text-gray-300 hover:text-ccrm-yellow transition-colors"
                >
                  Christmas Outreach
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0 text-ccrm-yellow"
                />
                <span className="text-gray-300">
                  House 43, Road 5, Aho Agbeja Estate, Ajibode, Ibadan, Oyo
                  State, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-ccrm-yellow" />
                <span className="text-gray-300">(234) 704-345-4841</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-ccrm-yellow" />
                <span className="text-gray-300">ccrmjuly2022@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            © {currentYear} Children's Creative Resource Ministry. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
