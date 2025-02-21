"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/ccrm-logo.jpeg";
import MobileNav from "./MobileNav";

const components: { title: string; href: string }[] = [
  {
    title: "Game Outreaches",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Easter Outreaches",
    href: "/docs/primitives/hover-card",
  },
];

const Navbar = () => {
  // const navLinks = [
  //   {
  //     name: "About Us",
  //     url: "/about",
  //   },
  //   {
  //     name: "Programs",
  //     url: "/programs",
  //   },
  //   {
  //     name: "NewLetter",
  //     url: "/newsletter",
  //   },
  // ];

  //   return (
  //     <nav className="w-full p-8 flex justify-between items-center">
  //       <div>
  //         <Image src={Logo} className="w-44" alt="logo" />
  //       </div>
  //       <div className="flex gap-5 text-[#2B2B3F] font-semibold uppercase">
  //         {navLinks.map((link) => (
  //           <Link key={link.name} href={link.url}>
  //             {link.name}
  //           </Link>
  //         ))}
  //       </div>
  //       <Button>Donate</Button>
  //     </nav>
  //   );
  return (
    <NavigationMenu className="w-full flex justify-between items-center">
      <NavigationMenuList className="flex justify-between w-full">
        <NavigationMenuItem>
          <Link className="flex h-full w-full rounded-md p-6" href="/">
            <Image src={Logo} className="w-44" alt="logo" />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[320px]">
              <ListItem
                href="/about#how-it-started"
                title="How it all started"
              />
              <ListItem href="/about#vision" title="Vision & Mission" />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Our Programs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <Link href="/newsletter" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              NewsLetter
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <MobileNav />
    </NavigationMenu>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
