
import bicycle from "@/public/ride-bicycle.jpg";
import bicycle2 from "@/public/image.png";
import gO1 from "@/public/game-outreach/1.jpeg";
import gO2 from "@/public/game-outreach/2.jpeg";
import gO4 from "@/public/game-outreach/4.jpeg";
import gO5 from "@/public/game-outreach/5.jpeg";
import gO6 from "@/public/game-outreach/6.jpeg";
import gO7 from "@/public/game-outreach/7.jpeg";
import gO8 from "@/public/game-outreach/8.jpeg";
import gO9 from "@/public/game-outreach/9.jpeg";

import cO1 from "@/public/christmas-outreach/1.jpeg";
import cO2 from "@/public/christmas-outreach/2.jpeg";
import cO3 from "@/public/christmas-outreach/3.jpeg";
import cO4 from "@/public/christmas-outreach/4.jpeg";
import cO5 from "@/public/christmas-outreach/5.jpeg";
import cO6 from "@/public/christmas-outreach/6.jpeg";
import cO7 from "@/public/christmas-outreach/7.jpeg";
import cO8 from "@/public/christmas-outreach/8.jpeg";
import cO9 from "@/public/christmas-outreach/9.jpeg";
import cO10 from "@/public/christmas-outreach/10.jpeg";
import cO11 from "@/public/christmas-outreach/11.jpeg";

import cc1 from "@/public/character-charisma/1.jpeg";
import cc2 from "@/public/character-charisma/2.jpeg";
import cc3 from "@/public/character-charisma/3.jpeg";
import cc4 from "@/public/character-charisma/4.jpeg";
import cc5 from "@/public/character-charisma/5.jpeg";
import cc6 from "@/public/character-charisma/6.jpeg";
import cc7 from "@/public/character-charisma/7.jpeg";
import cc8 from "@/public/character-charisma/8.jpeg";
import cc9 from "@/public/character-charisma/9.jpeg";
import cc10 from "@/public/character-charisma/10.jpeg";
import cc11 from "@/public/character-charisma/11.jpeg";
import cc12 from "@/public/character-charisma/12.jpeg";
import cc13 from "@/public/character-charisma/13.jpeg";
import cc14 from "@/public/character-charisma/14.jpeg";
import cc15 from "@/public/character-charisma/15.jpeg";
import cc16 from "@/public/character-charisma/16.jpeg";
import cc17 from "@/public/character-charisma/17.jpeg";

import eo1 from "@/public/easter-outreach/1.jpeg";
import eo2 from "@/public/easter-outreach/2.jpeg";
import eo3 from "@/public/easter-outreach/3.jpeg";
import eo4 from "@/public/easter-outreach/4.jpeg";
import eo5 from "@/public/easter-outreach/5.jpeg";
import eo6 from "@/public/easter-outreach/6.jpeg";
import eo7 from "@/public/easter-outreach/7.jpeg";
import eo8 from "@/public/easter-outreach/8.jpeg";
import eo9 from "@/public/easter-outreach/9.jpeg";

import bd1 from "@/public/bible-distribution/1.jpeg";
import bd2 from "@/public/bible-distribution/2.jpeg";

import bicycle3 from "@/public/about-image.png";
import { Facebook, Mail, PhoneCallIcon } from "lucide-react";

export const bicycleImages = [
  bicycle,
  bicycle2,
  bicycle3,
  bicycle,
  bicycle2,
  bicycle3,
];
export const gamesOutreach = [gO1, gO2, bicycle, gO4, gO5, gO6, gO7, gO8, gO9];
export const christmasOutreach = [
  cO1,
  cO2,
  cO3,
  cO4,
  cO5,
  cO6,
  cO7,
  cO8,
  cO9,
  cO10,
  cO11,
];
export const easterOutreach = [eo1, eo2, eo3, eo4, eo5, eo6, eo7, eo8, eo9];
export const characterCharisma = [
  cc1,
  cc2,
  cc3,
  cc4,
  cc5,
  cc6,
  cc7,
  cc8,
  cc9,
  cc10,
  cc12,
  cc13,
  cc14,
  cc15,
  cc16,
  cc17,
  cc11,
];
export const bibleDistribution = [bd1, bd2];


export const footerLinks = [
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

export const socialLinks = [
  {
    icon: <Facebook color="white" />,
    url: "https://www.facebook.com/share/1JUd8RDpPk/",
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

export const navLinks = [
  {
    name: "About Us",
    url: "/about",
    dropdown: [
      { name: "Our Mission", url: "/about#mission" },
      { name: "Our Team", url: "/about#team" },
    ],
  },
  {
    name: "Programs",
    url: "/programs",
    dropdown: [
      { name: "Youth Program", url: "/programs/youth" },
      { name: "Children Program", url: "/programs/children" },
      { name: "Community Outreach", url: "/programs/outreach" },
    ],
  },
  { name: "Newsletter", url: "/newsletter" },
];