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
