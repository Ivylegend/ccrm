"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/ccrm-logo.jpeg";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full p-2 pr-6 shadow-md md:shadow-none z-40 sticky top-0 bg-white md:px-8 h-20 flex justify-between items-center">
      {/* Logo */}
      <div className="h-20 overflow-hidden">
        <Image src={Logo} className="w-40 object-cover" alt="logo" />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-12 text-[#0A1768] font-semibold capitalize relative">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="relative"
            ref={link.dropdown ? dropdownRef : null}
          >
            {/* Parent Link */}
            <Link
              href={link.url}
              onClick={(e) => {
                if (link.dropdown) {
                  e.preventDefault();
                  setOpenDropdown(
                    openDropdown === link.name ? null : link.name
                  );
                }
              }}
              className="hover:text-blue-600 cursor-pointer flex items-center gap-1"
            >
              {link.name} {link.dropdown && <ChevronDown />}
            </Link>

            {/* Dropdown Menu */}
            {link.dropdown && openDropdown === link.name && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2 z-50">
                {link.dropdown.map((sublink) => (
                  <Link
                    key={sublink.name}
                    href={sublink.url}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {sublink.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Donate Button */}
      <Button
        variant={"outline"}
        className="hidden md:block font-semibold border-[#0A1768] text-[#0A1768]"
      >
        Donate
      </Button>

      <MobileNav />
    </nav>
  );
};

export default Navbar;
