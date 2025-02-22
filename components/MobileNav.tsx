"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/ccrm-logo.jpeg";
import { LucideMenu, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { navLinks } from "@/constants";

const MobileNav = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <section className="w-full md:hidden flex justify-end">
      <Sheet>
        <SheetTrigger>
          <LucideMenu className="w-fit" />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-white">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 px-4"
          >
            <Image src={Logo} className="w-44" alt="logo" />
          </Link>

          <div className="flex flex-col gap-4 pt-6">
            {navLinks.map((item) => (
              <div key={item.name} className="relative">
                {/* Parent Link */}
                <button
                  className="w-full flex items-center justify-between text-16 font-semibold text-[#0A1768]"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                >
                  {item.name} {item.dropdown && <ChevronDown />}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#0A1768] pl-4">
                    {item.dropdown.map((sublink) => (
                      <SheetClose asChild key={sublink.name}>
                        <Link
                          href={sublink.url}
                          className="block text-sm text-gray-700 hover:text-[#0A1768]"
                        >
                          {sublink.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="mt-6 font-semibold border-[#0A1768] text-[#0A1768]"
          >
            Donate
          </Button>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
