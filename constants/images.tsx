import bicycle from "@/public/ride-bicycle.jpg";
import gO1 from "@/public/game-outreach/1.jpeg";
import gO2 from "@/public/game-outreach/2.jpeg";
import gO4 from "@/public/game-outreach/4.jpeg";
import gO5 from "@/public/game-outreach/5.jpeg";
import gO6 from "@/public/game-outreach/6.jpeg";
import gO7 from "@/public/game-outreach/7.jpeg";
import gO8 from "@/public/game-outreach/8.jpeg";
import gO9 from "@/public/game-outreach/9.jpeg";
import g10 from "@/public/game-outreach/10.jpeg";
import g11 from "@/public/game-outreach/11.jpeg";
import g12 from "@/public/game-outreach/12.jpeg";
import g13 from "@/public/game-outreach/13.jpeg";
import g14 from "@/public/game-outreach/14.jpeg";

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

import trainingPic1 from "@/public/training/dad-train.jpeg";
import trainingPic2 from "@/public/training/mum-train.png";

const importedImages = [
  { name: "bicycle", src: bicycle },
  { name: "bicycle3", src: bicycle3 },
  { name: "gO1", src: gO1 },
  { name: "gO2", src: gO2 },
  { name: "gO4", src: gO4 },
  { name: "gO5", src: gO5 },
  { name: "gO6", src: gO6 },
  { name: "gO7", src: gO7 },
  { name: "gO8", src: gO8 },
  { name: "gO9", src: gO9 },
  { name: "g10", src: g10 },
  { name: "g11", src: g11 },
  { name: "g12", src: g12 },
  { name: "g13", src: g13 },
  { name: "g14", src: g14 },
  { name: "cO1", src: cO1 },
  { name: "cO2", src: cO2 },
  { name: "cO3", src: cO3 },
  { name: "cO4", src: cO4 },
  { name: "cO5", src: cO5 },
  { name: "cO6", src: cO6 },
  { name: "cO7", src: cO7 },
  { name: "cO8", src: cO8 },
  { name: "cO9", src: cO9 },
  { name: "cO10", src: cO10 },
  { name: "cO11", src: cO11 },
  { name: "cc1", src: cc1 },
  { name: "cc2", src: cc2 },
  { name: "cc3", src: cc3 },
  { name: "cc4", src: cc4 },
  { name: "cc5", src: cc5 },
  { name: "cc6", src: cc6 },
  { name: "cc7", src: cc7 },
  { name: "cc8", src: cc8 },
  { name: "cc9", src: cc9 },
  { name: "cc10", src: cc10 },
  { name: "cc11", src: cc11 },
  { name: "cc12", src: cc12 },
  { name: "cc13", src: cc13 },
  { name: "cc14", src: cc14 },
  { name: "cc15", src: cc15 },
  { name: "cc16", src: cc16 },
  { name: "eo1", src: eo1 },
  { name: "eo2", src: eo2 },
  { name: "eo3", src: eo3 },
  { name: "eo4", src: eo4 },
  { name: "eo5", src: eo5 },
  { name: "eo6", src: eo6 },
  { name: "eo7", src: eo7 },
  { name: "eo8", src: eo8 },
  { name: "eo9", src: eo9 },
  { name: "bd1", src: bd1 },
  { name: "bd2", src: bd2 },
];

const getTags = (src: string): string[] => {
  const tags: string[] = [];

  if (src.includes("bicycle")) return ["games", "outreach"];
  if (src.includes("gO")) return ["games outreach", "games"];
  if (src.includes("cO")) return ["christmas outreach"];
  if (src.includes("cc")) return ["outreach"];
  if (src.includes("eo")) return ["easter outreach", "outreach"];
  if (src.includes("bd")) return ["bible distribution"];
  if (tags.length === 0) tags.push("miscellaneous"); // Fallback

  return tags;
};

export const bicycleImages = [bicycle, bicycle3, bicycle, bicycle3];
export const gamesOutreach = [gO1, gO2, bicycle, gO4, gO5, gO6, gO7, gO8, gO9, g10, g11, g12, g13, g14];
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

export const trainingPics = [trainingPic1, trainingPic2];

export const galleryImages: GalleryImage[] = importedImages.map(
  (img, index) => ({
    id: index + 1,
    src: img.src.src, // Image URL
    thumbnail: img.src.src, // Thumbnail URL
    alt: img.name, // Use name as alt text
    tags: getTags(img.name), // Use variable name for tags
  })
);
