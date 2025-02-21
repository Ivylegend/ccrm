import React from "react";
import Logo from "../public/ccrm-logo.jpeg";
import Image from "next/image";
import { Button } from "./ui/button";
import { Facebook, Mail, PhoneCallIcon } from "lucide-react";

const footerLinks = [
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
  {
    name: "Newsletter",
    url: "/newsletter",
  },
];

const socialLinks = [
  {
    icon: <Facebook color="white" />,
    url: "https://www.facebook.com/ccrm2022",
  },
  {
    icon: <Mail color="white" />,
    url: "mailto:ccrmjuly2022@gmail.com",
  },
  {
    icon: <PhoneCallIcon color="white" />,
    url: "07043454841",
  },
];

const Footer = () => {
  return (
    <footer className="p-6 md:p-10 lg:p-20 bg-[#0A1768]">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-between items-center">
        <p className="text-white text-center md:text-left font-medium md:text-lg">
          Stay connected with us on our social networks
        </p>
        <div className="flex gap-4 items-center">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <hr className="bg-white my-10" />

      <div className="flex flex-col gap-8 lg:flex-row justify-between">
        <div className="lg:w-1/4 text-white space-y-6">
          <Image src={Logo} alt="logo" className="lg:w-60" />
          <p className="font-semibold text-xl">
            Children&apos;s Creative Resource Ministry
          </p>
          <i>&quot;Teaching and equipping children for Christ</i>
          <p>
            No 43, road 5, Aho Agbeja Estate, Ajibode, Ibadan, Oyo State,
            Nigeria
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-white font-medium text-2xl pb-5 border-b border-white">
            Quick Links
          </p>
          <ul className="space-y-5">
            {footerLinks.map((link) => (
              <li key={link.name} className="text-white">
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-white font-medium text-2xl pb-5 border-b border-white">
            Social Links
          </p>
          <ul className="space-y-5">
            {footerLinks.map((link) => (
              <li key={link.name} className="text-white">
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 lg:w-1/4">
          <p className="text-white font-medium text-2xl pb-5 border-b border-white">
            Join Us
          </p>
          <p className="text-white">
            Join the team of rescue agents nearest to you in winning and
            discipling boys and girls for Jesus. God is counting on YOU!!!
          </p>
          <Button className="font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Contact Us</Button>
        </div>
      </div>

      <hr className="bg-white my-10" />

      <div className="text-white mx-auto w-full text-center space-y-5">
        <p className="text-xs">
          © 2023 - 2025 Children&apos;s Creative Resource Ministry. All Rights
          Reserved.
        </p>
        <p className="text-xs">
          Children&apos;s Creative Resource Ministry Inc. is a 501(c)(3)
          non-profit organization.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
