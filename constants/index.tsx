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
import {
  BookOpen,
  Facebook,
  FileText,
  Gamepad,
  Gift,
  Heart,
  Mail,
  PhoneCallIcon,
  Tent,
  Video,
} from "lucide-react";
import fleshandspirit from "@/public/games/flesh-and-spirit.jpg";
import overcomers from "@/public/games/overcomers.jpg";
import lovecity from "@/public/games/lovecity.jpg";
import cardgames from "@/public/games/card-games.jpg";

const importedImages = [
  bicycle,
  bicycle2,
  bicycle3,
  gO1,
  gO2,
  gO4,
  gO5,
  gO6,
  gO7,
  gO8,
  gO9,
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
  cc11,
  cc12,
  cc13,
  cc14,
  cc15,
  cc16,
  cc17,
  eo1,
  eo2,
  eo3,
  eo4,
  eo5,
  eo6,
  eo7,
  eo8,
  eo9,
  bd1,
  bd2,
];

const getTags = (src: string): string[] => {
  if (src.includes("bicycle")) return ["games", "outreach", "event"];
  if (src.includes("gO")) return ["outreach", "volunteering", "help"];
  if (src.includes("cO")) return ["outreach", "donation", "community"];
  if (src.includes("cc")) return ["outreach", "fundraising", "awareness"];
  if (src.includes("eo")) return ["outreach", "gathering", "celebration"];
  if (src.includes("bd")) return ["bible", "party", "fun"];
  return ["miscellaneous"];
};

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
    // url: "/about",
    dropdown: [
      { name: "How it all began", url: "/about#begining" },
      { name: "The President's Blessing", url: "/about#blessing" },
      { name: "Our Vision & Mission", url: "/about#vision" },
    ],
  },
  {
    name: "Programs",
    // url: "/programs",
    dropdown: [
      { name: "Children Program", url: "/programs#children" },
      { name: "Community Outreach", url: "/programs#easter-outreach" },
    ],
  },
  { name: "Newsletter", url: "/newsletter" },
  { name: "Resources", url: "/resources" },
];

export const galleryImages: GalleryImage[] = importedImages.map(
  (img, index) => ({
    id: index + 1,
    src: img.src,
    thumbnail: img.src,
    alt: `${index + 1}`,
    tags: getTags(img.src),
  })
);

export const involvementWays = [
  {
    title: "Volunteering",
    description:
      "Serve as a volunteer in our programmes or offer professional services",
  },
  {
    title: "Prayer Partner",
    description:
      "Join our weekly WhatsApp prayer meetings on Mondays (18:00 WAT)",
  },
  {
    title: "Financial Partner",
    description: "Provide regular financial support for our ministry work",
  },
  {
    title: "Donor",
    description: "Donate materials, gift items, equipment, properties, etc.",
  },
  {
    title: "Invitation",
    description: "Invite us to reach children in your community",
  },
  {
    title: "Patron",
    description: "Serve as a patron of CCRM on recommendation",
  },
];

export const programs = [
  {
    title: "Weekly Bible Club",
    description:
      "Our weekly Bible Club is a great way for children to learn about God's love and make new friends.",
    icon: <BookOpen size={24} />,
    link: "/programs#bible-clubs",
    iconClassName: "bg-green-500",
  },
  {
    title: "Character & Charisma Camp",
    description:
      "Our annual holiday camp for children aged 4-15 focuses on building godly character and ethics through talks, Bible lessons, and creative activities.",
    icon: <Tent size={24} />,
    link: "/programs#holiday-camps",
    iconClassName: "bg-purple-500",
  },
  {
    title: "Monthly Game Outreach",
    description:
      "On the first Sunday of every month, we host a games and sports event for local children, followed by a sharing of God's Word and an altar call.",
    icon: <Gamepad size={24} />,
    link: "/programs#game-outreach",
    iconClassName: "bg-blue-500",
  },
  {
    title: "Easter Outreach",
    description:
      "Our Easter program feature worship, Bible lessons, games, and gift-giving. We also make an altar call for children to decide for Christ.",
    icon: <Heart size={24} />,
    link: "/programs#easter-outreach",
    iconClassName: "bg-pink-500",
  },
  {
    title: "Christmas Outreach",
    description:
      "Our Christmas program feature worship, Bible lessons, games, and gift-giving. We also make an altar call for children to decide for Christ.",
    icon: <Gift size={24} />,
    link: "/programs#christmas-outreach",
    iconClassName: "bg-red-500",
  },
  {
    title: "Training Programmes",
    description:
      "At CCRM, we're passionate about equipping children's teachers, caregivers, and parents with the skills and knowledge needed to inspire and nurture young minds. Our comprehensive training programmes, offered both online and onsite, provide practical insights and expert guidance.",
    icon: <BookOpen size={24} />,
    link: "/programs#training",
    iconClassName: "bg-orange-500",
  },
];

export const resourceCategories = [
  {
    title: "Curriculum Materials",
    description:
      "Comprehensive, age-appropriate Bible study materials for different contexts",
    icon: <BookOpen className="h-8 w-8 text-white" />,
    color: "bg-blue-500",
  },
  {
    title: "Activity Guides",
    description:
      "Creative activities, games, and crafts that reinforce biblical lessons",
    icon: <FileText className="h-8 w-8 text-white" />,
    color: "bg-green-500",
  },
  {
    title: "Visual Resources",
    description:
      "Videos, presentations, and visual aids to enhance children's learning",
    icon: <Video className="h-8 w-8 text-white" />,
    color: "bg-purple-500",
  },
  {
    title: "Bible Games",
    description:
      "Godly games that teach children about biblical truths and character-building",
    icon: <Gamepad className="h-8 w-8 text-white" />,
    color: "bg-pink-500",
  },
];

export const featuredResources = [
  {
    title: "Flesh & Spirit",
    description: {
      title: "Build godly character and live a Spirit-filled life! This game:",
      body: [
        "Challenges you to make wise choices and develop Christ-like character",
        "Encourages Spirit-led living, helping you overcome the flesh",
        "Fosters a deeper understanding of spiritual growth and maturity",
      ],
    },
    type: "Bible Board Game",
    image: fleshandspirit,
  },
  {
    title: "Overcomers",
    description: {
      title: "Join the battle for spiritual victory! Players will discover:",
      body: [
        "How to conquer sin and Satan's stronghold",
        "7 powerful principles for victorious Christian living",
        "Soul-winning adventure",
      ],
    },
    type: "Bible Board Game",
    image: overcomers,
  },
  {
    title: "Love City",
    description: {
      title:
        "Live out your faith in a city that needs love! This game encourages:",
      body: [
        "Practical Christian living: visit the sick, help the poor, and give to God",
        "Selfless acts of kindness: experience the joy of serving others",
        "Sharing Christ's love with those around you",
      ],
    },
    type: "Bible Board Game",
    image: lovecity,
  },
  {
    title: "Card Games",
    description: {
      title:
        "Equip for Battle, Empower for Evangelism. Get ready to engage in epic spiritual battles and emerge victorious for Christ! Our card games are designed to:",
      body: [
        "Equip you with powerful strategies to overcome temptations and spiritual attacks from the kingdom of darkness",
        "Empower you with God's armour and mighty power to withstand the enemy's assaults",
        "Sharpen your evangelism skills with effective soul-winning strategies",
      ],
    },
    type: "Bible Card Games",
    image: cardgames,
  },
];
