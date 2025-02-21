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
    <footer className="p-20 bg-[#0A1768]">
      <div className="w-full flex justify-between items-center">
        <p className="text-white text-lg">
          Get Connected with us on our social networks
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

      <div className="flex justify-between">
        <div className="w-1/4 text-white space-y-6">
          <Image src={Logo} alt="logo" className="w-60" />
          <p className="font-semibold text-xl">
            Children's Creative Resource Ministry
          </p>
          <i>Teaching and equipping children for Christ</i>
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

        <div className="flex flex-col gap-5 w-1/4">
          <p className="text-white font-medium text-2xl pb-5 border-b border-white">
            Join Us
          </p>
          <p className="text-white">
            Join the team of rescue agents nearest to you in winning and
            discipling boys and girls for Jesus. God is counting on YOU!!!
          </p>
          <Button className="font-semibold bg-yellow-500">Contact Us</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
